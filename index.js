const fs = require("fs");
const puppeteer = require("puppeteer");
const pageToScrape = "https://traversymedia.com";

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(pageToScrape);
  await page.waitForSelector("#cscourses .card");
  //   await page.setViewport({ width: 1920, height: 1080 });

  //   await page.screenshot({ path: "example.png", fullPage: true });
  //   await page.pdf({ path: "example.pdf", format: "A4" });

  //   const html = await page.content();

  const courses = await page.$$eval("#cscourses .card", (elements) =>
    elements.map((e) => ({
      title: e.querySelector(".card-body h3").innerText,
      level: e.querySelector(".card-body .level").innerText,
      url: e.querySelector(".card-footer a").href,
      //   promo: e.querySelector(".card-footer .promo-code .promo").innerText,
    }))
  );
  //   console.log(courses);
  // Save data to JSON file.....
  fs.writeFile("courses.json", JSON.stringify(courses), (err) => {
    if (err) throw err;
    console.log("File saved....");
  });
  await browser.close();
}

run();
