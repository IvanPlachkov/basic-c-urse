function solve(input){
    let index=0;
let numPeople = Number(input[index]);
index++;
let comand = input[index];
index++;
let allRates =0;
let count =0;

while(comand !== "Finish"){
let presentation = comand;
let countGrades=0;
let gradesForPresentation =0;
for(let i = 1 ; i <= numPeople ; i++){
   
    let rate = Number(input[index])
    allRates+=rate;
    gradesForPresentation += rate;
   countGrades++;
   count++;
 index++;
}

 comand = input[index];
index++;
console.log(`${presentation} - ${(gradesForPresentation/countGrades).toFixed(2)}.`);
}
if( comand === "Finish"){
console.log(`Student's final assessment is ${(allRates/count).toFixed(2)}.`)
}

}solve(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])