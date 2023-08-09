const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan kata yang ingin Anda cari: ", (kataCari) => {
        //Gunakan method indexOf untuk mencari kataCari dalam kalimat
        const indexKata = kalimat.indexOf(kataCari);
        if (indexKata !== -1) {
            console.log(`kata '${kataCari}' ditemukan pada index: ${indexKata}`);
        } else {
            console.log(`kata '${kataCari}' tidak ditemukan dalam kalimat`);
        }
        rl.close();
    });
});