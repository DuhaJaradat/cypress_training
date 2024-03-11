const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'igukpo',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://magento.softwaretestingboard.com/",
   //viewportHeight:500,
 //viewportWidth:500  
  },
  watchForFileChanges:true
});
