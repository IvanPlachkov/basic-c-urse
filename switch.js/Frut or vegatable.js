function fOrV (input){
    let type = input[0];

    switch (type){
        case  "bannan":
        case "kivi" :
        case "apple" :
        case "charry" :
        case "lemon" :
        case "grapes" : console.log("fruits");break;

        case "tomato" :
        case "cucumber" :
        case "pepper":
        case "carrot": console.log("vegatabels");break;
       default : console.log ("unknown")             
    }

}
fOrV(["charry"])