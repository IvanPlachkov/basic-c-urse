function solve(input){
let days = Number(input[0]);
let typeRoom = input[1];
let feetBack = input [2];
let price = 0;
let overNights = days- 1;
let totalPrice = 0;
let discountPrice = 0;

switch(typeRoom){
    case "room for one person":totalPrice = overNights * 18;break;
    case "apartment": price = overNights *25 ; 
            if (days <= 10){
                discount = price * 0.30;
                totalPrice = price - discount;
            }else if (days >10 && days <=15){
                discount = price * 0.35;
                totalPrice = price - discount;
            }else if (days >15){
                discount = price * 0.50;
                totalPrice = price - discount;
            }
            break;
    case "president apartment":price = overNights * 35;
        if (days <= 10){
            discount = price * 0.10;
            totalPrice = price - discount;
        }else if (days >10 && days <=15){
            discount = price * 0.15;
            totalPrice = price - discount;
        }else if (days >15){
            discount = price * 0.20;
            totalPrice = price - discount;
        }break;

    default : ("error")
}
    if (feetBack  === "positive"){
        discountPrice = (totalPrice * 0.25);
        totalPrice =  discountPrice + totalPrice;
     } else if (feetBack === "negative"){
        discountPrice = (totalPrice * 0.1);
        totalPrice = totalPrice - discountPrice ;
     } console.log(totalPrice.toFixed(2));
} solve(["2", "apartment", "positive"])