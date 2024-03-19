function solve(input){
let tournamentCount = Number(input[0]);
let startingPoints = Number(input[1]);
let pointsWon = 0;
let tornamentWon= 0;
//for(let i = 2;i <tournamentCount+2; i++){
    for(let i = 2 ; i < input.length; i++){
    let currentResult = input[i];

   
    if (currentResult === 'W'){
        pointsWon += 2000;
        tornamentWon += 1;
    }else if (currentResult === 'F'){
        pointsWon += 1200;
    }else{
        pointsWon +=720;
    }


}

   let finalPoints = startingPoints + pointsWon;
   
   console.log(`Final points: ${finalPoints}`);
   let avaragePoints = pointsWon / tournamentCount;
   console.log(`Avarage points: ${Math.floor(avaragePoints)}`);
    let percentWon = (tornamentWon / tournamentCount) * 100;
    console.log(`${percentWon.toFixed(2)}%`);

} solve (["5","1400","F","SF","W","W","SF"])