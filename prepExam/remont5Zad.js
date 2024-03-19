function solve(input){
    let index=0;
let h = Number(input[index]);
index++;
let w = Number(input[index]);
index++;
let percent= Number(input[index]);
index++;
let command = input[index];
index++;

let quadraticM = h *w *4;// 4 e po uslovie 4 steni imame;
let totaSpace = Math.ceil(quadraticM - (quadraticM*(percent/100)));//10% gi preobrazuvame procentite i wadim ot kvadratite;

//let isFinish=""; bulen flag variant;

while(command !==  "Tired!"){
let paint = Number(command);
totaSpace-=paint; // litri boq
if(totaSpace <=0){
    if(totaSpace<0){// vlizame tuk kogato ostava boq;
        console.log(`All walls are painted and you have ${Math.abs(totaSpace)} l
        paint left! `)
    }else{
        console.log(`All walls are painted! Great job, Pesho!`)
    }
    //isFinish=true;  bulen flag
    break;
}
command = input[index];
index++;
}
// if(totaSpace >0){ moje i taka;
 //if(!isFinish){ -bulen flag
if(command==="Tired!"){
    console.log(`${totaSpace} quadratic m left.`)
}
}solve(["3", "5", "10", "2", "3", "4", "Tired!"])