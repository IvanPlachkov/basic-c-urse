function solve ( input){
let countGroup = Number(input[0]);

let gropMusala = 0;
let groupMonbland = 0;
let groupKilimandjaro = 0;
let groupK2= 0;
let groupEverest =0;
let totaPeople=0;
for(let i = 1;i <= countGroup  ;i++){
    let people = Number(input[i]);
totaPeople +=people;
if(people <= 5){
    gropMusala+=people;
}else if (people >=6 && people <=12){
    groupMonbland += people;
}else if(people>=13 && people <= 25){
    groupKilimandjaro += people;
}else if(people >=26 && people <=40){
    groupK2 += people;
}else if (people >=41){
    groupEverest += people;
}



}
console.log(`${((gropMusala / totaPeople) *100).toFixed(2)}%`  );
console.log(`${((groupMonbland / totaPeople) *100).toFixed(2)}%` );
console.log(`${((groupKilimandjaro / totaPeople) *100 ).toFixed(2)}%`);
console.log(`${((groupK2  / totaPeople) *100).toFixed(2)}%`);
console.log(`${((groupEverest/ totaPeople) *100 ).toFixed(2)}%`);


}solve (["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
