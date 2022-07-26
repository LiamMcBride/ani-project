// Created by Liam McBride
// 07/26/2022

const email = document.getElementById("email-input");
const password = document.getElementById("password-input");
const confirm = document.getElementById("confirm-input");
const username = document.getElementById("username-input");
const submitButton = document.getElementById("submit-button");

password.onchange = validatePassword;
confirm.onchange = validatePassword;
email.onchange = validatePassword;
username.onchange = validatePassword;

async function signupRequest(username, email, password){
    const x = await fetch("http://localhost:105/sign-up/", {
        method: "POST",
        body: JSON.stringify({
            "username": username,
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
    return true;
}

function validatePassword(){
    if(password.value != confirm.value){
        confirm.setCustomValidity("Passwords Don't Match");
    }
    else{
        confirm.setCustomValidity("");
    }
    if(allValid()){
        submitButton.disabled = false;
    }
    else{
        submitButton.disabled = true;
    }

}

function allValid(){
    if(email.value && username.value && password.value && confirm.value){
        return true;
    }
    return false;
}

/*
    Makes fetch call to login endpoint, to initiate or refresh existing token
*/
async function signup(){
    const x =  await signupRequest(username.value, email.value, password.value);
    if(x){
        document.location.href = "./login.html";
    }
}