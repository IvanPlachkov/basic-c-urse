function solve(input) {
  let age = Number(input[0]);
  let priceOfWm = Number(input[1]);
  let pricePriceGift = Number(input[2]);
  let toyCount = 0;
  let sumOfBirdays = 0;
  let moneyLeft = 0;
  let money = 0;
  for (let i = 1; i <= age; i++) {
    if (i % 2 === 1) {
      toyCount++;
    } else {
      sumOfBirdays += 10 * (i / 2);
      sumOfBirdays--;
    }
  }
  money = (toyCount * pricePriceGift) + sumOfBirdays
  if (money >= priceOfWm) {
    moneyLeft = money - priceOfWm;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`)
  } else {
    moneyLeft = priceOfWm - money;
    console.log(`No! ${moneyLeft.toFixed(2)}`)
  }
} solve(["21",

  "1570.98",

  "3"])