function solve(input) {
    let index = 0;
    let account = 0;
    let comand = input[index];
    index++;
    while (comand !== "NoMoreMoney") {
        let money = Number(comand);
        if (money < 0) {
            console.log("Invalid operation!")
            break;
        }
        account += money;
        console.log(` Increase:  + ${money.toFixed(2)}`);
        comand = input[index];
        index++;
    }
    console.log(`Total:${account.toFixed(2)} `)
} solve(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])