function solve(input){
 let budgetGroup = Number(input[0]);
 let season = input [1];
 let numberFishers = Number(input[2]);

 let rent = 0;
 let totalPrice = 0;
 let MoneyLeft= 0;
 // "Spring", "Summer", "Autumn", "Winter

 switch (season){
    case "Spring" : rent = 3000;
    if (numberFishers <=6){
        totalPrice = rent * 0.90;
         }else if (numberFishers >= 7  && numberFishers <=11 ){
    totalPrice = rent * 0.85;
    }else if (numberFishers >=12){
        totalPrice = rent* 0.75;
        break;
    }
    case "Summer" :
    case "Autumn": rent = 4200; 
    if (numberFishers <=6){
        totalPrice = rent * 0.90;
         }else if (numberFishers >= 7  && numberFishers <=11 ){
    totalPrice = rent * 0.85;
    }else if (numberFishers >=12){
        totalPrice = rent* 0.75;
    }
          
    break;
        
    case "Winter": rent = 2600;
    if (numberFishers <=6){
        totalPrice = rent * 0.90;
         }else if (numberFishers >= 7  && numberFishers <=11 ){
    totalPrice = rent * 0.85;
        }else if (numberFishers >=12){
        totalPrice = rent* 0.75;
        break;
    }
    default : console.log("error");
 }

// if (season === "Spring" && season === "Summer" && season ==="Winter" && numberFishers %2 ===0){
//  totalPrice = totalPrice * 0.95;
// }else {
//     totalPrice = totalPrice;
//}
 switch (season){
    case "Spring":
        case "Summer":
           case "Winter":
            if ( numberFishers %2 ===0){
                totalPrice = totalPrice * 0.95;
            }else {
                totalPrice = totalPrice;
            }
 }
MoneyLeft = budgetGroup - totalPrice;
if (budgetGroup >= totalPrice){
    console.log(`Yes! You have ${MoneyLeft.toFixed(2)} leva left.`);
}else if (budgetGroup < totalPrice){
    console.log (`Not enough money! You need ${Math.abs(MoneyLeft).toFixed(2)} leva.`);
}else {
    console.log("error");
}
//"Yes! You have {останалите пари} leva left."
//"Not enough money! You need {сумата, която не достига} leva."

}solve (["3000",

"Summer",

"12"])