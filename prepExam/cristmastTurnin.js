function solve(input){
let index=0;
let day = Number(input[index]);
index++;
let winCount=0;
let loseCount =0;
let money=0;

for(let i =0;i <day;i++){
    let command = input[index];
    index++;
   let tempMoney=0;
   let tempWinCount=0;
   let tempLoseCount=0;
    while(command !== "Finish"){
        let name = command;
        let result = input[index];
        index++;
        switch(result){
            case "win":
            tempMoney +=20;  
            tempWinCount++; 
            break;
             case "lose":
             tempLoseCount++;   
             break;
        }
        command = input[index];
        index++;
    }
    if(tempWinCount > tempLoseCount){
        tempMoney += tempMoney *0.1; // 10% dobavame moje i tempMoney *=1.10;
        winCount++;
    }else{
        loseCount++;
    }
    money += tempMoney;
}

if(winCount >loseCount){
    money+= money *0.2 // 20 % dobavqme  moje i tempMoney *=1.20;
    console.log(`You won the tornament Total raised money ${money.toFixed(2)}`);

}else{
    console.log(`You lost the tournament ! Total raised money ${money.toFixed(2)}`)
}

}solve(["2","volleyball","win","football","lose","basketball","win",
"Finish","golf","win","tennis","win","badminton","win","Finish"])
