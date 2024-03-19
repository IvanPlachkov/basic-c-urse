function solve(input) {
   let index=0;
    
    let command = input[index];//1000  poneve moje da e "Going home" i ne burzame da go obrushtame kum 4ishlo
     index++; // inkrimentirame da moje sledvashtiq put da vzemem index [1]
     let totalSteps = 0;
    while(command !== `Going home`){
        let stepsCount = Number(command); //1000 kra4ki tuk konvertirame kum 4islo poneje ve4e nqma opasnost ot going home

        totalSteps +=stepsCount; //2000+1000 = 3000  tuk dobavqme 1000 stupki v broqcha
        
        if(totalSteps>=10000){
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps-10000}steps over the goal!`);
            break;
        }
             
      
    command = input[index];//1500 tuk ve4e preminava kum index[1]
    index++;
     
    }
    if(command === `Going home`){
        let stepsGoingBack = Number(input[index]);//tova e posledniq element ot masiva 2000 stupki go 8298+2000
        totalSteps +=stepsGoingBack;              //vzemame pooneje da vidim kolko stupki sme nad tova da se priberem sled Going home 
        if(totalSteps>=10000){
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - 10000} steps over the goal!`);
        
        }else {
            console.log(`${10000-totalSteps}more steps to reach goal`);
        }
    }
}solve(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])