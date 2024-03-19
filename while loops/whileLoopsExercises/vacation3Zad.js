function solve(input){
let index = 0;
let needMoney = Number(input[index]);
index++;
let money = Number(input[index]);
index++;
let comand = input[index];
index++;
let sum = input[index];
index++;
let totalSum=0;
let countDays=0;
let sumSpendSave=0;
cantSaveMoney=false;
while(needMoney>= totalSum){
 let spendSave =(comand)
    if(sum ==="spend"){
        index++
        let currentSum=Number( sum);
       sumSpendSave-=sum;
        countDays++;
            if (countDays ===5){
                cantSaveMoney = true;
                break;
            }
           
            index++;
            continue;
    }else if (spendSave ==="save"){
        sumSpendSave+=sum;
        countDays++;
    }

sum = input[index];
index++;

}
totalSum=money+sumSpendSave;
console.log(totalSum)
}solve(["2000",

"1000",

"spend",

"1200",

"save",

"2000"])