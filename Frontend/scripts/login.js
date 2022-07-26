// Created by Liam McBride
// 07/26/2022

function verifyEmail(email, textInput){
    const valid = email.includes("@");

    if(!valid){
        textInput.style.validity.badInput = "1px solid red";
        // textInput.style.border = "1px solid red";
    }
    else{
        textInput.style.border = "1px solid black";
        textInput.style.outline = "inset 1px";
    }
    return valid;
}



async function loginRequest(email, password){
    console.log("hello")
    const x = await fetch("http://localhost:105/current-shows/", {
        method: "POST",
        body: JSON.stringify({
            "email": email,
            "password": password,
        }),
    })
    .then((response) => {
        response.json().then((data) => {
            console.log(data);
        }
        );
    }).catch((error) => {
        console.log(error);
    });

    console.log(x)
    return x;
}

/*
    Makes fetch call to login endpoint, to initiate or refresh existing token
*/
async function login(){
    const token = "1234567890"

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;

    const x = loginRequest(email, password)

    localStorage.setItem('token', token);

    location.href = "./index.html";
}

/*
    Removes token from user's local storage
*/
function logout() {
    localStorage.removeItem('token');
}

/*
    Verifies if there is an existing token and will
    then refresh token
*/
async function isLoggedIn() {
    const token = localStorage.getItem('token');
    
    if(token) return true;
    return false;
}

/*
    Should run on each page load and will redirect user to login
    If the user isn't logged in
*/
async function loginRedirect(){
    const validLogin = await isLoggedIn();
    console.log(location.pathname)
    if(!validLogin && !location.pathname.includes("login") && !location.pathname.includes("sign-up")){
        location.href = "./login.html";
    }
    else if(validLogin && location.pathname.includes("login")){
        location.href = "./index.html";
    }

    return null;
}