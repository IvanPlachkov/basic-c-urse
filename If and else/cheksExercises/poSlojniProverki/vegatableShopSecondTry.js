function solve(input){
    let vegatebles = input[0];
    let day = input [1];
    let quantity = Number(input[2]);
    let sum = 0;
    if(day ==="Monday"||day ==="Tuesday"||day ==="Wednesday"||day ==="Thursday"||day ==="Friday"){
   
      if (vegatebles === "banana"){
        sum= quantity * 2.50;
        
     
     } else if (vegatebles === "apple"){
        sum= quantity * 1.20;
     
     } else if (vegatebles === "orange"){
        sum= quantity * 0.85;
     
     } else if (vegatebles === "graperfruit"){
        sum= quantity * 1.45;
     
     } else if (vegatebles === "kiwi"){
        sum= quantity * 2.70;
     
     } else if (vegatebles === "pineapple"){
        sum= quantity * 5.50;
     } else if (vegatebles === "grapes"){
        sum= quantity *3.85;
   }
 else if(day ==="Saturday" || day ==="Sunday"){
    if (vegatebles === "banana"){
        sum= quantity * 2.70;
        
     
     } else if (vegatebles === "apple"){
        sum= quantity * 1.25;
     
     } else if (vegatebles === "orange"){
        sum= quantity * 0.90;
     
     } else if (vegatebles === "graperfruit"){
        sum= quantity * 1.60;
     
     } else if (vegatebles === "kiwi"){
        sum= quantity * 3.00;
     
     } else if (vegatebles === "pineapple"){
        sum= quantity * 5.60;
     } else if (vegatebles === "grapes"){
        sum= quantity *4.20;
     }
     console.log(sum);
   } 
else {
    console.log("error");
    }

} 

   console.log(sum);
    }solve(["grapes", "Saturday", "0.5"])