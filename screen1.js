const inst = document.querySelector(".Instructions");
const high = document.querySelector(".Highscores");
const start = document.querySelector(".Start");
const req = document.querySelector(".required");


var obj_names; //object of arrays for storing names and scores



function storename() {
    obj_names = JSON.parse(localStorage.getItem("names"));
    console.log(obj_names)
    if (obj_names === null) {
        obj_names = {}
        obj_names[req.value] = 0;
        sessionStorage.setItem("curr_n",req.value);
        localStorage.setItem("names", JSON.stringify(obj_names));
    } 
    console.log(JSON.parse(localStorage.getItem("names")))
}

// localStorage.setItem()



inst.addEventListener("click", () => {
    console.log("hbhs")
    storename()
    window.open("screen2.html");
})

high.addEventListener("click", () => {
    storename()
    // window.open("screen4.html");
})

start.addEventListener("click", () => {
    storename()
    window.open("index.html");  
})
