// Created by Liam McBride
// 07/26/2022

/*
    Makes fetch call to login endpoint, to initiate or refresh existing token
*/
async function login(){
    const token = "1234567890"

    localStorage.setItem('token', token);
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
    console.log(token);
    
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
    if(!validLogin && !location.pathname.includes("login")){
        location.href = "./login.html";
    }

    return null;
}