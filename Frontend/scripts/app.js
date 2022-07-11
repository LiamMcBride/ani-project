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

let searchButton = searchBarButton(document);
searchButton.addEventListener('click', function(e){
    e.preventDefault();
    searchCall();
})
