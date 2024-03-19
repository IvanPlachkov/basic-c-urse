function solve(input){
let days = Number(input[0]);
let numberHouers = Number (input[1]);

let totalSum =0;
let price =0;
for(let i =1 ; i <= days;i++){
    let daySum = 0;
    for(let a =1; a <= numberHouers; a++){
            if(i % 2 ===0 && a % 2===1 ){
                    price = 2.50;
                    
            }else if( i % 2===1 && a %2===0 ){
                price = 1.25;
                
            }else{
                price = 1;
                
            }
            daySum+=price;
            
        } 

        console.log(`Day: ${i} - ${(daySum).toFixed(2) } leva`);
        totalSum += daySum
      
}
console.log(`Total: ${(totalSum).toFixed(2)} leva`)




}solve(["5",
"2"])
