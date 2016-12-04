exports.config = {
  specs: [
    './**/*.wdio.js'
  ],
  exclude: [
      // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  capabilities: [],

  // By default WebdriverIO commands are executed in a synchronous way using
  // the wdio-sync package. If you still want to run your tests in an async way
  // e.g. using promises you can set the sync option to false.
  sync: true,

  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: 'verbose',

  // Enables colors for log output.
  coloredLogs: true,

  // Saves a screenshot to a given path if a command fails.
  screenshotPath: './screen-shots/errors/',

  // Set a base URL in order to shorten url command calls. If your url parameter starts
  // with "/", then the base url gets prepended.
  // TODO: Create and run local server that runs tests.
  baseUrl: 'http://localhost:3000',

  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,

  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,

  // Default request retries count
  connectionRetryCount: 3,

  services: [],

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 15000,
    compilers: ['js:babel-register']
  },

  // Gets executed once before all workers get launched.
  onPrepare: function (config, capabilities) {
  },

  // Gets executed before test execution begins. At this point you can access all global
  // variables, such as `browser`. It is the perfect place to define custom commands.
  before: function (capabilities, specs) {
  },

  // Hook that gets executed before the suite starts
  beforeSuite: function (suite) {
  },

  // Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
  // beforeEach in Mocha)
  beforeHook: function () {
  },

  // Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
  // afterEach in Mocha)
  afterhook: function () {
  },

  // Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
  beforeTest: function (test) {
  },
  //
  // Runs before a WebdriverIO command gets executed.
  beforeCommand (commandName, args) {
  },

  // Runs after a WebdriverIO command gets executed
  afterCommand: function (commandName, args, result, error) {
  },

  // Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
  afterTest: function (test) {
  },

  // Hook that gets executed after the suite has ended
  afterSuite: function (suite) {
  },

  // Gets executed after all tests are done. You still have access to all global variables from
  // the test.
  after: function (result, capabilities, specs) {
  },

  // Gets executed after all workers got shut down and the process is about to exit. It is not
  // possible to defer the end of the process using a promise.
  onComplete: function(exitCode) {
  }
}