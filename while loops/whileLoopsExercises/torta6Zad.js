function solve(input) {
    index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let comand = input[index];
    index++;
    let totalCake = width * length;

    let totalNeedCake = 0;
    while (comand !== "STOP") {
        let takenCake = Number(comand);

        totalNeedCake += takenCake;

        if (totalNeedCake >= totalCake) {
            console.log(`No more cake left! You need ${totalNeedCake - totalCake} pieces more.`);
            return;
        }
        comand = input[index];
        index++;
    }
    if (comand === "STOP") {

        console.log(`${totalCake - totalNeedCake} pieces are left.`);
    }
    
} solve(["10",

    "10",

    "20",

    "20", "20", "20", "21"])