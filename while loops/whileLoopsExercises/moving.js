function solve(input){


let index=0;
let width = Number( input[index]);
index++;
let length = Number( input[index]);
index++; 
let high= Number( input[index]);
index++;
let command = input[index];
index++;
let spaceCarton= width*length*high;
let totalOccupiedSpace = 0;

let totalSpace=0;
while(command !=="Done"){
let occupiedSpace = Number(command);
totalOccupiedSpace += occupiedSpace;

if(totalOccupiedSpace > spaceCarton){
    totalSpace =  totalOccupiedSpace -spaceCarton  ;
    console.log(`No more free space! You need ${totalSpace} Cubic meters more.`)
return;
}


command = input[index];
index++;
}
if(command ==="Done" ){
    totalSpace = spaceCarton - totalOccupiedSpace;
    console.log(`${totalSpace} Cubic meters left.`);
}

}solve (["10",

"1",

"2",

"4",

"6",

"Done"])
