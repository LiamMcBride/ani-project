window.onload = () => {
    
    loginRedirect();
    if(document.location.pathname.includes("login")){
        document.getElementById("login-button").addEventListener('click', (e) => {
            e.preventDefault();
            login();
        });

        // document.getElementById("logout-button").addEventListener('click', (e) => {
        //     e.preventDefault();
        //     logout();
        // });
    }
}