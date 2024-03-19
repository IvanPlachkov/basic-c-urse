function fishTank(input){
    let l = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let p = Number(input[3]);

    let tankValumeInCm = l * w * h;
    let tankVolume = tankValumeInCm / 1000;
    let total = tankVolume - (tankVolume * (p /100)) ;

console.log(total)



}
fishTank(["85 ","75 ","47 ","17"])