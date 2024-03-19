function solve(input){
let num1 = Number(input[0]);
let num2=Number(input[1]);
let result = ""; // v na4aloto e prazna i kato proverim vsqko edno 4islo  posledstvie dobavqme 4isla v neq;
for(let currentNum=num1;currentNum<=num2;currentNum++){
let currentNumString = currentNum.toString(); // pravim go poneje ot 4islo ne moje da izberem daden index
                                                //i zatova go preobrazuvame v 4islo zada dostignem 4asti ot nego

  let evenSum=0;      //suzdavame tuk da moje da se nulirat pri zavurtane
  let oddSUm=0;                                               
  for(let index=0;index< currentNumString.length;index++){// tuka stigame do duljinata na dadenoto 4islo s length
    let currentDigit = Number(currentNumString[index]); // tuk vzimame indeksa na vsi4ki cifri ot chisloto 
    let position = index+1; // indeksite sa ot 0 do 5 , a poziciite ot 1-6 i zatova dobavqme +1 kum indeksa da moje da hvane i poslednoto 4islo
    if(position % 2===0){
        evenSum +=currentDigit;
    }else{
        oddSUm +=currentDigit;
    }
}
if(evenSum === oddSUm){
  result+=`${currentNumString} ` // taka gi pravim 4islata da gi izpisva na edin red vsi4kite, kato suzdadohme bufer result
}
}

console.log(result);
}solve(["100000",

"100050"])
