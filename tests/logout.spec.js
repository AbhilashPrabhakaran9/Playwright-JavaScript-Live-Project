import {test,expect} from '@playwright/test';
import loginpage  from '../pages/loginpage.js';
import loginlogout from '../pages/loginlogout.js'
import normaltestdata from '../utils/normaltestdata.json' with {type:"json"}

test('DemoBlaze valid Login Logout' , async({page})=>{

    await page.goto("https://demoblaze.com/");

    const vl = new loginpage(page);

    let usernamevalue = normaltestdata.username
    let passwordvalue = normaltestdata.password

    await vl.logintap();
    await vl.enterusername(usernamevalue);
    await vl.enterpassword(passwordvalue);
    await vl.clicklogin();

    const lo = new loginlogout(page);
    await lo.logoutbutton();

    await page.waitForTimeout(1000);

    await expect(page.locator(".nav-link").nth(4)).toHaveText("Log in");


   //await page.locator("#logout2").click();


}) 