function workOrNo(input){
 let day =  input[0];

 switch (day) {
    case "Monday": 
    case "Tusday": 
    case "Wensday": 
    case "Thursday": 
    case "Friday": console.log ("working day");break;
    case "Saturday": 
    case "Sunday": console.log ("weekend");break;
    default: console.log ("Error");

 } 
}
workOrNo(["Sunday"])
