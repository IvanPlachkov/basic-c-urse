function solve(input){
let start = Number(input[0]);
let end = Number(input[1]);
let sum = 0;
let buf= "";
 for (let i = start; i <= end; i++){

    if ( i % 9 ===0){
    sum +=i;
    buf +=i+"\n";
    
    }
    
 }
 console.log("The sum " + sum);
 console.log(buf)
 
 
} solve(["100", "200"])