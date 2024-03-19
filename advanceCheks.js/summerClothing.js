function solve(input){
    let tempeture = Number(input[0]);
    let partOfDay = input [1];

    let outfit = '';
    let shoes = '';
    switch(partOfDay) {
    case "Morning":
        if(tempeture >=10 && tempeture <=18) {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        }else if (tempeture >18 && tempeture<=24){
            outfit = 'Shirt';
            shoes = 'Mocasins';
        }else {
        outfit = 'TShirt';
            shoes = 'Sandals';
        }
        break;
    case "Afternoon":
            if(tempeture >=10 && tempeture <=18){
                outfit ='Shirt';
                shoes = 'Mocasins';
              }  else if (tempeture >18 && tempeture <=24){
                outfit = 'Tshirt';
                shoes = 'Sandals';
               }
               else {
                outfit = 'swim suit';
                shoes = 'Barefoot';
               }
               break;

            
    case "Evening":
        outfit = 'Shirt';
        shoes = 'Mocasins';
            
        break;
            
        
    }
    console.log(`it's" ${tempeture} degrees,get your ${outfit} and ${shoes}`)
} solve(["16","Morning"])