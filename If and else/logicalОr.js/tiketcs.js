function tikets(input){
    let day = input[0];
    
   if(day ==="Monday"||day ==="Tusday"||day==="Friday"){
    console.log( 12);
   }else if(day==="Wensday"|| day==="Thursday"){
    console.log(14);
   }else if (day==="Sunday"|| day==="Saturday"){
    console.log(16);
   }


}
tikets(["Saturday"]);