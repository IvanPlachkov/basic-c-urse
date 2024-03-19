function solve(input){
    let budget = Number(input[0]);
    let season = input[1];
    
    let destination = ``;
    let vacationType = ``;
    let totalBudget = 0;
    switch ( season){
     case "summer":
        if(budget <= 100){
        destination = "Bulgaria";
        vacationType = "Camp";
        totalBudget = budget - (budget *0.70);
        
        
    }else if (budget <= 1000){
        destination = "Balkans";
        vacationType = "Camp";
        totalBudget = budget - (budget *0.60);
        
    }else if (budget >1000){
        destination =  "Europe";
        vacationType = "Hotel";
        totalBudget = budget - (budget *0.10);
        
    }break;
    case "winter":
        if(budget <= 100){
            destination = "Bulgaria";
            vacationType = "Hotel"; 
            totalBudget = budget - (budget *0.30);
            
        }else if (budget <= 1000){
            destination = "Balkans";
            vacationType = "Hotel";
            totalBudget = budget - (budget *0.20);
        }else if (budget >1000){
            destination =  "Europe";
            vacationType = "Hotel";
            totalBudget = budget - (budget *0.10);
        }break;
    } console.log(`Somewhere in ${destination}`)
        console.log(`${vacationType} - ${totalBudget.toFixed(2)}`)
}solve(["1500", "summer"])