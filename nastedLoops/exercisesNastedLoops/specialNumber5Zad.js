function solve(input) {
    let num = Number(input[0]);
      let line = "";
        for (let currentNum = 1111; currentNum <= 9999; currentNum++) {
        let curentNumString = currentNum.toString();
        let isSpecial = true;
        for (let index = 0; index < curentNumString.length; index++) {
            let curentDIgit = Number(curentNumString[index]);

            if (num % curentDIgit !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial == true) {
            line += `${curentNumString} `
        }
    }
    console.log(line)

} solve(["3"
])
//https://www.google.com/search?q=05.+Special+Numbers+js&client=firefox-b-d&sxsrf=APwXEddfHPclUp6kmVXyJDhq8LiRviFEeg%3A1680263055059&ei=j8cmZL6cA8mPxc8Pg86xwAY&ved=0ahUKEwj-n5rUi4b-AhXJR_EDHQNnDGgQ4dUDCA4&uact=5&oq=05.+Special+Numbers+js&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQ6CggAEEcQ1gQQsANKBAhBGABQjgNY8wdgzQloAXABeACAAXOIAcICkgEDMC4zmAEAoAEByAEGwAEB&sclient=gws-wiz-serp#fpstate=ive&vld=cid:498caade,vid:yZCbqXi5BxY