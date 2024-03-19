function solve(input){
let index = 0;
let comand = Number(input[index]);
index++;
let minNum = Number.MAX_SAFE_INTEGER;

while(comand !=="Stop"){
let num = Number(comand);
if(num<minNum){
    minNum=num; // тук запазва  най ниската  стойност от масива
}
comand = input[index];
index++;

}
console.log(minNum)

}solve(["100",

"99",

"80",

"70",

"Stop"])