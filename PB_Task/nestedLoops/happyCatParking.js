function solve(input){
let days= Number(input[0]);
let houers = Number(input[1]);

let total =0;
for(let a = 1; a <= days;a++){
    let tax =0;
    for(let b=1;b<= houers;b++){

        if((a %2===0 )&& (b%2===1)){
            tax += 2.50;
        }else if((a % 2 ===1 )&& (b%2===0)){
            tax += 1.25;
        }else {
            tax += 1;
        }
       
    }
    console.log(`Day: ${a} - ${tax.toFixed(2)} leva`)
    total+=tax;
}


console.log(`Total: ${total.toFixed(2)} leva`);

}solve(["2","5"])