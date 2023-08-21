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

Auto-generate tests with Codegen: 
  `npx playwright codegen`

## We suggest that you begin by typing:
   `npx playwright test`

## Install Extension

Playwright Test for VSCode

Playwright Test Snippets

Playwright Runner

Playwright Trace Viewer for VSCode


## Debug 
* __Debug in Console__

`DEBUG=pw:api basic_test_command`

`DEBUG=pw:api npx playwright test home.spec.ts -g "Open\s+About\s+Page\s+and\s+verify\s+title$"`
![image](https://github.com/avsaryagmur/PlaywrightAutomation/assets/60423117/16954c6b-59cf-4416-9923-9249ff372de4)


* __Debug with Trace Viewer__
1. Open the playwright.cnfig.ts file
2. Use  the "trace: 'on'," command instead of "trace: 'on-first-retry'," 
3. Run a test with the "Execute Playwright Tests" extension
trace on what will work for each particular test
Also, it will open the report automatically and you will find a Trace section below.
![image](https://github.com/avsaryagmur/PlaywrightAutomation/assets/60423117/19885b0f-b0af-48b2-8fb5-10ff6d15fede)

* __Debug with Inspector__
  
It will open a playwright inspector and you can debug it by clicking the next step button. So it gives an opportunity to watch lines step by step

`PWDEBUG=1 basic_test_command`


`PWDEBUG=1 npx playwright test assertions.spec.ts -g "Avoid\s+running\s+further\s+if\s+there\s+were\s+soft\s+assertion\s+failures$"`

<img width="1250" alt="image" src="https://github.com/avsaryagmur/PlaywrightAutomation/assets/60423117/216dbc99-c0d6-490b-8c7b-ae1518cf926a">


* __Debug with Record__
Put ` await page.pause(); ` to your code and debug with inspector


![image](https://github.com/avsaryagmur/PlaywrightAutomation/assets/60423117/4fcfb793-8e6e-4fa8-aecb-abceb1c410ef)

