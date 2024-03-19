function solve(input){
let index=0;
let countBottels = Number(input[index]);
index++;
let command = input[index];
index++;
let dishes=0;
let pots = 0;
let needDetergetn=0;
let countReloads= 1;

let totalDetergent = countBottels * 750;
while(command !== "End"){
let totalDishes = Number(command);

if(totalDetergent<needDetergetn){}

if (countReloads %3===0){
       pots+=totalDishes;
       
       break;
}else {
    dishes+=totalDishes;
    
}
needDetergetn = (dishes*5)+(pots*15);

command = input[index];
index++;
countReloads ++;
}
needDetergetn = (dishes*5)+(pots*15);
if(totalDetergent >= needDetergetn){
    console.log("Detergent was enough!");
    console.log(`${dishes} dishes and ${pots} pots were washed.`);
    console.log(`Leftover detergent ${totalDetergent-needDetergetn} ml.`);
}else{
    console.log(`Not enough detergent, ${needDetergetn-totalDetergent} ml. more necessary!`)


}

}solve(["2",
    "53",
    "65",
    "55",
    "End",
    
    
    ])