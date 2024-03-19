function solve(input){
let fruit = input[0];
let size = input[1];
let countSets = Number (input[2]);
let price =0;

if(size === "big"){
    size = Number(5);
}else {
    size = Number (2);
}

switch(fruit){
    case "Watermelon":
    if(size<=2){
        price = 56*size;
    }    else {
        price = 28.70 * size;
    }
    break;
    case "Mango":
        if(size<=2){
            price = 36.66*size;
        }    else {
            price =19.60 * size;
        }break;
    case"Pineapple":
    if(size<=2){
        price =42.10*size;
    }    else {
        price = 24.80 * size;
    }break;
    case"Raspberry":
    if(size<=2){
        price = 20*size;
    }    else {
        price = 15.20 * size;
    }break;
}
let total = price *countSets
if(total >= 400 && total <=1000){
    total-=total*0.15;
}else if (total > 1000){
    total -= total*0.50;
}
console.log(`${(total).toFixed(2)} lv.`)





}solve (["Pineapple",
"small",
"1"])


