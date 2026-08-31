import {test,expect} from "@playwright/test"; //expect is showing as dimmed because i havenot used in this code file
//import {page} from "@playwright/test"; //This line is not required because i already get 'page' from test fixture down 
import signupvalid from '../pages/signupvalid.js';
import signupclose from "../pages/signupclose.js";


//Test case 1 - Valid Sign up [Sign up --> Enter data --> Click Sign up]
test("DemoBlaze Sign up", async({page})=>{
    await page.goto("https://demoblaze.com/");
    const su = new signupvalid(page);

    //await page.locator("#signin2").click();
    await su.tapsignup();

    //await page.locator("#sign-username").fill("abhilash.9");
    await su.enterusername("abhilash.9");
    
    //await page.locator("#sign-password").fill("obsqura");
    await su.enterpassword("obsqura");

    //await page.locator(".btn.btn-primary").nth(1).click();
    await su.clicksignup();

    page.on('dialog', dialog => dialog.accept());

    await page.waitForTimeout(1000);

    await expect(page).toHaveTitle("STORE");

});

//Test case 2 - Sign up and close [Sign up --> Enter data --> Click close]
test.only("DemoBlaze Sign up close", async({page})=>{
    await page.goto("https://demoblaze.com/");
    const suc = new signupclose(page);
    
    //await page.locator("#signin2").click();
     await suc.tapsignup();

    //await page.locator("#sign-username").fill("abhilash.9");
    await suc.enterusername("abhilash.9");

    //await page.locator("#sign-password").fill("obsqura");
    await suc.enterpassword("obsqura");

    //await page.locator(".btn.btn-secondary").nth(1).click();
    await suc.clickclose();

    await expect(page).toHaveURL("https://demoblaze.com/");

});


