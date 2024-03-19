function solve(input) {
    let days = Number(input[0]);
    let food = Number(input[1]);
    let dog = 0;
    let cat = 0;
    let counter = 0;
    let biscuits = 0;
    let totalEatFood = 0;
    for (let i = 2; i < input.length; i += 2) {
      let dogFood = Number(input[i]);
        let catFood = Number(input[i + 1])
        dog += dogFood;
        cat += catFood;
        counter++;
        if (counter % 3 === 0) {
            biscuits += (dogFood + catFood) * 0.10;
        }
    }
    totalEatFood = dog + cat;
    console.log(`Total eaten biscuits: ${Math.ceil(biscuits)}gr.`);
    console.log(`${((totalEatFood / food) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((dog / totalEatFood) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((cat / totalEatFood) * 100).toFixed(2)}% eaten from the cat.`)


} solve(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])

