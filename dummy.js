// const player = document.querySelector(".player");
// const object = document.querySelector(".object");

// const env = document.querySelector(".environment");
// const fast_play1 = document.querySelector(".fast_play1");
// const fast_play2 = document.querySelector(".fast_play2");
// const immunity_pow1 = document.querySelector(".immunity_pow1");
// const immunity_pow2 = document.querySelector(".immunity_pow2");


// var score = 0
// var flag = true;
// var immune = 0;
// var fast = 100

// window.addEventListener("keyup", (e) => {
//     if (e.key == "ArrowUp") {
//         player.style.bottom = "140px";
//         flag = false
//       setTimeout(() => {
//         player.style.bottom = "80px";
//         flag = true
//       }, 1000); 
//     }
//   });

// let ct = 0;
// console.log(ct);

// player.style.right = window.innerWidth - 80 + "px"
// console.log(player.style.right)


// // console.log("jj",player.style.right)
// // console.log(window.innerWidth - parseInt(player.style.right));


// const interval_id = setInterval(()=>{
//     ct += 10
//     score += 1
//     if(ct >= window.innerWidth) {
//         ct = 0
//     }
//     // console.log(ct,player.style.right)
//     if(flag && ct >parseInt(player.style.right)-37 && ct<parseInt(player.style.right)+5){
//         console.log("game over",score);
//         clearInterval(interval_id)
//     }
//     if (score %60 == 0) {
//       fast_play1.style.display = "inline";
//       fast_play1.style.right = "30px"
//       const powerUpInterval = setInterval(() => {
        
//         let powerUpRight = parseInt(fast_play1.style.right);
//         console.log(fast_play1.style.right)
//         powerUpRight += 10;
//         fast_play1.style.right = powerUpRight + "px";
  
//         if (powerUpRight >= window.innerWidth) {
//           fast_play1.style.display = "none";
//           clearInterval(powerUpInterval);
//         }
//       }, fast);
//       }
        
//         if(isPlayerTouchingElement(player, fast_play1)) {
//              console.log("fast_play1 touched");
//              fast_play1.style.display = "none";
//              clearInterval(powerUpInterval);
//         }         

//     object.style.right = ct + "px"


// //   if (isPlayerTouchingElement(player, fast_play2)) {
// //     console.log("fast_play2 touched");
// //   }


// //   if (isPlayerTouchingElement(player, immunity_pow1)) {
// //     console.log("immunity_pow1 touched");
// //   }


// //   if (isPlayerTouchingElement(player, immunity_pow2)) {
// //     console.log("immunity_pow2 touched");
// //   }
        
// },fast);



// function isPlayerTouchingElement(player, element) {
//   const playerRect = player.getBoundingClientRect();
//   const elementRect = element.getBoundingClientRect();

//   return (
//     playerRect.bottom >= elementRect.top &&
//     playerRect.top <= elementRect.bottom &&
//     playerRect.right >= elementRect.left &&
//     playerRect.left <= elementRect.right
//   );
// }







// const player = document.querySelector(".player");
// const object = document.querySelector(".object");

// const env = document.querySelector(".environment");
// const fast_play1 = document.querySelector(".fast_play1");
// const fast_play2 = document.querySelector(".fast_play2");
// const immunity_pow1 = document.querySelector(".immunity_pow1");
// const immunity_pow2 = document.querySelector(".immunity_pow2");

// const powerUpElements = [fast_play1, fast_play2, immunity_pow1, immunity_pow2];

// var score = 0;
// var flag = true;
// var immune = 0;
// var fast = 100;

// var check = false;

// window.addEventListener("keyup", (e) => {
//   if (e.key == "ArrowUp") {
//     player.style.bottom = "140px";
//     flag = false;
//     setTimeout(() => {
//       player.style.bottom = "80px";
//       flag = true;
//     }, 1000);
//     checkCollisions();
//   }
// });

// let ct = 0;
// console.log(ct);

// player.style.right = window.innerWidth - 80 + "px";
// console.log(player.style.right);

// const interval_id = setInterval(() => {
//   ct += 10;
//   score += 1;
//   if (ct >= window.innerWidth) {
//     ct = 0;
//   }

//   if (ct > parseInt(player.style.right) - 37 && ct < parseInt(player.style.right) + 5) {
//     console.log("game over", score);
//     clearInterval(interval_id);
//   }

//   if (score % 50 == 0) {
//     console.log("elem time");
//     let randomIndex = Math.floor(Math.random() * 4);
//     let powerUpElement = powerUpElements[randomIndex];
//     console.log(powerUpElement);
//     displayPowerUp(powerUpElement);
//   }

//   check && checkCollisions();

//   object.style.right = ct + "px";
// }, fast);

// function displayPowerUp(powerUpElement) {
//   powerUpElement.style.display = "inline";
//   powerUpElement.style.right = "0"; // Set initial position

//   const powerUpInterval = setInterval(() => {
//     let powerUpRight = parseInt(powerUpElement.style.right);
//     powerUpRight += 10; // Move the power-up element towards the left
//     powerUpElement.style.right = powerUpRight + "px";

//     if (powerUpRight >= window.innerWidth) {
//       // Power-up element is off the screen, hide it and stop the interval
//       powerUpElement.style.display = "none";
//       clearInterval(powerUpInterval);
//     }
//   }, fast);
// }

// function checkCollisions() {
//   if (isPlayerTouchingElement(player, fast_play1)) {
//     console.log("fast_play1 touched");
//     fast_play1.style.display = "none";
//   }
//   if (isPlayerTouchingElement(player, fast_play2)) {
//     console.log("fast_play2 touched");
//     fast_play2.style.display = "none";
//   }
//   if (isPlayerTouchingElement(player, immunity_pow1)) {
//     console.log("immunity_pow1 touched");
//     immunity_pow1.style.display = "none";
//   }
//   if (isPlayerTouchingElement(player, immunity_pow2)) {
//     console.log("immunity_pow2 touched");
//     immunity_pow2.style.display = "none";
//   }
// }

// function isPlayerTouchingElement(player, element) {
//   const playerRect = player.getBoundingClientRect();
//   const elementRect = element.getBoundingClientRect();

//   return (
//     playerRect.bottom >= elementRect.top &&
//     playerRect.top <= elementRect.bottom &&
//     playerRect.right >= elementRect.left &&
//     playerRect.left <= elementRect.right
//   );
// }
