/* eslint-disable global-require */
const express = require('express');
const path = require('path');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const prodData = require(path.resolve(process.cwd(), 'item-data.json'));
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const ReactRouterRedux = require('react-router-redux');
const createHistory = require('react-router/lib/createMemoryHistory');
const ClientRoot = require('../../client/Root').default;
const getRoutes = require('../../client/routes').default;
const configureStore = require('../../client/redux/configureStore').default;
const fetchBrowseData = require('../../client/redux/actions').default;

const match = ReactRouter.match;

const renderOnServer = (res, store, history) => {
  const html = ReactDOMServer.renderToString(React.createElement(ClientRoot, { store, history }));
  res.render('index', { html, preloadedState: store.getState() });
};

module.exports = (app, options) => {
  const isDev = process.env.NODE_ENV === 'development';

  // set the view engine to ejs
  app.set('views', path.resolve(process.cwd(), 'server/views'));
  app.set('view engine', 'pug');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(cookieParser());

  app.use('/api/browse', (req, res) => {
    res.json(prodData);
  });

  if (isDev) {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('../../webpack.dev.babel');
    const compiler = webpack(webpackConfig);
    const middleware = webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
      silent: true,
      stats: 'errors-only',
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
  } else {
    const publicPath = options.publicPath || '/';
    const outputPath = options.outputPath || path.resolve(process.cwd(), 'dist');
    // compression middleware compresses your server responses which makes them
    // smaller (applies also to assets). You can read more about that technique
    // and other good practices on official Express.js docs http://mxs.is/googmy
    app.use(compression());
    app.use(publicPath, express.static(outputPath));
  }

  app.get('/', (req, res, next) => {
    const memoryHistory = createHistory(req.originalUrl);
    const store = configureStore({});
    const history = ReactRouterRedux.syncHistoryWithStore(memoryHistory, store);

    match({ history, routes: getRoutes(history), location: req.originalUrl }, (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        res.redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (error) {
        log.error(error);
        res.status(500);
      } else if (renderProps) {
        /**
         * Render server-side page definition
         *
         * Instantiates data store, invokes async fetch to retrieve page definition for url, and then
         * renders and returns React markup.
         */
        store.dispatch(fetchBrowseData(prodData));
        renderOnServer(res, store, history);
          // .then(() => {
          //
          // })
          // .catch((err) => {
          //   log.error(err);
          //   if (err.status === 404) {
          //     renderOnServer(res, store, history);
          //     next();
          //     return;
          //   }
          //   next(error);
          // });
      } else {
        res.status(404).send('Not found');
      }
    });
  });

  return app;
};
