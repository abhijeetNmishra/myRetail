# myRetail

myRetail is a study to create boilerplate for building high performant responsive retail site. Demo page is Product detail page based on sample json data.

## Initial Machine Setup
1. **Install [Node 6.0.0 or greater](https://nodejs.org)**
2. **Install [Git](https://git-scm.com/downloads)**. 
3. **[Disable safe write in your editor](http://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write)** to assure hot reloading works properly.

## Get Started
1. **Clone the project**. `git clone https://github.com/abhijeetNmishra/myRetail`.
2. `cd myRetail`
3. run `npm install`, this will install all depencies and dev depenencies inside node_modules folder.
4. run project with `npm start`, this will run the project locally on http://localhost:3000

## Technologies
This boilerplate has been built on top of following client/server side stack:

| **Tech** | **Description** |
|----------|-------|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.    |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).|
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     |
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). |
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. |
| [PostCSS](https://github.com/postcss/postcss) | Transform styles with JS plugins. Used to autoprefix CSS |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. |
| [jest](https://github.com/facebook/jest) | Testing framework which makes writing react based testing easier |
| [enzym](http://airbnb.io/enzyme/) | Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output. |
| [webdriver](http://webdriver.io/) | Selenium 2.0 bindings for NodeJS, used to functional testing |

## data
static data has been provided in form of item-data.json file ( just for an example ).

## running tests
run `npm run test` to all unit tests for components

## validing linting
run `npm run lint` to validate all linting aspect of JavaScript

## running functional test
To test functional tests locally, we need to make sure, localhost is up and running before executing the tests
run folling command in two separate tabs:
run `npm start`
run `npm run functions`

 