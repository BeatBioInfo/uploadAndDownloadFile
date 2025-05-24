
  const { defineConfig } = require('cypress');
  const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

  
  module.exports = defineConfig({
      e2e: {
          // baseUrl: 'https://staging.trymima.com/',
          baseUrl: 'https://www.lambdatest.com/selenium-playground/',
          experimentalWebKitSupport: true,
          watchForFileChanges: false,
          viewportHeight: 960,
          viewportWidth: 1500,
          failonStatusCode: false,
          chromeWebSecurity: false,
          setupNodeEvents(on, config) {
             on('task', {downloadFile})
            // implement node event listeners here
          },
      },
  });
      