const inst = document.querySelector(".Instructions");
const high = document.querySelector(".Highscores");
const start = document.querySelector(".Start");
const req = document.querySelector(".required");


var start_game = document.querySelector(".start_game");


let obj = JSON.parse(localStorage.getItem("obj_names")) || []

function storename() {
    let scores = JSON.parse(localStorage.getItem("main_arr")) || [];
   
    if ( !(obj.includes(req.value))) {
        obj.push(req.value) 
        scores.push(0)
        localStorage.setItem("obj_names", JSON.stringify(obj));
   
    } 
    localStorage.setItem("main_arr" , JSON.stringify(scores))
    localStorage.setItem("curr_names", req.value);
}



inst.addEventListener("click", () => {
    console.log("hbhs")
    storename()
    window.location.href = "screen3.html";
})

high.addEventListener("click", () => {
    storename()
    window.location.href = "screen4.html";
})

start.addEventListener("click", () => {
    storename()
    if(req.value == ""){
        alert("please enter your nickname");
    }else{
        start_game.play()
        window.location.href = "screen2.html"; 
    } 
})

// console.log(window.innerWidth);
