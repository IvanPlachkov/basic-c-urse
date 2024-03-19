function solve(input){
let vegatebles = input[0];
let day = input [1];
let quantity = Number(input[2]);
let sum = 0;
switch(day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        switch(vegatebles){
            case"banana": sum = quantity * 2.50;break;
            case"apple": sum =quantity * 1.20;break;
            case"orange": sum =quantity * 0.85;break;
            case"graperfuit": sum =quantity * 1.45;break;
            case"kiwi":sum =quantity * 2.70;break;
            case"pineapple":sum =quantity * 5.50;break;
            case"grapes": sum =quantity * 3.85;break;
        } break;
            
    case "Saturday":
    case "Sunday" :
        switch(vegatebles) {
            case"banana": sum =quantity * 2.70;break;
            case"apple": sum =quantity * 1.25;break;
            case"orange": sum =quantity * 0.90;break;
            case"grapefruit": sum =quantity * 1.60;break;
            case"kiwi":sum =quantity * 3.00;break;
            case"pineapple":sum =quantity * 5.60;break;
            case"grapes": sum =quantity * 4.20;break;
        }    break;
        
        
    
   
}     if (sum > 0){
    console.log(sum.toFixed(2))}
    else {console.log("error");}
    



} solve(["grapes", "Saturday", "0.5"]) 




