function solve (input){
    let n = Number(input[0]);
//let n1 = Number(input[i]);
let countGrop1 = 0;
let countGrop2 = 0;
let countGrop3 = 0;
let countGrop4 = 0;
let countGrop5 = 0;

for(i = 1;i<=n;i++){
console.log(i);
let currentNum = Number(input[i]);
console.log(currentNum)

    if(currentNum < 200){
        countGrop1 +=1;
    } else if( currentNum <400){
        countGrop2 += 1;
    }else if(currentNum < 600){
        countGrop3 +=1;
    }else if (currentNum <=800){
        countGrop4 +=1;
    } else {
        countGrop5 +=1; 
    }
}
    let percentGrop1 = (countGrop1 /n) *100;
    let percentGrop2 = (countGrop2 /n) *100;
    let percentGrop3 = (countGrop3 /n) *100;
    let percentGrop4 = (countGrop4 /n) *100;
    let percentGrop5 = (countGrop5 /n) *100;

 console.log(`${percentGrop1.toFixed(2)}%`);
 console.log(`${percentGrop2.toFixed(2)}%`);
 console.log(`${percentGrop3.toFixed(2)}%`);
 console.log(`${percentGrop4.toFixed(2)}%`);
 console.log(`${percentGrop5.toFixed(2)}%`);

}solve (["3",

"1",

"2",

"999"])