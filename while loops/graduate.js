function solve(input){
    let index=0;
    let name = input[index];
    index++
    let negativeGradeCount=0; // negativni ocenki pri skusvane(suzdavame broqch)
    let sumGrade=0;//sreden uspeh promenliva
    let i=1; // klasove v uchilishte te sa do 12;
    let hasExcluded = false; //e bila iskluchena(bulen flag)
    while(i<=12){
        let currentGrade = Number(input[index]);//tenkushta ocenka
        index++
        if(currentGrade<4.00){//ako ocenkata e po malka ot 4
            negativeGradeCount++;//inkrimintiram broq4a purvo kato polu4i edna negativna ocenka pod 4 nabiva stoinost1 
                                //v broqcha negativeGradeCount pri sledvasht ozavurtane ako ima pak takava stava 2 
                                // i vliza v if funkciqta poneve if(2==2) i s breka priklu4va ifa i cikala
                if(negativeGradeCount==2){
                    hasExcluded = true; //tuk pridavame stoinost true na hasExcluded , za da moje da go polzvame
                                        // v if uslovie direktno;
                    break;//prekusva cikala i produljava programata sled nego;
                }
                continue;//vrushta se v na4aloto na cikala while(i<=12)
        }
        sumGrade += currentGrade;
        i++;
    }
let avgGrade = sumGrade/12;
if(hasExcluded){
    console.log(`${name} has been excluded at ${i} grade`)
}else{
console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)
}

}solve(["Gosho",

"5",

"5.5",

"6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
