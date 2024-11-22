const {chromium,test, expect,} = require("@playwright/test")

test('browsing site', async () => {
    const browse = await chromium.launch({
        headless: false,
    });  
    const page = await browse.newPage();
    await page.goto('https://darashaw.hrmthread.com/HrmThread/view/loginmain.aspx?1=1&key=darashaw&mod=ess&code=DCPL&usn=60021')
    const pagetitle = await page.title();
    await expect(page).toHaveTitle(pagetitle)
    console.log(pagetitle);
    console.log("This is SADIQ BASHA")
    console.log("testing git");
    
})