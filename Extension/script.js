const sampleRecord = {
    "episode" : "S1 E5",
    "rating" : "9.5",
    "filler" : "No"
}

async function fetchData() {
    //const req=await fetch("url");
    //const record = await req.json();
    const record = sampleRecord
    document.getElementById("episode").innerHTML=record.episode
    document.getElementById("rating").innerHTML=record.rating
    document.getElementById("filler").innerHTML=record.filler
}

fetchData();