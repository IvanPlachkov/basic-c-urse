function vacationBooksList(input){
    let pageCount= Number(input[0]);
    let readePageForOneHour = Number(input[1]);
    let dayCount = Number(input[2]);
   
    let needTime = pageCount / readePageForOneHour;
    let needTimeForDay = needTime / dayCount
    console.log(needTimeForDay)
}
vacationBooksList(["212","20","2"])