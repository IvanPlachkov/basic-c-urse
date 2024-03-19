function solve(input){
   let index=0;
   let searchBook= input[index];
   index++;

   let bookName= input[index];
   index++;
   let bookCheck= 0;
   while(bookName !=="No More Books"){
        if(bookName === searchBook){
            console.log(`You cheked ${bookCheck} books and found it.`);
            return;
        }
        bookCheck++;
        bookName= input[index];
        index++;
        
   }
   console.log(`The book you search is not here!`)
   console.log(  `You checked ${bookCheck} books.`)
} solve(["Troy",

"Stronger",

"Life Style",

"Troy"])

