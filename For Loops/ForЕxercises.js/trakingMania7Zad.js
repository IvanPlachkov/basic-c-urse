function solve(input) {
let numberGroup = Number(input[0]);
let peopleCount = Number(input[1]);

let group1 = 0;
let group2 = 0;
let group3 = 0;
let group4 = 0;
let group5 = 0;
for( let i= 2;i<=input.length;i++){

    
let peopleCount = Number(input[i]);



if (   peopleCount  <=5){
    group1 += peopleCount;

}else if (peopleCount <= 12){
    group2 += peopleCount;

}else if (peopleCount <=25){
    group3 += peopleCount;

}else if (peopleCount <=40){
    group4 += peopleCount;

}else{
    group5 += peopleCount;
}

}
let percentGrop1 = (group1 /numberGroup) *100;
    let percentGrop2 = (group2 /numberGroup) *100;
    let percentGrop3 = (group3 /numberGroup) *100;
    let percentGrop4 = (group4 /numberGroup) *100;
    let percentGrop5 = (group5 /numberGroup) *100;

 console.log(`${percentGrop1.toFixed(2)}%`);
 console.log(`${percentGrop2.toFixed(2)}%`);
 console.log(`${percentGrop3.toFixed(2)}%`);
 console.log(`${percentGrop4.toFixed(2)}%`);
 console.log(`${percentGrop5.toFixed(2)}%`);


} solve(["5",

"25",

"41",

"31",

"250",

"6"])