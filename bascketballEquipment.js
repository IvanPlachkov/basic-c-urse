function priceEquipme(input){

 let bTax = Number(input[0]);

 let bShoues =   bTax - ( bTax * 0.40)  ;
 let sportSet =  bShoues - (bShoues * 0.20) ;
 let bBoll = sportSet / 4;
 let bAccessories = bBoll /5;
 let cost = bTax + bShoues + sportSet + bBoll + bAccessories
 console.log (cost)


}
priceEquipment(["365"])