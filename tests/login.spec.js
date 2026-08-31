import {test,expect} from '@playwright/test';
import loginpage  from '../pages/loginpage.js';
import normaltestdata from '../utils/normaltestdata.json' with {type:"json"}
import paratestdata from '../utils/paratestdata.json' with {type:"json"}

//Test case 3
test('DemoBlaze valid Login' , async({page})=>{

    await page.goto("https://demoblaze.com/");

    const vl = new loginpage(page);

    let usernamevalue = normaltestdata.username
    let passwordvalue = normaltestdata.password

    await vl.logintap();
    await vl.enterusername(usernamevalue);
    await vl.enterpassword(passwordvalue);
    await vl.clicklogin();

    await expect(page.locator("#nameofuser")).toHaveText("Welcome abhilash.9");    

}) 

//Test case 4,5,6

for(const data of paratestdata) {
test.only(`DemoBlaze invalid Logins ${data.username} , ${data.password}` , async({page})=>{

    await page.goto("https://demoblaze.com/");

    await page.waitForTimeout(1000);

    const ivl = new loginpage(page);

    let usernamevalue = data.username;
    let passwordvalue = data.password;

    await ivl.logintap();
    await ivl.enterusername(usernamevalue);
    await ivl.enterpassword(passwordvalue);
    await ivl.clicklogin();
    page.on('dialog', dialog => dialog.accept());
    await ivl.clickclose();
    await expect(page).toHaveURL("https://demoblaze.com/");

})

}