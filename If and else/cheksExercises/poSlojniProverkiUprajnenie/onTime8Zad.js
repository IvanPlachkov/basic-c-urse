function solve (input){
    let hours = Number (input[0]);
    let minuts = Number(input[1]);
    let arrivalHouer = Number(input[2]);
    let arrivalMinuts = Number( input [3]);
     let hoursInMinuts = hours *60;
     let houersInMinutsArrival = arrivalHouer *60;
     let totalMin = hoursInMinuts + minuts;
     let totalArrivalMinuts = houersInMinutsArrival + arrivalMinuts;
     let timeHurtMinutes = 0;
     let timeHurtHouers =0
     let timeLeteMinutes = 0 ;
     let timeLeteHouers =0;

    if (totalMin  === totalArrivalMinuts && totalMin > (totalMin - 30)){
        console.log ("On time");
    }else if (totalMin < totalArrivalMinuts){
        console.log("Late");
        timeLeteMinutes =  (totalArrivalMinuts - totalMin)%60;
        timeLeteHouers = Math.floor( (totalArrivalMinuts - totalMin)/60) ;
         if (timeLeteHouers < 1){
        console.log(`${timeLeteMinutes} minutes after the start`);
         }else if (timeLeteHouers >=1){
            console.log(`${timeLeteHouers}:${timeLeteMinutes} minutes after the start`);
         }
        
    }else if ( (totalMin - totalArrivalMinuts  ) >30){
        console.log ("Early");
        timeHurtMinutes =  (totalMin -totalArrivalMinuts )%60;
        timeHurtHouers = Math.floor( (totalMin - totalArrivalMinuts )/60) ;
         if (timeHurtHouers < 1){
        console.log(`${timeHurtMinutes}  minutes before the start`);
         }else if (timeHurtHouers >=1){
            console.log(`${timeHurtHouers}:${timeHurtMinutes} hours before the start`);
         }
    }


    


} solve(["16",

"00", "15", "00"])

// let totalSeconds = time1 + time2 + time3;
// let minutes = Math.floor(totalSeconds /60);
// let seconds = totalSeconds % 60;
