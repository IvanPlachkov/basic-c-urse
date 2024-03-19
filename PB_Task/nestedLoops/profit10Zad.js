function solve(input){
let coin1Lv = Number(input[0]);
let coin2Lv = Number(input[1]);
let fivebanknots = Number(input[2]);
let sum = Number(input[3]);

let total = 0;

for(let a = 0;a <=coin1Lv;a++){
    for(let b =0;b <=coin2Lv;b++){
        for(let c=0; c <= fivebanknots;c++){
            total = (a*1) + (b*2) + (c*5);
            if(total === sum){
                console.log(`${a} * 1 lv. + ${b} * 2 lv. + ${c} * 5 lv. = ${total} lv.`)
            }

        }
    }
}



}solve(["5","3","1","7"])