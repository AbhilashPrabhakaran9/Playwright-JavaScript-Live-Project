import {test,expect} from "@playwright/test";
import loginpage from "../pages/loginpage.js"
import productincart from "../pages/productincart.js"
import productunderphones from "../pages/productunderphones.js";
import productundermonitors from "../pages/productundermonitors.js";
import normaltestdata from "../utils/normaltestdata.json" with {type: "json"}

test.beforeEach(async({page})=>{
    await page.goto("https://demoblaze.com/");

    const v1 = new loginpage(page);
    let usernamevalue = normaltestdata.username;
    let passwordvalue = normaltestdata.password;

    await v1.logintap();
    await v1.enterusername(usernamevalue);
    await v1.enterpassword(passwordvalue);
    await v1.clicklogin();
})

//Test cases 7,8,9

//Test case 7
test('Product in cart', async({page})=>{

    //await page.goto("https://demoblaze.com/");

    /*const v1 = new loginpage(page);
    let usernamevalue = normaltestdata.username;
    let passwordvalue = normaltestdata.password;

    await v1.logintap();
    await v1.enterusername(usernamevalue);
    await v1.enterpassword(passwordvalue);
    await v1.clicklogin();*/

    const p1 = new productincart(page);
    await p1.productselect();
    await p1.clickcart();

    //await page.locator(".hrefch").nth(0).click();
    //await page.locator(".btn.btn-success.btn-lg").click();
    page.on('dialog', dialog => dialog.accept());
    await page.waitForTimeout(1000);

    await expect(page.locator(".name").nth(0)).toHaveText("Samsung galaxy s6");


})

//Test case 8
test('Product purchase under phones', async({page})=>{

    /*await page.goto("https://demoblaze.com/");

    const v1 = new loginpage(page);
    let usernamevalue = normaltestdata.username;
    let passwordvalue = normaltestdata.password;

    await v1.logintap();
    await v1.enterusername(usernamevalue);
    await v1.enterpassword(passwordvalue);
    await v1.clicklogin();*/

    const p2 = new productunderphones(page);
    await p2.phonestabclick();
    await p2.mobileselect();
    await p2.addtocartbutton();

    page.on('dialog', dialog => dialog.accept());
    await page.waitForTimeout(1000);

    await p2.cart_tap();
    await p2.ordering();

    await p2.enterdetails()

    /*await p2.entername();
    await p2.entercountry();
    await p2.entercity();
    await p2.entercard();
    await p2.entermonth();
    await p2.enteryear();*/


    await p2.clickpurchasebutton();
    await p2.clickok();
    await expect(page.locator(".nav-link").nth(0)).toHaveText("Home (current)");


    /*await page.locator(".list-group-item").nth(1).click();
    await page.locator(".hrefch").nth(6).click();
    await page.locator(".btn.btn-success.btn-lg").click();
    page.on('dialog', dialog => dialog.accept());
    await page.waitForTimeout(1000);

    await page.locator(".nav-link").nth(3).click();
    await page.locator(".btn.btn-success").click();
    
    await page.locator("#name").fill("Test_name");
    await page.locator("#country").fill("Test_Country");
    await page.locator("#city").fill("Test_City");
    await page.locator("#card").fill("Test_Card");
    await page.locator("#month").fill("Test_Month");
    await page.locator("#year").fill("Test_Year");

    await page.locator(".btn.btn-primary").nth(2).click();
    */


})

//Test case 9
test('Product purchase under Monitors', async({page})=>{

    /*await page.goto("https://demoblaze.com/");

    const v1 = new loginpage(page);
    let usernamevalue = normaltestdata.username;
    let passwordvalue = normaltestdata.password;

    await v1.logintap();
    await v1.enterusername(usernamevalue);
    await v1.enterpassword(passwordvalue);
    await v1.clicklogin();*/

    const p3 = new productundermonitors(page);
    await p3.monitorstabclick();
    await p3.monitorselect();
    await p3.addtocartbutton();

    page.on('dialog', dialog => dialog.accept());
    await page.waitForTimeout(1000);

    await p3.cart_tap();
    await p3.ordering();

    //await page.waitForTimeout(1000);
    await p3.enterdetails();
    /*await p3.entername();
    await p3.entercountry();
    await p3.entercity();
    await p3.entercard();
    await p3.entermonth();
    await p3.enteryear();*/
    await p3.clickpurchasebutton();
    await p3.clickok();
    await expect(page.locator(".nav-link").nth(1)).toHaveText("Contact");


    /*await page.locator(".list-group-item").nth(3).click();
    await page.locator(".hrefch").nth(1).click();
    await page.locator(".btn.btn-success.btn-lg").click();
    page.on('dialog', dialog => dialog.accept());
    await page.waitForTimeout(1000);

    await page.locator(".nav-link").nth(3).click();
    await page.locator(".btn.btn-success").click();
    
    await page.locator("#name").fill("Test_name");
    await page.locator("#country").fill("Test_Country");
    await page.locator("#city").fill("Test_City");
    await page.locator("#card").fill("Test_Card");
    await page.locator("#month").fill("Test_Month");
    await page.locator("#year").fill("Test_Year");

    await page.locator(".btn.btn-primary").nth(2).click();
    */


})

