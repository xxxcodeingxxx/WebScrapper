const fs = require("fs");
const puppeteer = require("puppeteer");
const pageToScrape = "https://chninc.org/about-chn/partners-supporters.html";

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--use-gl=egl"],
  });
  const page = await browser.newPage();
  await page.goto(pageToScrape);
  //   await page.waitForSelector(".primary_content");
  await page.setViewport({ width: 1920, height: 1080 });

  await page.screenshot({ path: "chn.png", fullPage: true });
  //   await page.pdf({ path: "chn.pdf", format: "A4" });

  //   const html = await page.content();

  //   const courses = await page.$$eval("#cscourses .card", (elements) =>
  //     elements.map((e) => ({
  //       title: e.querySelector(".card-body h3").innerText,
  //       level: e.querySelector(".card-body .level").innerText,
  //       url: e.querySelector(".card-footer a").href,
  //       //   promo: e.querySelector(".card-footer .promo-code .promo").innerText,
  //     }))
  //   );

  //   const chn = await page.$$eval(".primary_content", (elements) =>
  //     elements.map((e) => ({
  //       first: e.querySelector("h1").innerText,
  //       paraOne: e.querySelector("p").innerText,
  //       title: e.querySelector("h3").innerText,
  //     }))
  //   );

  // Save data to JSON file.....
  //   fs.writeFile("index.html", html, (err) => {
  //     if (err) throw err;
  //     console.log("File saved....");
  //   });
  await browser.close();
}

run();
