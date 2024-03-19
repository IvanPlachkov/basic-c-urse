function dayOfWeek(input){
let day = Number(input[0]);
switch (day){
    case 1: console.log("monday");
    case 2: console.log("tuesday");
    case 3: console.log("wendasday");break;
    case 4: console.log("thursday");
    case 5: console.log("friday");break;
    case 6: console.log("saturday");break;
    case 7: console.log("sunday");break;
    default: console.log( "eror");break;
}



}
dayOfWeek(["4"])