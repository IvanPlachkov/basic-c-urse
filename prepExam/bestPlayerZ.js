function solve(input){
let index = 0;
let command = input[index];
index++;
let bestPlayerName = "";
let bestPlayerGoals= 0;

while(command !== "End"){
    let name = command;
    let goals = Number(input[index]);
if(goals > bestPlayerGoals){
    bestPlayerName = name;
    bestPlayerGoals = goals;
}
if(goals>=10){
    break;
}
    command =input[index];
    index++;
}

console.log(`${bestPlayerName} is the best player`);
if(bestPlayerGoals >=3){
    console.log(`Has score ${bestPlayerGoals} goals made a hat trick`)
}else{
    console.log(`He has score ${bestPlayerGoals} goasl`)
}



}solve(["Naymar", "2","Ronaldo","1","Mesi","3","End"])
