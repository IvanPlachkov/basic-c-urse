function solve(input){
let index = 0;
let comand=input[index];
let maxNumber= 0; //tuk moje da se napishe Number.MIN_SAFE_INTEGER; tova e nai malkoto chislo 
//ot koeto da pochne i da nqma iskrivqvane;

while(comand !== "Stop"){
    let num = Number(comand);

    if(num > maxNumber){
        maxNumber = num;
    }


    comand = input[index];
    index++;
}

console.log(maxNumber)


}solve([
"99",

"80",

"70","100",

"Stop"])