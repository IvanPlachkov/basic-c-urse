function solve(input){
let florCount = Number(input[0]);
let roomCount= Number(input[1]);

for(let i =florCount;i>0;i--){
    let buff =""; // buferna promenliva; suzdava se tuk poneje pri vsqko vurtene da ze zapemetqva nova stoinost
                     //pazi promenlivata dokato ne se vurnat na purviq for , togava q zanulqva i po4va pak da dobavq danni
    for(let x=0;x<roomCount;x++){
       if(i===florCount){
        buff += `L${i}${x} `;
       }else if (i% 2===0){
        buff+=`O${i}${x} `;

       } else{
        buff += `A${i}${x} `;
       }
    }
    console.log(buff);
}




}solve(["6",

"4"]) 
