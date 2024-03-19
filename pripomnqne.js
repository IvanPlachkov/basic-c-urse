function projects(input){
    let name = input[0];
    let numberProjects = Number(input[1]);
    let projectTime = numberProjects *3;
    console.log(`the architect ${name}will need ${projectTime} houers to compleat ${numberProjects}`);
         


}
projects(["Georgi","4"])