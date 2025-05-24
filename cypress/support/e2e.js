
// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-file-upload'
import 'cypress-downloadfile/lib/downloadFileCommand';

Cypress.on('uncaught:exception', (err) => {
    console.error('Uncaught exception:', err);   
      return false; 
  });
            