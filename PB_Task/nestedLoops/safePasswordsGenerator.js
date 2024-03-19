function solve(input) {
    let numA = Number(input[0]);
    let numB = Number(input[1]);
    let maxNumberPassWords = Number(input[2]);
    let buff = "";
    let counter = 0;
    
    for (let a = 35; a < 55; a++) {
        if (a > 55) {
            a = 35
        }
        
        for (let b = 64; b < 96; b++) {
            if (b > 96) {
                b = 64;
            }
          
            for (let c = 1; c <= numA; c++) {
                
                for (let d = 1; d <= numB; d++) {
                     
                    if( c <=numA && d <=numB){
                        
                        if(counter === (numA * numB)){ 
                            break;
                         } else if( counter < maxNumberPassWords){
                    buff += `${String.fromCharCode(a, b,)}${c}${d}${String.fromCharCode(b, a)}|`
                    counter++;
                                   
                    a++;
                    b++;
                        
                    
                }
                }
            }
            }
        }
        
    }



    console.log(buff)

} solve(["2", "3", "10"])
// na 57 % raboti