# WDIO_DEMO
 WebdriverIO Demo Repo - Ready to Run

## Getting started
- clone repo to desired location
- enter repo directory
- Enter the following commands

> npm install

Congrats! you are ready to go. That was easy. Here is a test command you can try to make sure everything was installed correctly.

> npm run chrome_main -- --suite web

Crawl through the output and make sure there are no errors (warnings are ok) - if you don't find any, all is well :)

To generate an allure report do the following:

> First, run any test suite/spec with the 'chrome_main' config. the files which the report is generated from are not create with the chrome_quiet config

> Allure generate —clean && open

Please note that copy pasting the above into your command line will bring unintended formatting (two dashes != longdash ascii)
All done!