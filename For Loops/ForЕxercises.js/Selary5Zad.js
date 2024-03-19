function solve(input){
let countTabs = Number(input[0]);
let selary = Number(input[1]);
let aFine= 0;
let finalSelary=0;

for(let i=2;i<=input.length;i++){

    let tabs = input[i];
 
    if(tabs==="Facebook"){
        aFine +=150;
    }else if( tabs ==="Instagram"){
        aFine += 100;
    }else if( tabs ==="Reddit"){
        aFine +=50
   
    }
    finalSelary= selary-aFine;



}
if( finalSelary<=0){
    console.log(`You have lost your salary.` )
}else {
    console.log(Math.trunc(finalSelary))
}

}solve(["10",

"750",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"]) 