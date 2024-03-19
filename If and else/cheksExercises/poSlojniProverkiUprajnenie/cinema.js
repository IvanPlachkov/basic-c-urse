function solve(input){
    let typeProjection = input[0];
    let row = Number(input[1]);
    let colomn = Number(input[2]);
    let totalPrice = row * colomn;
   let income = 0;

 if ( typeProjection === "Premiere"){
    income = totalPrice *12;
    console.log (`${income.toFixed(2)} leva`);
 } else if ( typeProjection === "Normal"){
        income = totalPrice * 7.50;
        console.log (`${income.toFixed(2)} leva`);
 } else if (typeProjection === "Discount"){
    income = totalPrice * 5.00;
    console.log (`${income.toFixed(2)} leva`);
 } else {
    console.log ("error");
 } 
}  solve (["Premiere","10","12"])