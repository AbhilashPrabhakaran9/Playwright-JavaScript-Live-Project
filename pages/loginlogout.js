//Test case 10
class loginlogout {

    constructor(page){

        this.page = page;
        this.logoutclick = page.locator("#logout2");
        
    }

    async logoutbutton(logoutclick) {
        await this.logoutclick.click();
    }

    //await page.locator("#logout2").click();


}

export default loginlogout;
