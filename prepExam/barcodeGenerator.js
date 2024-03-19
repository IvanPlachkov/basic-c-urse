function solve(input){
let startInterval = "" + input[0]; // poprincip input e string , no sys konkatenaciqta sus string se zastrahovame;
let  endInterval = "" + input[1];

let startIntervalA = Number(startInterval[0]);
let endIntervalA = Number(endInterval[0]);

let startIntervalB= Number(startInterval[1]);
let endIntervalB =Number(endInterval [1]);

let startIntervalC= Number(startInterval[2]);
let endIntervalC = Number(endInterval[2]);

let startIntervalD= Number(startInterval[3]);
let endIntervalD = Number(endInterval[3]);
let result ="";
for(let a = startIntervalA; a <= endIntervalA;a++){
    for(let b =startIntervalB; b <= endIntervalB; b++){
        for(let c = startIntervalC; c <= endIntervalC; c++){
            for(let d = startIntervalD;d <= endIntervalD; d++){
                if(a%2 !==0 && b %2 !==0 && c %2 !==0 && d %2 !==0){
                    result += `${a}${b}${c}${d} `;
                }
            }
        
        }
    }
    
}
console.log(result);


}solve(["2345",

"6789"])
