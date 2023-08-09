const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan karakter yang ingin Anda cari: ", (karakterCari) => {
        const indexKarakter = kalimat.indexOf(karakterCari);
        if (indexKarakter !== -1) {
            console.log(`karakter '${karakterCari}' ditemukan pada index: ${indexKarakter}`);
        } else {
            console.log(`karakter '${karakterCari}' tidak ditemukan dalam kalimat`);
        }
        rl.close();
    });
});

//Pada indeks berapa karakter "w" dalam kata "Daerah Istimewa Yogyakarta"?
//Karakter "w" ditemukan pada index ke 13