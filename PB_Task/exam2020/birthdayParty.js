function solve(input){
let rent = Number(input[0]);

let cake = rent * 0.2;
let drinks = cake - (cake * 0.45);
let animator= rent /3;
let total = rent + cake + drinks + animator;
console.log(total)


}solve (["3720"])