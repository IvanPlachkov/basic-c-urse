function solve(input){
let holidayPrice = Number(input[0]);
let numberPuzels = Number(input[1]);
let talkingDols = Number(input[2]);
let toyBears = Number(input[3]);
let minions = Number(input[4]);
let lory = Number(input[5]);
let discount = 0 ;



let sumPuzelPrice = numberPuzels * 2.60;
let sumDolsPrice = talkingDols * 3 ;
let sumBearsPrice  = toyBears * 4.10;
let sumMinionsPrice = minions * 8.20;
let sumLoryPrice = lory * 2;

let totalPrice = sumPuzelPrice + sumDolsPrice + sumBearsPrice + sumMinionsPrice + sumLoryPrice;
let totalCountTouys = numberPuzels + talkingDols + toyBears + minions + lory;
if (totalCountTouys >= 50) {
    let discount =  0.25 * totalPrice;
     totalPrice = totalPrice - discount;
    
    
}

 let rent = 0.10 * totalPrice ;
 totalPrice = totalPrice - rent;
 if ( totalPrice >= holidayPrice){
    console.log( `Yes! ${(totalPrice - holidayPrice).toFixed(2)} lv left.`);
 }else{
    console.log (`Not enought money! ${(holidayPrice - totalPrice).toFixed(2)  } lv need `);
 }






} solve (["40.8","20","25","30","50","10"])