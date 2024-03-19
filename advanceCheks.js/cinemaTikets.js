function solve(input){
    let clasTicket = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let totalPlaces = rows * cols;
    let income=0;
    
    switch(clasTicket){
        case "Premiere":
        income = totalPlaces * 12;
        break;
        case "Normal":
            income= totalPlaces * 7,5;
            break;
         case "Discount":
            income= totalPlace * 5;
             break;   
 
    }
    console.log(`${income.toFixed(2)}leva`);
    


        
}solve (["Premiere","10","12"]);