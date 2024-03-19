function solve(input){
let flower = input[0];
let quantity = Number(input[1]);
let budget = Number(input[2]);
let discount = 0;
let price = 0;
let finalPrice = 0;
let budgetLeft = 0;
//"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
if ( flower === "Roses"){
    if(quantity >=80){
        price = quantity *5;
        discount = price *0.10;
        finalPrice = price - discount;
    }else{
           finalPrice = quantity *5
        }
       
}else if (flower ==="Dahlias" ){
    if (quantity >=90){
        price = quantity *3.80;
        discount = price *0.15;
        finalPrice = price - discount;
    }else {
        finalPrice = quantity *3.80;
    }

}else if(flower === "Tulips"){
    if (quantity >=80){
        price = quantity *2.80;
        discount = price *0.15;
        finalPrice = price - discount;
    }else {
        finalPrice = quantity *2.80
    }

}else if (flower ==="Narcissus"){
   if( quantity <=120){
    price = quantity *3;
    discount = 0.15 *price ;
    finalPrice = price + discount;
    } else {
        finalPrice = quantity * 3;
    }
}else if (flower === "Gladiolus"   ) {
        if( quantity <=80){
    price = quantity *2.50;
    discount = 0.20 *price ;
    finalPrice = price + discount;
    } else {
       finalPrice = quantity * 3;
    }
}
budgetLeft = budget - finalPrice ;
    if (budgetLeft > 0){
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${budgetLeft.toFixed(2)} leva left.`)
    }else {
        console.log(`Not enough money, you need ${Math.abs(budgetLeft).toFixed(2)} leva more.`)
    }


} solve (["Narcissus", "119", "360"])

// function solve(input){
//      let flower = input[0];
//      let quantity = Number(input[1]);
//      let budget = Number(input[2]);
//      let discount = 0;
//      let price = 0;
//      let finalPrice = 0;
//     let budgetLeft = 0;
//     //"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
//    switch (flower){
//     case "Roses": 
//          if(quantity >=80){
//                 price = quantity *5;
//                 discount = price *0.10;
//                finalPrice = price - discount;
//             }else{
//                     finalPrice = quantity *5
//             }

//    break;
//     case "Dahlias" :
//         if (quantity >=90){
//                    price = quantity *3.80;
//                     discount = price *0.15;
//                      finalPrice = price - discount;
//                 }else {
//                     finalPrice = quantity *3.80;
//                  }    
//                  break;
//     case  "Tulips" :  
//         if (quantity >=80){
//                 price = quantity *2.80;
//                 discount = price *0.15;
//                 finalPrice = price - discount;
//             }else {
//                 finalPrice = quantity *2.80
//             }  
//             break; 
//      case  "Narcissus" : 
//          if( quantity <=120){
//             discount = 0.15 *price ;
//              finalPrice = price + discount;
//              } else {
//                  finalPrice = quantity * 3;
//              }     
//               break; 
//      case   "Gladiolus" :
//         if( quantity <=80){
//                  price = quantity *2.50;
//                 discount = 0.20 *price ;
//                 finalPrice = price + discount;
//                  } else {
//                     finalPrice = quantity * 3;
//                  }
//                  break;
//                  default : console.log(error);
//          budgetLeft = budget - finalPrice ;
//    if (budgetLeft > 0){
//         console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${budgetLeft.toFixed(2)} leva left.`)
//     }else {
//          console.log(`Not enough money, you need ${Math.abs(budgetLeft).toFixed(2)} leva more.`)
//     }
//    }

// } solve (["Narcissus", "119", "360"])