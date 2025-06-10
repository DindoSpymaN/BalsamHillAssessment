# Balsam Hills Automation Code Assessment

This project was created as part of the application for the Principal Quality Engineer position at Balsam Hill.

## Overview

 This is an automated testing program built using the Playwright framework with TypeScript, following the test scenario enumerated in the Automation_Code_Assessment.pdf file.

## Clone and Execute the test

1. Download all files in the "https://github.com/DindoSpymaN/BalsamHillAssessment" github repository
2. Install Jest "npm install --save-dev jest" (https://jestjs.io/docs/getting-started)
3. To support Typescript, install tsjest "npm install --save-dev ts-jest" "https://jestjs.io/docs/getting-started#using-typescript"
4. Install the type definitions "npm install --save-dev @types/jest"
5. In the command prompt, load the directory where you save all the files from the github repository
6. Run jest "npm test"

## Test Output

It should show these logs while running:
------------------------------------
1. Balsam Hill Landing page is loaded
2. Christmas Tree is searched through search bar.
3. Results page is loaded.
4. Item #3 is selected, price is  <ITEM_PRICE>
5. Item page is loaded, displayed price is  <ITEM_PRICE>
6. Both price is the same.
7. Item is added to cart.
8. Cart is now viewed, total price is  <ITEM_PRICE>
9. Price is still the same.
10. 1 Mark is visible on cart icon.
11. Item is removed from cart.
12. Browser is closed.
------------------------------------

## Note on Customization Step

Part of the provided test scenario involves applying customization options to a product. However, this step is intentionally excluded from the automation script.

This decision was made because another part of the scenario requires comparing the product price between the results page and the cart page. Applying any customization alters the product's base price, which would cause this comparison to fail and result in a broken test.

To maintain the integrity and reliability of the price verification step, customization has been omitted from the automated flow.