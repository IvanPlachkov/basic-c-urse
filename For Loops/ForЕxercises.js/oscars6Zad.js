function solve(input){
let name = input[0];
let academyPoints = Number(input[1]);
let judgesCaunt = Number(input[2]);

let totalPoints = academyPoints;

for (i= 3; i <input.length;i+=2){
    
    let judgesName = input [i];
    let pointGiven = Number(input[i+1]);
   

    let totalPointsFromJudge = judgesName.length * pointGiven/2;
    totalPoints += totalPointsFromJudge;

    if (totalPoints > 1250.5){

        console.log (`Congratulations, ${name} got a nominee for leading role with ${totalPoints}`);
            return;
    }
        
    
}
let pointsNeeded = 1250.5 - totalPoints;
console.log( `Sorry, ${name} you need ${pointsNeeded.toFixed(1)} more!`)

}solve(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])