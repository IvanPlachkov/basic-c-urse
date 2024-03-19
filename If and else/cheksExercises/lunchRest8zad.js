function solve(input){

    let name = input[0];
    let timeEp = Number(input[1]);
    let timeRest = Number(input[2]);

    let lunchTime = (1/8) *timeRest ;
    let timeWent = (1/4) * timeRest  ;
    let fullTime = lunchTime + timeWent;
    let leftTime = timeRest - fullTime;
if ( leftTime >= timeEp){
        console.log (`You have enouht time to watch ${name} and lef with ${Math.ceil(leftTime- timeEp)} minutes free time`);
} else  {
        console.log(` You dont have time to watch ${name}, you need ${Math.ceil(timeEp - leftTime)} more minutes`);
}
//"You have enough time to watch {име на сериал} and left with {останало време} minutes free time." 
//"You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes." 
} solve (["Teen Wolf","48","60"]) 