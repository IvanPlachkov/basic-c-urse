function solve(input){
 let tempeture = Number(input[0]);
 let timeOfDay = input[1];
 let outfit = '';
 let shoes = '';
  switch(timeOfDay){
    case "Morning":
        if (tempeture >=10 && tempeture <=18){
                outfit = "Sweatshirt";
                shoes = "Sneakers";
        } else if (tempeture > 18 && tempeture <=24){
            outfit = "Shirt";
            shoes = "Moccasins";
        } else  {
            outfit = "T-Shirt";
            shoes = "Sandals";

        }break;
    case "Afternoon":
        if (tempeture >=10 && tempeture <=18){
            outfit = "Shirt";
            shoes = "Moccasinss";
    } else if (tempeture > 18 && tempeture <=24){
        outfit = "T-Shirt";
        shoes = "Sandals";
    } else {
        outfit = "Swim Suit";
        shoes = "Barefoot";

    } break;
    case "Evening":  
    
        outfit = "Shirt";
        shoes = "Moccasins";
     break;
    
}      console.log ( `It's ${tempeture} degrees, get your ${outfit} and ${shoes}.`)
  



 } solve (["28",

 "Evening"])
