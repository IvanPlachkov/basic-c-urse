function solve(input){

let budgedPetur = Number(input[0]);
let countVideoCards = Number(input[1]);
let countProcesors = Number(input[2]);
let countRam = Number(input[3]);

let videCard = 250 * countVideoCards;
let procesor = 0.35 * videCard ;
let ram = 0.10 * videCard ;


let priceProcesors =  countProcesors * procesor;
let priceRam = countRam * ram;
let totalPrice = priceProcesors + priceRam + videCard;

if(countVideoCards >= countProcesors){
     totalPrice = totalPrice - totalPrice * 0.15 ;
}
if (budgedPetur >= totalPrice){
    console.log(`You have ${budgedPetur - totalPrice} leva left!`);
}else {
    console.log(`Not enough money! You need ${(totalPrice - budgedPetur).toFixed(2)} leva more! `);
}


}solve(["920.45",

"3",

"1",

"1"]) 