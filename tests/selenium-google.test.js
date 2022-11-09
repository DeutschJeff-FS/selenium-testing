require("dotenv").config();
const { Builder, By, Key } = require("selenium-webdriver");

describe("Selenium Testing", () => {
  let driver;
  beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
  });
  afterAll(async () => {
    await driver.quit();
  });

  const setDelay = async () => {
    await driver.sleep(1000);
  };

  it("should open homepage", async () => {
    await driver.get(`localhost:${process.env.port}`);
    await setDelay();
  });
  it("should open contact page", async () => {
    await driver.get(driver.getCurrentUrl());
    let anchor = await driver.findElements(By.css("a"));
    for (let e of anchor) {
      if ((e = driver.findElement(By.name("contact")))) {
        e.click();
      }
    }
    await setDelay();
  });
  it("should sign up for more info via email", async () => {
    await driver.get(driver.getCurrentUrl());
    let email = await driver.findElements(By.name("email"));
    if (email) {
      await driver.actions().sendKeys("email@email.com").sendKeys(Key.TAB);
      await setDelay();
      await driver.actions().sendKeys(Key.RETURN).perform();
    }
  });
});
