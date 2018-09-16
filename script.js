// Write your Javascript excercises here:


// Replaces the HTML within the object with id of "demo" with something of our choice.


/* const showAlert = () => {
  alert("What?! Don't click me!")
}

document.querySelector(".myButton").onclick = showAlert */

/*const showAlert = () => {
  document.querySelector(".myButton").classList.toggle("hideDIV");
}

document.querySelector(".myButton").onclick = showAlert*/


/*const articlesDiv = document.getElementById("demo")

const newsTitles = ["Hotet mot handbollens framtid i Stockholm", "jo, placebo funkar – även när man vet att det är fejk", "Vilken version av dig umgås dina vänner med i kväll?"]

newsTitles.forEach((title) => {
  articlesDiv.innerHTML += `<h2>${title}</h2>`
}) */
/*
const titleDiv = document.getElementById("title")
const descriptionDiv = document.getElementById("description")
const languageDiv = document.getElementById("language")

const article = { title: "Rubriken på artikeln", description: "Den här texten är beskrivningen av artikeln", language: "Här står det något mer om artikeln" }

titleDiv.innerHTML = `<h2>${article.title}</h2>`
descriptionDiv.innerHTML = `<h3>${article.description}</h3>`
languageDiv.innerHTML = `<h3>${article.language}</h3>`

https://newsapi.org/v2/everything?q=illustration+illustrator&sortBy=popularity&apiKey=*/

  const key = "d7908704f87c40c381847cc1c7999928"
  const url = `https://newsapi.org/v2/everything?q=design&sortBy=popularity&apiKey=${key}`


  // Our main function
  const recievedNews = (newsdata) => {

  	// For each article object from the API, we create a new div in HTML.
      newsdata.articles.forEach((article) => {

  					//Here we create and add html elements to our html file
  					document.querySelector(".allNews").innerHTML +=
              `<div class="news">
              <h2>${article.title}</h2>
              <img src="${article.urlToImage}"/>
              <p>${article.description}</p>
              <a href="${article.url}">Read more</a>
              </div>`
      })
  }

  //Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
  fetch(url)
    .then(response => response.json())
    .then(recievedNews)
