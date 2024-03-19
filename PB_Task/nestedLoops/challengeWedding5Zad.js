function solve(input) {
    let male = Number(input[0]);
    let female = Number(input[1]);
    let table = Number(input[2]);
    let buff = "";
    let counter = 0;
    for (let a = 1; a <= male; a++) {
        for (let b = 1; b <= female; b++) {
            counter++
            if (counter <= table) {
                buff += `(${a} <-> ${b}) `;
            }
        }
    }

    console.log(buff);


} solve(["2", "2", "6"])