const play = document.querySelector(".play_again");
const home = document.querySelector(".home");
const score_board = document.querySelector(".score_board");
score_board.innerHTML = ""




var game_over2 = document.querySelector(".game_over2");
let scores = JSON.parse(localStorage.getItem("main_arr"));
let names = JSON.parse(localStorage.getItem("obj_names"));


window.onload = function() {
    game_over2.play();
};

// creating an array of objects with names and scores
let data = scores.map((score, index) => ({ name: names[index], score }));
data.sort((a, b) => b.score - a.score);

data.forEach(item => {
    console.log(`Name: ${item.name}, Score: ${item.score}`);
    let li = document.createElement("li");
    li.innerText = `${item.name}`+`- - - -`+`${item.score}`
    score_board.appendChild(li);
}); 


console.log(Math.max(...scores))
console.log(scores.indexOf(Math.max(...scores)))




play.addEventListener("click",()=>{
    window.location.href = "index.html";
});

home.addEventListener("click",()=>{
    window.location.href = "screen1.html";
});