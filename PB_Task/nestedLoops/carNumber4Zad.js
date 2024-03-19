function solve(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let buf = "";
    for (let a = num1; a <= num2; a++) {
        for (let b = num1; b <= num2; b++) {
            for (let c = num1; c <= num2; c++) {
                for (let d = num1; d <= num2; d++) {

                    if (a % 2 === 0) {
                        if (d % 2 === 1 && a > d && (c + b) % 2 === 0) {
                            buf += `${a}${b}${c}${d} `;
                        }
                    }

                    else if ((a % 2 === 1)) {
                        if(d % 2 === 0 && a > d && (c + b) % 2 === 0){
                            buf += `${a}${b}${c}${d} `;
                        }


                    }
                }
            }
        }
    }
    console.log(buf);


} solve(["2", "3"])