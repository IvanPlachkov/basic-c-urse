function solve(input){
let change = Number(input[0]);
let coinsUsed = 0;
change = Math.round(change*100);// 1lv go preobrazuvame v 100 edinici 
                                //i pri umnojenie na drobi js ne e tochen i trqbva da se zakruglq;
while(change>0){
if(change>=200){  // tyk preobrazuvame 2 lv stotinka w 200 edinici stotinki;
    change-=200;
}else if(change>=100){// ako restoto e po-golqmo ot 1 lv napraven na 100stotinki
change -=100;
}else if (change>=50){
    change-=50;
    }else if (change>=20){
        change -=20;
    }else if (change>=10){
        change -=10;
    }else if(change >=5){
        change -=5;
    }else if(change >=2){
        change -=2;
    }else if(change>=1){
        change -=1;
    }
    coinsUsed +=1; // trqbva da uveli4im izpolzvaniete moneti
}
console.log(coinsUsed);
}solve(["0.56"])