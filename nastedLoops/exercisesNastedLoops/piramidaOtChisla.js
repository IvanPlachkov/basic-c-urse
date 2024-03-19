function solve(input){
    let n = Number(input[0]);
    let isBigger = false;
    let current = 1;
    let printCurrentLine  = "";
    for(let row = 1;row <= n ; row++){
        for(let colum = 1;colum <= row; colum++){
          if(current > n){
            isBigger = true;
            break;
        }
        printCurrentLine += current + " ";
        current++;
    }
    console.log(printCurrentLine);
    printCurrentLine ="";
    if(isBigger){
        break;
    }
    }
    }solve(["12",
        
        ])