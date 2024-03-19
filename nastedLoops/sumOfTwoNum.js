function solve(input){
let start = Number(input[0]);
let end = Number(input[1]);
let magicNumber = Number(input[2]);
let flag = false;
let count = 0;
for(let i = start;i <=end;i++){
    for(let a=start;a<=end;a++){
        let res = i+a;
        count++;// bro4 kolko puti e tursilo kombinaciq
        if(res ===magicNumber){
                   console.log(`Combination N:${count} (${i} + ${a}) = ${magicNumber}`) //tuk namerihme 4 kombinaciq ot sbor na 4islata koito da davat 5
            flag =true // s bulen flaga mojem da prekusnem na purvata kombinaciq
            break;
        }
     }
    if (flag){// chres bulen flaga prekusvame na purvoo namereno 4isllo
        break;
    }
        }
    if(!flag){// tuk polzvame bulen flag koito mu bqhme pridali tru stoinost , no v slu4aq mo trqnva da e false i polzvame otricanie da go promenim;
        console.log(`${count} combinations - neither equals ${magicNumber}`)//ve4e izvun for cikala tursim tova
}




}solve(["23",

"24",

"20"])
