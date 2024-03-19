function solve(input){
let day = input[0];

switch (day){
    case "Monday":
    case "Tusday":
    case "wednesday":
    case "Thursday":
    case "Friday":console.log("Working day");break;
    case "Saturday" :
    case "Sunday":console.log ("Wekend");break;
    default : console.log ( "Error");break;
}

}solve (["Saturday"])