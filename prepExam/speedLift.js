function solve(input){
let record = Number(input[0]);
let distance = Number(input[1]);
let timeForOneM= Number(input[2]);

let slowTime = Math.floor(distance / 50);
let extraTime = slowTime * 30;
let totalTime= distance * timeForOneM + extraTime;

if(record > totalTime){
    console.log(` Yes! The new record is ${totalTime.toFixed(2)} seconds`)
}else {
    let diff = Math.abs(totalTime - record);
    console.log(`No! He was ${diff.toFixed(2)} seconds slower.`)
}




}solve(["5554.36",

"1340",

"3.23"])
