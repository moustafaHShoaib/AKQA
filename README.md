# AKQA Assingment 
## Automation Part 
- Solution is built on top of Typescript and playwright
- please follow the following instruction to install the project
- to be able to integrate the project with CI/CD we can define a yaml file to run the tests or execute the test directly by running the keywords attached to the package.json file
- the solution contains 2 tests to represent happy & unhappy flows inside the ageVerification.spec.ts file

## Setup
- to be able to run the project we have to run  'npm install' in project location to be install the dependencies. 
- to be able to run the tests in playwright UI please run 'npx playwright test --ui' or keyword 'npm run test:ui'
- to be able to run the tests in headed mode please run 'npx playwright test --headed' or keyword 'npm run test:headed'
- to support more browsers please uncomment browsers from playwright.config.ts file (chrome is the only supported browser for this demo)
- you can find test results in the test results folder you can find playwright report in the folder 'playwright-report'
- you can change the Website URL in testData.json file
