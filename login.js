const usernameInput = document.getElementsByName("username")[0];
const passwordnameInput = document.getElementsByName("password")[0];
const form = document.querySelector("form");
const lognButton = document.querySelector("button[type='submit']");
const resetButton = document.querySelector("button[type='reset']");

let username, password;

function toggleButton () {
    if(username && password) {
        lognButton.disabled = false;
    } else{
        lognButton.disabled = true;
    }
}

function init() {
    checkToken()

      lognButton.disabled = true;
       resetButton.onclick = resetIputsValues;

       redirect();

    usernameInput.oninput = function (event) {
        username = event.target.value.trim();
        toggleButton()
    }
    

    passwordnameInput.oninput = function (event) {
        password = event.target.value.trim();
        toggleButton()
    }

    form.onsubmit = async function (event) {
        event.preventDefault();
        console.log(username, password);


        const result = await login();
        saveToken(result.token);
        redirect();
        
        
       
    }
};

function saveToken(token) {
    localStorage.setItem("token", token);
}
init();


async function login() {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
             username,   ///mor_2314
             password,    // "83r5^_"
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const result = await response.json();
    return result;
}

function redirect() {
    const token = localStorage.getItem("token");
    if(token){
        window.location.href = "http://127.0.0.1:5500/index.html";
    }
    
}

function resetIputsValues () {
     username = "";
     password = "";
}

function checkToken() {
    const token = localStorage.setItem("token");
    if (!token) {
        Window.location.href = "http://127.0.0.1:5500/login.html"
    }
}