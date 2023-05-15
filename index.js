const fs = require("fs");
const puppeteer = require("puppeteer");
const pageToScrape = "https://chninc.org/donate.html";

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--use-gl=egl"],
  });
  const page = await browser.newPage();
  await page.goto(pageToScrape);
  await page.waitForSelector("html");
  // await page.setViewport({ width: 1920, height: 1080 });

  // await page.screenshot({ path: "chn.png", fullPage: true });
  //   await page.pdf({ path: "chn.pdf", format: "A4" });

  const html = await page.content();

  //   const courses = await page.$$eval("#cscourses .card", (elements) =>
  //     elements.map((e) => ({
  //       title: e.querySelector(".card-body h3").innerText,
  //       level: e.querySelector(".card-body .level").innerText,
  //       url: e.querySelector(".card-footer a").href,
  //       //   promo: e.querySelector(".card-footer .promo-code .promo").innerText,
  //     }))
  //   );

  // const chn = await page.$$eval(
  //   ".collection-item .collection-item__content",
  //   (elements) =>
  //     elements.map((e) => ({
  //       title: e.querySelector(".collection-item-label").innerText,
  //       description: e.querySelector(".collection-item-description p")
  //         .innerText,
  //     }))
  // );

  // Save data to JSON file.....
  fs.writeFile("Scrapes/CHN/donate.html", html, (err) => {
    if (err) throw err;
    console.log("File saved....");
  });

  await browser.close();
}

run();
