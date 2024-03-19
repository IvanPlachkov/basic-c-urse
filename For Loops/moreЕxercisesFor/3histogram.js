function solve(input){
    let n = Number(input[0]);
    let countGrop1 = 0;
    let countGrop2 = 0;
    let countGrop3 = 0;
    let countGrop4 = 0;
    let countGrop5 = 0;
    

    for (let i = 1; i <= n; i++){
        
        let currentNum =  Number(input[i]);
        
        if(currentNum <200){
            let countGrop1 +=1 ;
        }else if(currentNum < 400){
            countGrop2 +=1 ;
        }else if (currentNum <600){
            countGrop3 +=1;
        }else if (currentNum <800){
            countGrop4 +=1;
        }else {
            countGrop5 +=1;
        }


        console.log(i);
        console.log(currentNum);
    }
}
solve(["3","1","2","999"]);