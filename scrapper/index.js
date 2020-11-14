const puppeteer = require("puppeteer");

(async () => {
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.imdb.com/list/ls002206094/");
  await page.waitForSelector("h3.lister-item-header a");
  await page.waitForSelector("span.genre");
  await page.waitForSelector("div.lister-item-content > p:nth-child(5)");
  await page.waitForSelector("img.loadlate");
  await autoScroll(page);
   


  var scrap = await page.evaluate(() => {
    var moviesTitle = document.querySelectorAll("h3.lister-item-header a");
    var titles = Array.from(moviesTitle).map(titles => {
      return titles.text;
    });

    var moviesGenre = document.querySelectorAll("span.genre");
    var genres = Array.from(moviesGenre).map(genres => {
      return genres.outerText;
    });

    var moviesDescription = document.querySelectorAll(
      "div.lister-item-content > p:nth-child(5)"
    );
    var descriptions = Array.from(moviesDescription).map(descriptions => {
      if (descriptions.className == "text-muted text-small") {
        return "Descrição não disponível";
      } else {
        return descriptions.innerText;
      }
    });
    
    var moviesRating = document.querySelectorAll("div.ipl-rating-star.small span.ipl-rating-star__rating");
    var rating = Array.from(moviesRating).map(rate => {
      return rate.outerText;
    });

    console.log('chegou aqui');
    var moviesImage = document.querySelectorAll("img.loadlate");
    var images = Array.from(moviesImage).map(image => {
      return image.getAttribute('src');
    });


    var movies = [];
    movies.push(titles);
    movies.push(genres);
    movies.push(descriptions);
    movies.push(rating)
    movies.push(images)
    return movies;
  });

  var jsonObj = [];
  for (let i = 0; i < 99; i++) {
    jsonObj.push({ titulo: scrap[0][i], genero: scrap[1][i], descricao: scrap[2][i], rating:scrap[3][i], movieImage:scrap[4][i]});
  }
  jsonObj = JSON.stringify(jsonObj);
  console.log(jsonObj);
  
  var fs = require("fs");
  fs.writeFile("movies.json", jsonObj, function(err, result) {
    if (err) console.log("error", err);
  });

  await browser.close();
})();

async function autoScroll(page){
  await page.evaluate(async () => {
      await new Promise((resolve, reject) => {
          var totalHeight = 0;
          var distance = 100;
          var timer = setInterval(() => {
              var scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;

              if(totalHeight >= scrollHeight){
                  clearInterval(timer);
                  resolve();
              }
          }, 100);
      });
  });
}