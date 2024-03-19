function solve(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magikNumber = Number(input[2]);
    let counter = 0;
    let sum = 0;
    let flag = false;
    for (let a = startNum; a <= endNum; a++) {
        for (let b = startNum; b <= endNum; b++) {
            sum = a + b;
            counter++;
            if (sum === magikNumber) {
                console.log(`Combination N:${counter} (${a} + ${b} = ${magikNumber})`);
                flag = true;
                break;

            }
        }

        if(flag){
            break;
        }
    }
    if (sum !== magikNumber) {
        console.log(`${counter} combinations - neither equals ${magikNumber}`);
    }


} solve(["1", "10", "5"])