function solve (input){
let index=0
let day = Number(input[0]);
index++;
let comand= input[index];
index++;
let winCount = 0;
let loseCount  =0;
let totalProfit=0;
for(let currentDay = 0; currentDay <= day; currentDay++){
    let dayWinGame=0;
    let dayLoseGame=0;
    let dayProfit =0;

   

    while(comand !== "Finish"){
        let nameGame = input[index];
        index++;
        let result = input[index  ];
        switch(result){
            case"win":

            break;
            case"lose":

            break;
        }

        comand = input[index];
        index++;
    }
}



}solve(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])
