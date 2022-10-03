const loginform = document.getElementById("login-form");
const logininput = loginform.querySelector("input");
const loginbutton = loginform.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
function onloginsubmit(event){
    event.preventDefault();
    const username = logininput.value;
    localStorage.setItem("username", username);
    loginform.classList.add("hidden");
    paintgreeting(username);
}  
function paintgreeting(username){
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove("hidden");
}
const savedsuername = localStorage.getItem("username");

if (savedsuername === null){
    loginform.classList.remove("hidden");
    loginform.addEventListener("submit", onloginsubmit);    
}
else{
    paintgreeting(savedsuername);
}