function solve(input){
        let days = Number(input[0]);
        let spaceType= input [1];
        let rating = input[2];

        let nights = days -1;
        let pricePerNight = 0;
        let totalPrice = 0;
       
        switch (spaceType) {
            case "room for one person":
                totalPrice = 18 * nights;
                //pricePerNight = 18;
               // totaPrice = pricePerNight * nights;
                break;
           case    "apartment":
            totalPrice = 25 * nights;
                if (nights < 10){
                    //discount = 30% ot totalPrice I 0.3 * totaPrice
                    //totaPrice - 0.3 totalPrice = 0.7 totalPrice
                    totalPrice = 0.7 * totalPrice;
                 } else if (nights <= 15) {
                    totalPrice = 0.65 * totalPrice;
                 }else {
                    totalPrice = 0.5 * totalPrice;
                 }
            
                break;
            case "president apartment":
                totalPrice = 35 * nights;
                if (nights < 10){
                    totalPrice = 0.9 * totalPrice;

                }else if (nights <= 15){
                   totalPrice = 0.85 * totalPrice; 
                }else{
                    totalPrice= 0.8 * totaPrice;
                }
                break;    
        }
        if(rating === "positive"){
            //125%
            totalPrice = totalPrice * 1.25;

        }else {
            totalPrice = totalPrice * 0.9;
        }
console.log(totalPrice.toFixed(2));
        

}
solve(["14","apartment","positive"])
//solve(["12", "room for one person", "positive"]) 
//solve(["30","president apartment","negative"]) 