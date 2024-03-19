function solve(input) {
    let n = Number(input[0]);
    let group2=0;
    let group3=0;
    let group4 = 0;

    for(let i = 1; i< n +1; i++){
        let num = Number(input[i]);

       if(num % 2===0){
        group2++;
       }
            
        if( num % 4===0 ){
            group4++;
           
        }   
        if (num % 3===0){
            group3++;
        }
            
               
                    
    }      


    
console.log(`${(group2/n*100).toFixed(2)}%`);
console.log(`${(group3/n*100).toFixed(2)}%`);
console.log(`${(group4/n*100).toFixed(2)}%`);











} solve(["10",
    "680",
    "2",
    "600",
    "200", "800", "799", "199", "46", "128", "65"])