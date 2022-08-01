
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
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_2",
                },
            ]
        },
        {
            "title": "Season_2",
            "episodes": [
                {
                    "title": "Episode_1",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_3",
                },
                {
                    "title": "Episode_3",
                },
            ]
        },
        {
            "title": "Season_2",
            "episodes": [
                {
                    "title": "Episode_1",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_3",
                },
                {
                    "title": "Episode_3",
                },
            ]
        },
        {
            "title": "Season_2",
            "episodes": [
                {
                    "title": "Episode_1",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_3",
                },
                {
                    "title": "Episode_3",
                },
            ]
        },
        {
            "title": "Season_2",
            "episodes": [
                {
                    "title": "Episode_1",
                },
                {
                    "title": "Episode_2",
                },
                {
                    "title": "Episode_3",
                },
                {
                    "title": "Episode_3",
                },
            ]
        },
    ],
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
    console.log(seasonHolder)
}

function generateEpisode(show){
    return `
    <div id="${show.title}-dropdown" onclick="validateDropdown(event)" class="custom-episode-dropdown">
    <label>
        <input type="checkbox">
        <div class="button-div">
            <h3>${show.title.slice(-1)}</h3>
            <div class="divider-line"></div>
        </div>
    </label>
    <div class="custom-dropdown-contents">
        <div class="episode-rating-div">
            <div class="new-card">
            <input type="range" class="range-slider" min="0" max="10" step="1" value="0">
            <div class="center-text-wrapper">
                <h1 style="color: var(--purple)">1</h1>
            </div>
                <div class="three-button-group">
                    <button class="thin-button red-button"><h3>Cancel</h3></button>
                    <button class="thin-button"><h3>Page</h3></button>
                    <button class="thin-button purple-button"><h3>Submit</h3></button>
                </div>
            </div>
        </div>
    </div>
</div>
`
}


function loadPage(){
    const data = exampleData;
    document.title = "Ani Project: " + data.title;
    document.getElementById("show-title").innerText = data.title;
    document.getElementById("description").innerText = data.description;

    const detailsCard = document.getElementById("details-card");

    data.seasons.forEach((season) => {
        console.log(season.title)
        generateSeason(season, detailsCard)
    });

}

loadPage()

