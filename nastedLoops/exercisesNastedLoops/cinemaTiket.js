function solve(input) {
    let index = 0;

    let movieName = input[index];
    index++;
    let studentTiketCount = 0;
    let standarTiketCount = 0;
    let kidsTiketCount = 0;
    
    while (movieName !== "Finish") {
        let freeSpaces = Number(input[index]);
        index++;
        let tiketType = input[index];
        index++;
        let spaceTaken = 0;

        while (tiketType !== "End") {
            spaceTaken++;
            if (tiketType === "student"){
                studentTiketCount+=1;
        
        }else if (tiketType === "standard") {
            standarTiketCount+=1;
        } else {
            kidsTiketCount+=1;
        }

        if(spaceTaken===freeSpaces){
            break;
        }
        tiketType = input[index];
        index++;
    }
    let spaceTakenPercend = (spaceTaken/freeSpaces)*100;
    console.log(`${movieName} - ${spaceTakenPercend.toFixed(2)}% full.`)
  movieName  = input[index];
  index++;
  }
 
let totalTiketsCount  = studentTiketCount + standarTiketCount +  kidsTiketCount;
let stundetTiketsPercendt  = (studentTiketCount / totalTiketsCount *100).toFixed(2);
let standarTikePercent = (standarTiketCount / totalTiketsCoun *100).toFixed(2);
let kidsTiketPercendt = (kidsTiketCount / totalTiketsCount *100).toFixed(2);
console.log(`Total tickets: ${totalTiketsCount}`);
console.log(`${stundetTiketsPercendt}% student tickets.`);
console.log(`${standarTikePercent}% standard tickets.`);
console.log(`${kidsTiketPercendt}% kids tickets.`);

} solve(["Taxi", "10", "standard", "kid", "student",
    "student",
    "standard", "standard", "End", "Scary Movie", "6",
    "student", "student", "student", "student",
    "student", "student", "Finish"])
