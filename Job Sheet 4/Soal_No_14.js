const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan kata yang ingin Anda cari: ", (kataCari) => {
        const indexKata = kalimat.indexOf(kataCari);
        if (indexKata !== -1) {
            console.log(`kata '${kataCari}' ditemukan pada index: ${indexKata}`);
        } else {
            console.log(`kata '${kataCari}' tidak ditemukan dalam kalimat`);
        }
        rl.close();
    });
});

//Pada indeks berapa huruf "a" pertama kali muncul dalam kalimat "JavaScript is awesome."?
//Huruf "a" pertama kali muncul pada index: 1