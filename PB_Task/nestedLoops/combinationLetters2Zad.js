function solve(input) {
    let letterStart = input[0].charCodeAt();
    let letterEnd = input[1].charCodeAt();
    let ingnoreLetter = input[2].charCodeAt();
    let counter =0;
    let buffer = "";
    for (let a = letterStart; a <= letterEnd; a++) {
        if (a !== ingnoreLetter) {
            for (let b = letterStart; b <= letterEnd; b++) {
                if (b !== ingnoreLetter) {
                    for (let c = letterStart; c <= letterEnd; c++) {

                        if (c !== ingnoreLetter) {
                            counter++ ;
                            buffer += String.fromCharCode(a) + String.fromCharCode(b) + String.fromCharCode(c) + " ";
                        }
                    }
                }
            }
        }

    }
    console.log(`${buffer}${counter}`);
} solve(["a", "c", "b"])