function validateDropdown(e){
    let dropdown = null;

    for(let element in e.path){
        if(e.path[element].id){
            if(e.path[element].id.includes("dropdown")){
                dropdown = e.path[element];
                break;
            }
        }
    }

    dropdown.getElementsByClassName("custom-dropdown-contents")[0].style.display = e.path[0].checked ? "block" : "none";
}