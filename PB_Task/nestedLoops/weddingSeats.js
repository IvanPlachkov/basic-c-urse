function solve(input) {
    let lastSector = input[0].charCodeAt();
    let numberSectors = Number(input[1]);
    let numberOfSeats = Number(input[2]);
    let startLetter = 97;
   let totalCounter =0;
    for (let a = 65; a <= lastSector; a++) {
        if(a >65){
            numberSectors++
        }
        for (let b = 1; b <= numberSectors; b++) {
           let counter=0;
           if(counter <= numberOfSeats){
              
                if (b % 2 !== 0) {
                    counter++;
                    for (let c = startLetter; c < startLetter + numberOfSeats ; c++) {
                        console.log(`${String.fromCharCode(a)}${b}${String.fromCharCode(c)} `);
                       totalCounter++ ;
                    }
                } else if ( b % 2 ===0 ){
                    for (let c = startLetter; c < startLetter + numberOfSeats + 2; c++) {
                       console.log(`${String.fromCharCode(a)}${b}${String.fromCharCode(c)} `);
                      totalCounter++ ;
                    }
                }
            }
        }
     
    }

   console.log(totalCounter)
   
} //solve(["E", "1", "3"])
solve(["B", "3", "2"])