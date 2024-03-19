function solve() {

    for (let houers = 0; houers <= 23; houers++) {// tozi cikul se promenq kogato vutreshniq zavurshi vsi4kite si vuzmojnosti

        for (let minuts = 0; minuts < 60; minuts++) {// tozi blokira gorniq cikul dokato ne se izpulni napulno.;
            for (let sec = 0; sec < 60; sec++) {
                if (houers < 10) {
                    if (minuts < 10) {
                        console.log(`0${houers}:0${minuts}`);
                    }else {
                        console.log(`0${houers}:${minuts}`);
                    }
                } else {
                    if (minuts < 10) {
                    console.log(`${houers}:0${minuts}`);
                }else {
                    console.log(`${houers}:${minuts}`);
                }
            }// tova se pishe vuv naj vutreshniq zada moje vsi4ki danni da se izpishat
            }
        }                           // v praktikata se polzvat nai mnogo do 2 vlojeni, v kursa ima do 5;

    }


} solve()