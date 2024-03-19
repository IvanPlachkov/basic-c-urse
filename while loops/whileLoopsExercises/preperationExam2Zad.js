function solve(input){
    let index=0;
    let badGrades=Number(input[index]);
    index++
    let nameTask= input[index];
    index++;
    let grade = Number(input[index]);
    index++;
    let countGoodGrades=0;
    let countBadGrades=0;
    let totalGrades=0;
    let lastTask="";
    while(nameTask !== "Enough"){
        totalGrades+=grade;
       if(grade <=4){
        countBadGrades++;
            if(countBadGrades =badGrades){
                console.log(`"You need a break, ${countBadGrades} poor grades."`)
                break;
            }
    
       }else{
        countGoodGrades++;
        
       }
       nameTask= input[index];
       index++;
      lastTask=nameTask;
    }
    
    if(nameTask==="Enough"){
        console.log(`Average score: ${totalGrades/(countBadGrades+countGoodGrades)}`)
        console.log(`Number of problems: ${countBadGrades+countGoodGrades}`)
        console.log(`Last problem: ${lastTask[nameTask.lenght-1]}`)
    }
    
    
    
    
    }solve(["3",
    
    "Money",
    
    "6",
    
    "Story",
    
    "4",
    
    "SpringTime",
    
    "5",
    
    "Bus",
    
    "6",
    
    "Enough"])