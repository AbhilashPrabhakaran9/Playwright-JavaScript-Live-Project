//Test case 8
class productunderphones {

    constructor(page){

        this.page = page;
        this.phonestab = page.locator(".list-group-item").nth(1);
        this.mobile = page.locator(".hrefch").nth(6);
        this.addtocart = page.locator(".btn.btn-success.btn-lg");
        this.cartclick = page.locator(".nav-link").nth(3);
        this.placeorder = page.locator(".btn.btn-success");
        this.name = page.locator("#name");
        this.country = page.locator("#country");
        this.city = page.locator("#city");
        this.card = page.locator("#card");
        this.month = page.locator("#month");
        this.year = page.locator("#year");
        this.purchaseclick = page.locator(".btn.btn-primary").nth(2);
        this.ok = page.locator(".confirm.btn.btn-lg.btn-primary");

    }

    async phonestabclick(phonestab) {
        await this.phonestab.click();
    }

    async mobileselect(mobile) {
        await this.mobile.click();
    }

    async addtocartbutton(addtocart){
        await this.addtocart.click();
    }

    async cart_tap(cartclick){
        await this.cartclick.click();
    }

    async ordering(placeorder){
        await this.placeorder.click();
    }

    async enterdetails(name, country, city, card, month, year) {
        
        await this.name.fill("Test_name");
        await this.country.fill("Test_Country");
        await this.city.fill("Test_City");
        await this.card.fill("Test_Card");
        await this.month.fill("Test_Month");
        await this.year.fill("Test_Year");

    }

    /*async entername(name){
        await this.name.fill("Test_name");
    }

    async entercountry(country){
        await this.country.fill("Test_Country");
    }

    async entercity(city){
        await this.city.fill("Test_City");
    }

    async entercard(card){
        await this.card.fill("Test_Card");
    }

    async entermonth(month) {
        await this.month.fill("Test_Month");
    }

    async enteryear(year) {
        await this.year.fill("Test_Year");
    }*/

    async clickpurchasebutton(purchaseclick){
        await this.purchaseclick.click();
    }

    async clickok(ok){
        await this.ok.click();
    }






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

    await page.locator(".btn.btn-primary").nth(2).click();*/
}

export default productunderphones