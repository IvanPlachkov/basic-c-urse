function solve(input){
 let n1= Number(input[0]);
 let n2 = Number(input[1]);
let operator = input[2];
let total = 0;
let stats = '';

switch (operator){
    case "+": total = n1 + n2 ;
        if (total % 2 === 0){
            stats = "even";
        }else {
            stats = "odd";
        }
    console.log(`${n1} ${operator} ${n2} = ${total} - ${stats}`);
    break;
    case "-": total = n1 - n2 ; 
    if (total % 2 === 0){
        stats = "even";
    }else {
        stats = "odd";
    }
console.log(`${n1} ${operator} ${n2} = ${total} - ${stats}`);
    
   
    break;
    case "*": total = n1 * n2 ; 
    if (total % 2 === 0){
        stats = "even";
    }else {
        stats = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${total} - ${stats}`);
    break;
    case "/":   total = n1 / n2 ; 
     if ( n1 === 0 ){
            console.log (`Cannot divide ${n2} by zero`);
     }else if ( n2 === 0){     
        console.log (`Cannot divide ${n1} by zero`);  
     } else {
        console.log(`${n1} ${operator} ${n2} = ${total.toFixed(2)} `);
          }break;
    case "%" : total = n1 % n2;
    if ( n1 === 0 ){
        console.log (`Cannot divide ${n2} by zero`);
 }else if ( n2 === 0){     
    console.log (`Cannot divide ${n1} by zero`);  
 } else {
    console.log(`${n1} ${operator} ${n2} = ${total} `);
      }
    
    break;
          
    default : "error";break;
}


    
} solve (["7",

"3",

"*"])