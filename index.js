const player = document.querySelector(".player");
const playerImg = document.querySelector(".playerImg");
const object = document.querySelector(".object");
const scoreElem = document.querySelector(".score_act");
const env = document.querySelector(".environment");
const fast_play1 = document.querySelector(".fast_play1");
const fast_play2 = document.querySelector(".fast_play2");
const immunity_pow1 = document.querySelector(".immunity_pow1");
const immunity_pow2 = document.querySelector(".immunity_pow2");

var score = 0;
var flag = true;
var immune = 0;
var fast = 100;
var obj_names = {};

window.addEventListener("keyup", (e) => {
  if (e.key == "ArrowUp") {
    player.style.bottom = "140px";
    playerImg.setAttribute("src", "./resources/mario_jump.png");
    setTimeout(() => {
      player.style.bottom = "80px";
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
    clearInterval(interval_id);
    alert(`game over, your score is ${score}`);
    saveScoreToLocalStorage(score); // Save score to local storage
    displaysplmsg();
    // window.open("screen4.html?names=" + encodeURIComponent(JSON.stringify(obj_names)));
  }

  if (score % 60 === 0) {
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
  var obj_names = JSON.parse(localStorage.getItem("names"));
  console.log(obj_names)


  if (obj_names) {
    Object.entries(obj_names).forEach(([name, storedScore]) => {
      if (name == JSON.parse(sessionStorage.getItem("curr_n"))) {
        obj_names[name] = score;
      }
    });

    localStorage.setItem("names", JSON.stringify(obj_names));
  }
}

function displaysplmsg() {
  console.log(JSON.parse(localStorage.getItem("names")));
}
