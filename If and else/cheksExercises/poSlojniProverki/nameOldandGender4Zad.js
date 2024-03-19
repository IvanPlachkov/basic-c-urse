function solve(input){
let years = Number(input[0]);
let gender = input[1];

//if ( gender ==="m"){
 //    if (years >= 16){
    //    console.log("MR");
  //   }else {
 //       console.log ("Master");
 //    }
//}else if (gender === "f"){
   // if (years >=16 ){
   //     console.log("Ms");
   // }else {
   //     console.log("Miss")
  //  }
//}
if(gender === "m" && years >=16){
    console.log("Mr")
}else if (gender === "m" && years <=16){
    console.log ("Master");
} else if (gender === "f" && years >=16){
    console.log("Ms");
}else if (gender === "f" && years <=16){
    console.log("Miss")
}else {
    console.log ("Error!")
}


}solve(["13.5", "m"])