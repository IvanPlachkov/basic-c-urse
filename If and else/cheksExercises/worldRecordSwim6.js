function solve(input){
let recordInSecond = Number(input[0]);
let distanceInMetur = Number(input[1]);
let timeInSeconds = Number(input[2]);

let swimingDistanceSeconds = distanceInMetur * timeInSeconds ;
let waterResistens = Math.floor((distanceInMetur /15)) *12.5;
let allTime= swimingDistanceSeconds + waterResistens;

if (recordInSecond > allTime){
    console.log(`Yes, he succeeded! The new world record is ${(allTime).toFixed(2)} seconds.`);
} else {
    let needTime = allTime - recordInSecond;
    console.log ( `No, he failed! He was ${(needTime).toFixed(2)} seconds slower. `)
}


}solve(["55555.67",

"3017","5.03"]) 