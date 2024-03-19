function solve(input){
let index=0;
let truncCapacity = Number(input[index]);
index++;
let comand = input[index];
index++;

let counter =0;
while(comand !== "End"){
let suitcase = Number(comand);

if(counter+1 % 3 ==0){
    truncCapacity -=  (suitcase * 0.10)+suitcase;
}else {
    truncCapacity -=suitcase;
}


if (truncCapacity <0){
 console.log(`No more space!`);
 console.log(`Statistic: ${counter} suitcases loaded.`)
 break;
}

counter++;
comand = input[index];
index++;
}
if(comand === "End"){
    console.log(`Congratulations! All suitcases are loaded!`)
    console.log(`Statistic: ${counter} suitcases loaded.`)
}


} solve(["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"])


