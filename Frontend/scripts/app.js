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

function heading4(text){
    let heading = document.createElement("h4");
    heading.innerText = text;
    return heading;
}

function baseButtonGroup(){
    let group = document.createElement("div");
    group.classList.add("button-group");
    return group;
}

function baseButton(text){
    let button = document.createElement("button");
    button.appendChild(heading4(text));
    return button;
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
    
    let cardWrapper = document.createElement("div");
    cardWrapper.classList.add("current-show-card-wrapper");

    let cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    
    let image = document.createElement("img");
    image.classList.add("show-image");
    image.src = "Assets/TempAssets/narutocover.png";

    cardImage.appendChild(image);
    cardWrapper.appendChild(cardImage);

    let cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    let cardTitleList = document.createElement("ul");
    cardTitleList.classList.add("card-title");

    let heading = document.createElement("h3");
    heading.innerText = title;

    cardTitleList.appendChild(
        document.createElement("li").appendChild(heading)
    );
    cardTitleList.appendChild(
        document.createElement("li").appendChild(generateOptionsButton())
    );

    cardContent.append(cardTitleList);

    // card.appendChild(heading);
    let progressBarTitle = document.createElement("h4");
    progressBarTitle.innerText = "Progress";
    cardContent.appendChild(progressBarTitle);
    cardContent.appendChild(progressBar(progress, "progress"));
    let ratingBarTitle = document.createElement("h4");
    ratingBarTitle.innerText = "Rating";
    cardContent.appendChild(ratingBarTitle);
    cardContent.appendChild(progressBar(rating, "rating"));
    let group = baseButtonGroup();
    let buttonText = ["Watched", "Rate"];
    buttonText.forEach((text) => group.appendChild(baseButton(text)));
    cardContent.appendChild(group);
    cardWrapper.appendChild(cardContent);
    card.appendChild(cardWrapper);
    return card;
}

function generateCurrentShows(showObject){
    let shows = showObject.map(({ title, progress, rating }) => {
        return currentShowCard(title, progress, rating);
    });
    return shows;
}

function generateOptionsButton(){
    let button = document.createElement("div");
    button.classList.add("options-button");
    
    let grid = document.createElement("div");
    grid.classList.add("options-button-dot-grid");
    
    let dots = [
        document.createElement("div"),
        document.createElement("div"),
        document.createElement("div")
    ];
    dots.forEach(dot => {
        dot.classList.add("dot");
        grid.appendChild(dot);
    });
    button.appendChild(grid);
    return document.createElement("div").appendChild(button);
}

let showObject = [
    {
        "title": "Naruto",
        "progress": "65",
        "rating": "50",
    },
    {
        "title": "Death Note",
        "progress": "0",
        "rating": "0",
    },
    {
        "title": "Demon Slayer",
        "progress": "100",
        "rating": "89",
    },
    {
        "title": "One Punch Man",
        "progress": "13",
        "rating": "78",
    },
    {
        "title": "Mob Psyco",
        "progress": "22",
        "rating": "33",
    },
    {
        "title": "Dr. Stone",
        "progress": "90",
        "rating": "44",
    },
]

// let currentFeed = document.getElementById("current-feed");
// // currentFeed.appendChild(currentShowCard("blah", 83, 10));
// let shows = generateCurrentShows(showObject);
// shows.forEach(show => currentFeed.appendChild(show));
// let searchButton = searchBarButton(document);
// searchButton.addEventListener('click', function(e){
//     e.preventDefault();
//     searchCall();
// })
