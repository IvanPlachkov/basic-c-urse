function solve(input){
let index =0;
let username =input[index];
index++;
let pasword = input[index];
index++;
let curentPasword = input[index];
while(pasword !== curentPasword){
    curentPasword = input[index];
    index++;
}
console.log(`Welcome ${username}!`)
}solve(["Nakov",

"1234",

"Pass",

"1324",

"1234"])