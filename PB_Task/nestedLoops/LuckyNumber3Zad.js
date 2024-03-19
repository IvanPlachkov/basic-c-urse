function solve(input){
let num = Number(input[0]);
let sum1= 0;
let sum2=0;
let newLine="";

for(let a =1; a <=9 ; a ++){
    for(let b= 1; b <=9;b++){
    
        for(let c=1;c <= 9;c++){
            for(let d = 1;d <= 9;d++){
                sum1 = a+b;
                sum2=c+d;
                if(sum1 === sum2 && num % sum1 === 0){
                    newLine +=`${a}${b}${c}${d} `;
                    
                
                }
            }
        }
    }

}

console.log(newLine)

}solve (["3"])