// import { searchCallError } from "../Errors.js";

function searchCall(){
    fetch("https://localhost:105/hello/")
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
            console.log(searchCallError);
        })
}