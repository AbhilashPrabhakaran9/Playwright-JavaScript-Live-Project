
class signupvalid {

    constructor(page){
        this.page=page;

        this.signup = page.locator("#signin2");
        this.usernamefield = page.locator("#sign-username");
        this.passwordfield = page.locator("#sign-password");
        this.signupbutton = page.locator(".btn.btn-primary").nth(1);
    }

    async tapsignup(signup){
        await this.signup.click();
    }

    async enterusername(username){
        await this.usernamefield.fill(username);
    }

    async enterpassword(password){
        await this.passwordfield.fill(password);
    }

    async clicksignup(signupbutton){
        await this.signupbutton.click();
    }




}

export default signupvalid