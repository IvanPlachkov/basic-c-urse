function solve ( input){
    let index =0;
let buyFood =Number (input[index]);
index++;
let comand = input [index];
index++;
let needFood=0;
let total = 0;
while(comand !== "Adopted"){
let eatFood = Number (comand);

    needFood+=eatFood;
comand= input[index];
index++;
}
total = (buyFood* 1000) -needFood;
if(total >=0)
{console.log(`Food is enough! Leftovers: ${(buyFood* 1000) - needFood} grams.`)
}else 
{console.log(`Food is not enough. You need ${needFood -(buyFood* 1000)} grams more.`)}




}solve(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])
