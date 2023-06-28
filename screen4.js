const play = document.querySelector(".play_again");
const home = document.querySelector(".home");



// const params = new URLSearchParams(window.location.search);
// const names = JSON.parse(decodeURIComponent(params.get("names")));
// console.log(names);

console.log(localStorage.getItem("names"))


play.addEventListener("click",()=>{
    window.open("index.html");
});

home.addEventListener("click",()=>{
    window.open("screen1.html");
});