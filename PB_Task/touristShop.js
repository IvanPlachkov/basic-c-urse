function solve(input) {
    let index =0;
let budget = Number(input[index]);
index++;
let comand = input[index];
index++;
let buyProduct =0;
let counter =1;
let totalPrice=0;
while(comand !== "Stop" ){

let price = Number(input[index]);
index++;

if(counter %3=== 0){
budget -= price/2;
totalPrice +=price/2;
buyProduct++;
}else{

budget -= price;
totalPrice +=price;
buyProduct++;
}
if(budget < 0){
    console.log(`You don't have enough money!`);
    console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
    break;
}
counter++;
comand = input[index];
index++;

}
if( comand === "Stop")
{console.log(`You bought ${buyProduct} products for ${(totalPrice).toFixed(2)} leva.`)

}
}solve(["54",
"Backpack",
"24",
"Shoes",
"45",


 ])