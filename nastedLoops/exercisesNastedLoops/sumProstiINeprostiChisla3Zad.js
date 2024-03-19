function solve(input){
let index=0;
let comand = input[index];
index++; 
let sumPrimeNums=0;
let sumNonPrimeNums=0;

while(comand !== "stop"){
    let num= Number(comand);

    if(num<0){
        console.log("Number is negative");
        comand = input[index]; //vzemame si novata komanda i produljavame kum sledvashtoto 4islo;
        index++;
        continue; // produljava da interira v cikala;
    }
    let isPrime = true;
    //ignore dividing by 1 and dividing by num itself; 
    //6 4islo divider proba
    for(let divider =2;divider< num; divider++){
        if (num % divider ===0){
            isPrime= false;
            break;
        }
    }
    if(isPrime === true){
        sumPrimeNums += num;
    }else{
        sumNonPrimeNums += num;
    }
    comand= input[index];
    index++;
}




console.log(`Sum of all prime numbers is: ${sumPrimeNums}`);
console.log(`Sum of all non prime numbers is: ${sumNonPrimeNums} sum`);
}solve(["3",

"9",

"0",

"7",

"19",

"4",

"stop"])