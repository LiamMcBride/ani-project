//import { functionName } from './whatever.js';

// import { searchCall } from "./API/searchCall";
const searchError = "Error with search request.";

function searchCall(){
    fetch("http://localhost:105/hello/" + searchBar(document).value)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
            console.log(searchError);
        })
}

function searchBar(document){
    return document.getElementById("search-input");
}

function searchBarButton(document){
    return document.getElementById("search-button");
}

function search(){
    searchCall();
}

function progressBar(progress=0, type){
    let bar = document.createElement("div");
    bar.classList.add("progress-bar-outer");
    bar.classList.add(type);
    let innerBar = document.createElement("div");
    bar.appendChild(innerBar);
    innerBar.classList.add("progress-bar-inner");
    innerBar.style.width = `${progress}%`;
    
    return bar;
}

function currentShowCard(title, progress=0, rating=5){
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("current-show-card");
    let heading = document.createElement("h3");
    heading.innerText = title;
    card.appendChild(heading);
    let progressBarTitle = document.createElement("h4");
    progressBarTitle.innerText = "Progress";
    card.appendChild(progressBarTitle);
    card.appendChild(progressBar(progress, "progress"));
    let ratingBarTitle = document.createElement("h4");
    ratingBarTitle.innerText = "Rating";
    card.appendChild(ratingBarTitle);
    card.appendChild(progressBar(rating, "rating"));
    return card;
}

let currentFeed = document.getElementsByClassName("current-feed")[0];
currentFeed.appendChild(currentShowCard("blah", 83, 10));
let searchButton = searchBarButton(document);
searchButton.addEventListener('click', function(e){
    e.preventDefault();
    searchCall();
})
