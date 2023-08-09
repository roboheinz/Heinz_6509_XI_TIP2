const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan karakter yang ingin Anda cari: ", (karakterCari) => {
        //Gunakan method indexOf untuk mencari kataCari dalam kalimat
        const indexKarakter = kalimat.indexOf(karakterCari);
        if (indexKarakter !== -1) {
            console.log(`karakter '${karakterCari}' ditemukan pada index: ${indexKarakter}`);
        } else {
            console.log(`karakter '${karakterCari}' tidak ditemukan dalam kalimat`);
        }
        rl.close();
    });
});

//Pada indeks berapa karakter "r" dalam kalimat "JavaScript is fun"?
//Karakter "r" ditemukan pada index ke 6