let page = "Episode"

let exampleData = {
    "title": "Naruto",
    "image": "Assets/TempAssets/narutocover.png",
    "description": "It is important to take care of the patient, to be followed by the client, but at the same time they will be affected by some great pains and sufferings. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the rebuke, in the pleasure he wants to be a hair from the pain, let him run away from the pain. Unless they are blinded by lust, they do not come out; they are in fault who abandon their duties and soften their hearts, that is toil.",
    "seasons": [
        {
            "title": "Season_1",
            "episodes": [
                {
                    "title": "Episode_1",
                    "rating": 8,
                },
                {
                    "title": "Episode_2",
                    "rating": null,
                },
                {
                    "title": "Episode_3",
                    "rating": null,
                },
                {
                    "title": "Episode_4",
                    "rating": null,
                },
                {
                    "title": "Episode_5",
                    "rating": null,
                },
                {
                    "title": "Episode_6",
                    "rating": null,
                },
                
            ]
        },
    ],
    "settings": {},
}

let exampleEpisodeData = {
    "title": "Naruto",
    "image": "Assets/TempAssets/narutocover.png",
    "description": "It is important to take care of the patient, to be followed by the client, but at the same time they will be affected by some great pains and sufferings. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the rebuke, in the pleasure he wants to be a hair from the pain, let him run away from the pain. Unless they are blinded by lust, they do not come out; they are in fault who abandon their duties and soften their hearts, that is toil.",
    "season": {
            "title": "Season_1",
            "episode": {
                    "title": "Episode_1",
                    "rating": 8,
                    "description": "It is important to take care of the patient, to be followed by the client, but at the same time they will be affected by some great pains and sufferings. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the rebuke, in the pleasure he wants to be a hair from the pain, let him run away from the pain. Unless they are blinded by lust, they do not come out; they are in fault who abandon their duties and soften their hearts, that is toil.",
                },
        },
    "settings": {},
}


function generateSeason(season, holder){
    let newSeason = document.createElement("div");
    newSeason.classList.add("custom-dropdown-wrapper")
    newSeason.id = `${season.title}-dropdown`
    
    let seasonHolder = document.createElement("div");
    seasonHolder.classList.add("custom-dropdown-contents");

    
    let temp = ""
    season.episodes.forEach((show) => {
        temp += generateEpisode(show);
    });

    // seasonHolder.innerHTML += `</div>`
    seasonHolder.innerHTML = `
        <div class="custom-dropdown-contents">
            ${temp}
        </div>`


    newSeason.innerHTML = `
    <div class="custom-dropdown">
        <label>
            <input type="checkbox" onclick="validateDropdown(event)">
            <div class="button-div">
                <h3>${season.title}</h3>
                <div class="vertical-divider-line"></div>
                <img class="dropdown-arrow" src="Assets/dropdown-arrow.svg">
            </div>
        </label>
    </div>
    ${seasonHolder.innerHTML}
    </div>
    </div>
    `

    holder.appendChild(newSeason);
}

function generateEpisode(show){
    return `
    <div class="custom-dropdown-wrapper custom-episode-dropdown-wrapper">
    <div id="${show.title}-dropdown" onclick="" class="custom-episode-dropdown">
    <label>
        <input type="checkbox">
        <div class="button-div">
            <h3 ${show.rating ? "class='rated'" : ""}>${show.title.slice(-1)}</h3>
            <div class="${show.rating ? "rated" : ""} divider-line"></div>
        </div>
    </label>
    </div>
    <div class="custom-dropdown-contents">
        <div class="episode-rating-div">
            <div class="new-card">
            <input oninput="valueChange(event)" type="range" class="range-slider" min="0" max="10" step="1" value="${show.rating ? show.rating : 0}">
            <div class="center-text-wrapper">
                <h1 style="color: var(--purple)">${show.rating ? show.rating : 0}</h1>
            </div>
                <div class="three-button-group">
                    <button class="thin-button red-button"><h3>Cancel</h3></button>
                    <button class="thin-button"><h3>Page</h3></button>
                    <button class="thin-button purple-button" value="${show.title.slice(-1)}" onclick="submitRating(event)"><h3 style="pointer-events: none">Submit</h3></button>
                </div>
            </div>
        </div>
    </div>
    </div>
`
}

function valueChange(e){
    let text = e.path[1].children[1].children[0];
    text.innerText = e.target.value;
}

function submitRating(e){
    let rating = e.path[2].children[0].value;
    let name = e.target.value
    let season = e.path[7].id.slice(0, -9).slice(-1);
    console.log(exampleData["seasons"][parseInt(season) - 1])
    exampleData["seasons"][parseInt(season) - 1]["episodes"][parseInt(name) - 1]["rating"] = rating;
    console.log(name)
    console.log(rating)
}


function loadPage(){

    if(page === "Series"){
        const data = exampleData;
        document.title = `Ani Project: ${data.title}`;
        document.getElementById("details-card").style.display = "block";
        document.getElementById("episode-card").style.display = "none";
        document.getElementById("show-title").innerText = data.title;
        document.getElementById("description").innerText = data.description;
        
        const detailsCard = document.getElementById("details-card");

        data.seasons.forEach((season) => {
            generateSeason(season, detailsCard)
        });
    }
    else{
        const data = exampleEpisodeData;
        document.title = `Ani Project: ${data.title} ${data.season.title} ${data.season.episode.title}`;
        document.getElementById("details-card").style.display = "none";
        document.getElementById("episode-card").style.display = "block";
        document.getElementById("show-title").innerText = data.title;
        document.getElementById("episode-title").innerText = data.title;
        document.getElementById("episode-description").innerText = data.season.episode.description
        document.getElementById("season-episode-title").innerText = `${data.season.title}: ${data.season.episode.title}`;

    }


    

}



loadPage()

