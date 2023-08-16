# PlaywrightAutomation

## Inside that directory, you can run several commands:

Runs the end-to-end tests:
  `npx playwright test`

Starts the interactive UI mode:
  `npx playwright test --ui`

Runs the tests only on Desktop Chrome:
  `npx playwright test --project=chromium`

Runs the tests in a specific file.: 
  `npx playwright test example`
   
Runs the tests in debug mode:
  `npx playwright test --debug`

Auto generate tests with Codegen: 
  `npx playwright codegen`

## We suggest that you begin by typing:
   `npx playwright test`

## Debug 
* __Debug in Console__

`DEBUG=pw:api basic_test_command`

`DEBUG=pw:api npx playwright test home.spec.ts -g "Open\s+About\s+Page\s+and\s+verify\s+title$"`


* __Debug with Trace Viewer__
1. Open pkaywright.cnfig.ts file
2. Use  "trace: 'on'," command instead of "trace: 'on-first-retry'," 
3. Run test with "Execute Playwright Tests" extention
trace on will work for each particular tests
Also, it will open the report automatically and you will find a Trace section below.

* __Debug with Inspector__
It will open a playwright inspector and you can debug it by clicking the next step button. So it gives an opportunity to watch line's step by step

`PWDEBUG=1 basic_test_command`


`PWDEBUG=1 npx playwright test assertions.spec.ts -g "Avoid\s+running\s+further\s+if\s+there\s+were\s+soft\s+assertion\s+failures$"`