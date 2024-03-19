function solve(input){
    let budget = Number(input[0]);
    let numberExtras = Number(input[1]);
    let priceClothes = Number(input[2]);
 let decorPrice = budget * 0.10;
 let totalSumClothes = numberExtras * priceClothes;

 if (numberExtras >= 150){
    totalSumClothes = totalSumClothes - (totalSumClothes * 0.1) ;
 }
 if (decorPrice + totalSumClothes > budget){
    console.log(`Not enogh money!`);
    let needMoney = (decorPrice + totalSumClothes) - budget;
    console.log(`Wingard need ${(needMoney).toFixed(2)} leva more.`);
 } else if (decorPrice+totalSumClothes <= budget){
    console.log(`Action!`);
    let leftMoney = budget - ( decorPrice + totalSumClothes );
    console.log(`Wingard start filming with ${(leftMoney).toFixed(2)}leva left`)
 }
}solve (["15437.62",

"186",

"57.99"])