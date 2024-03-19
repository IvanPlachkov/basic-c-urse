function solve(input){
let bitcoins = Number(input[0]);
let chinaUan = Number(input[1]);
let tax = Number(input[2]);
let bitcoinSum = 1168 * bitcoins;
let chinaSUm = (chinaUan * 0.15)*1.76;
let total = ((bitcoinSum + chinaSUm)/1.95) - (((bitcoinSum + chinaSUm)/1.95)*(tax/100));
console.log(total.toFixed(2));


}solve(["20","5678","2.4"])