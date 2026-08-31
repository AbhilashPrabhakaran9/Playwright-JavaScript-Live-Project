//Test case 7
class productincart {

    constructor(page){
        this.page = page;
        this.product = page.locator(".hrefch").nth(0);
        this.cart = page.locator(".btn.btn-success.btn-lg");


        //await page.locator(".hrefch").nth(0).click();
        //await page.locator(".btn.btn-success.btn-lg").click();

    }

    async productselect(product){
        await this.product.click();
    }

    async clickcart(cart){
        await this.cart.click();
    }

   /*  async clicklogin(loginbutton) {
        await this.loginbutton.click();
    }*/
}

export default productincart