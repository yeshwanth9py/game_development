const play = document.querySelector(".play_again");
const home = document.querySelector(".home");
const score_board = document.querySelector(".score_board");
score_board.innerHTML = ""

let temp_sound = sessionStorage.getItem("play_sound1");



var game_over2 = document.querySelector(".game_over2");
let scores = JSON.parse(localStorage.getItem("main_arr"));
let names = JSON.parse(localStorage.getItem("obj_names"));




// creating an array of objects with names and scores
let data = scores.map((score, index) => ({ name: names[index], score }));
data.sort((a, b) => b.score - a.score);

data.forEach(item => {
    console.log(`Name: ${item.name}, Score: ${item.score}`);
    let li = document.createElement("li");
    li.innerText = `${item.name}`+`- - - -`+`${item.score}`
    score_board.appendChild(li);
}); 

// i am playing game_over2 sound only when player looses game and lands here, not in the cases where user directly goes to leaderboard.
window.onload = function() {
    if(temp_sound){
        game_over2.play();
        sessionStorage.removeItem("play_sound1");
    }
};


play.addEventListener("click",()=>{
    window.location.href = "screen2.html";
});

home.addEventListener("click",()=>{
    window.location.href = "screen1.html";
});