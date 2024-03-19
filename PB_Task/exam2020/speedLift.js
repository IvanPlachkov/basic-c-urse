function solve(input){
let recordInSeconds = Number(input[0]);
let distanceMeters = Number(input[1]);
let timeInSecondsPerMeter = Number(input[2]);

let gerorgiTime = distanceMeters *timeInSecondsPerMeter;
let slowTime = Math.floor(distanceMeters/50)*30;
let total = (gerorgiTime+slowTime);


if(total < recordInSeconds){
    console.log(`Yes! The new record is ${total.toFixed(2)} seconds.`);
}else {
    console.log(`No! He was ${Math.abs(recordInSeconds - total).toFixed(2)} seconds slower.`)
}


}solve(["5554.36",
"1340",
"3.23"])

