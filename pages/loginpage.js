
class loginpage {

    constructor(page) {

        this.page = page;
        this.login = page.locator("#login2");
        this.userfield = page.locator("#loginusername");
        this.passfield = page.locator("#loginpassword");
        this.loginbutton = page.locator(".btn.btn-primary").nth(2);
        this.closebutton = page.locator(".btn.btn-secondary").nth(2);

    }

    async logintap(login){
        await this.login.click(); 
    }

    async enterusername(username) {
        await this.userfield.fill(username);
    }

    async enterpassword(password){
        await this.passfield.fill(password);
    }

    async clicklogin(loginbutton) {
        await this.loginbutton.click();
    }

    async clickclose(closebutton){
        await this.closebutton.click();
    }

}

export default loginpage