const player = document.querySelector(".player");
const playerImg = document.querySelector(".playerImg");
const object = document.querySelector(".object");
const scoreElem = document.querySelector(".score_act");
const env = document.querySelector(".environment");
const fast_play1 = document.querySelector(".fast_play1");
const fast_play2 = document.querySelector(".fast_play2");
const immunity_pow1 = document.querySelector(".immunity_pow1");
const immunity_pow2 = document.querySelector(".immunity_pow2");
const phrases_for_winning = ["yippiee... thats a high score!","Victory is yours!","You have ascended to greatness!","here comes an other gigachad!!"];
const phrases_for_losing = [`game over`,"Oops! You didn't make it this time.","Game over, better luck next time!"]

var score = 0;
var flag = true;
var immune = 0;
var fast = 100;
var obj_names = {};

var jump = document.querySelector(".jump");
var power_up = document.querySelector(".power_up");
var game_over = document.querySelector(".game_over");

var p_s_b = "140px";
var p_s_b_j = "80px";

console.log(window.innerWidth);
// variable to add resposnsive when the screen size is large
if(window.innerWidth>800){
  fast = 50;
  p_s_b = "200px"
  p_s_b_j = "100px"
}


let scores = JSON.parse(localStorage.getItem("main_arr"))

window.addEventListener("keyup", (e) => {
  if (e.key == "ArrowUp") {
    jump.play()
    player.style.bottom = p_s_b;
    playerImg.setAttribute("src", "./resources/mario_jump.png");
    setTimeout(() => {
      player.style.bottom = p_s_b_j;
      playerImg.setAttribute("src", "./resources/mario_run1.gif");
    }, 1000);
  }
});

let ct = 0;

player.style.right = window.innerWidth - 80 + "px";

let powerUpInterval = null;

const interval_id = setInterval(() => {
  ct += 10;
  score += 1;
  scoreElem.innerText = score;
  if (ct >= window.innerWidth) {
    ct = 0;
  }

  if (flag && isPlayerTouchingElement(player, object)) {
    console.log("game over", score);
    game_over.play()
    clearInterval(interval_id);
    if(Math.max(...scores)<score){
      let a = Math.floor((Math.random())*4)
      alert(phrases_for_winning[a])
    }
    else{
      let b = Math.floor((Math.random())*3)
      alert(phrases_for_losing[b]);
    }
  
    saveScoreToLocalStorage(score); // Save score to local storage
    window.location.href = "screen4.html";
    // ?names=" + encodeURIComponent(JSON.stringify(obj_names)));
  }

  if (score%200 == 0) {
    fast_play1.style.display = "inline";
    fast_play1.style.right = "30px";

    if (powerUpInterval === null) {
      powerUpInterval = setInterval(() => {
        let powerUpRight = parseInt(fast_play1.style.right);
        powerUpRight += 10;
        fast_play1.style.right = powerUpRight + "px";

        if (powerUpRight >= window.innerWidth) {
          fast_play1.style.display = "none";
          clearInterval(powerUpInterval);
          powerUpInterval = null;
        }

        if (isPlayerTouchingElement(player, fast_play1)) {
          console.log("fast_play1 touched");
          power_up.play()
          score += 100
          fast_play1.style.display = "none";
          clearInterval(powerUpInterval);
          powerUpInterval = null;
        }
      }, fast);
    }
  }

  object.style.right = ct + "px";
}, fast);

function isPlayerTouchingElement(player, element) {
  const playerRect = player.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  return (
    playerRect.bottom >= elementRect.top &&
    playerRect.top <= elementRect.bottom &&
    playerRect.right >= elementRect.left &&
    playerRect.left <= elementRect.right
  );
}

function saveScoreToLocalStorage(score) {
  let obj = JSON.parse(localStorage.getItem("obj_names")) || []
  let scores =  JSON.parse(localStorage.getItem("main_arr")) || [];
  let name =  localStorage.getItem("curr_names");
  
 let index = obj.indexOf(name)
 console.log(index)
 if(scores[index]){
  if(+scores[index] < +score){
  scores[index] = score
  }
 }else{
  scores[index] = score
 }
  localStorage.setItem("main_arr" , JSON.stringify(scores))
  console.log(scores)
}