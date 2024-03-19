function solve(input){
let minWalk = Number(input[0]);
let numberWalks = Number(input[1]);
let calory  = Number(input[2]);

let burnCaloryDay = (minWalk * numberWalks) *5

if (burnCaloryDay >= calory *0.5){
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnCaloryDay}.`)
}else{
    console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnCaloryDay}.`)
}

}solve(["15","2","500"])