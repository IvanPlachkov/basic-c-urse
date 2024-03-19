function solve(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);
    let pin = 0;
    for (let a = 1; a <= num1; a++) {
        for (let b = 1; b <= num2; b++) {
            for (let c = 1; c <= num3; c++) {
                if (a % 2 === 0) {
                    if (c % 2 == 0) {

                        if ((b == 2) || (b == 3) || (b == 5) || (b == 7)) {
                            
                            console.log(`${a} ${b} ${c}`);
                        }
                    }
                }




            }


        }

    }






}solve(["3", "5", "5"])