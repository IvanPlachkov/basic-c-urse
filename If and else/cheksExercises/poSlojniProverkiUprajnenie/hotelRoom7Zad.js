function solve(input){
let mouth = input [0];
let overNights= Number(input[1]);

let studio= 0;
let apartmant = 0;
let totalStudio = 0;
let totalApartmant = 0;


switch(mouth){

    case "May":
    case "October" :
    studio = 50;
    apartmant = 65;   
    if (overNights >= 7 && overNights <= 14){
        totalStudio = (overNights * studio ) -((overNights * studio)* 0.05);
         totalApartmant =  overNights * apartmant ;
     
     }else if( overNights > 14){
         totalStudio = (overNights * studio ) -((overNights * studio)* 0.30);
         totalApartmant =  (overNights * apartmant ) -((overNights * apartmant)* 0.10);
     } 
    break;
    case "June"   :
    case "September"   : 
    studio = 75.20;
    apartmant = 68.70;
    if (overNights >= 7 && overNights <=14){
        totalStudio = overNights * studio ;
         totalApartmant =  overNights * apartmant ;
     
     }else if( overNights > 14){
         totalStudio = (overNights * studio ) -((overNights * studio)* 0.20);
         totalApartmant =  (overNights * apartmant ) -((overNights * apartmant)* 0.10);
     }
    break;
    case "July" :
    case "August" :
    studio = 76;
    apartmant = 77; 
    if (overNights >= 7 && overNights <=14){
        totalStudio = overNights * studio ;
         totalApartmant =  overNights * apartmant ;
     
     }else if( overNights > 14){
         totalStudio = overNights * studio 
         totalApartmant =  (overNights * apartmant ) -((overNights * apartmant)* 0.10);
     }   
    
    break;   
        default: console.log ("error");
}



console.log(`Apartment: ${totalApartmant.toFixed(2)} lv.`)
console.log(`Studio: ${totalStudio.toFixed(2)} lv.`)


} solve(["August", "20"]) 