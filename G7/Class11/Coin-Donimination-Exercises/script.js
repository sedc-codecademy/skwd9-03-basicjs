// let input = parseInt(prompt("Please enter number of cents"));

// let coins = [50,20,10,5,2,1];

// let coinsNeeded = 0;

// while(input <= 0 || isNaN(input)){
//     input = parseInt(prompt("Please enter a positive intiger number"));
// }

// for(let coin of coins){
//     let coinsWeNeed = Math.floor(input/coin);
//     if(input != 0){
//         console.log(`We neeed total ${coinsWeNeed} of ${coin}`);
//         coinsNeeded++;
//         input = input - (coin * coinsWeNeed);
//     }
// }

//Bonus implementation
let input = parseInt(prompt("Please enter number of cents"));;
let coins = 
[
    [50,5],
    [20,8],
    [10,12],
    [5,45],
    [1,250]
];
let coinCounter = 0;

while(input <= 0 || isNaN(input)){
    input = parseInt(prompt("Please enter a positive intiger number"));
}

let returnedCoins = [];

for(let i = 0; i < coins.length; i++) {
    for(let y = 0; (input >= coins[i][0]) && (coins[i][1] > 0); y++) {
      input = input - coins[i][0];
      coins[i][1] = coins[i][1] - 1;
      coinCounter++;
      returnedCoins.push(coins[i][0]);
    }
}

if(input === 0) {
  console.log("Machine returned " + coinCounter + " coins.")
  console.log(returnedCoins);
} else {
  console.log("There are not enough coins in the machine!");
}