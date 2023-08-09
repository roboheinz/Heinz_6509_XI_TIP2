const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat; ", (kalimat) => {
    rl.question("Masukan kata yang ingin anda cari: ", (kataCari) => {
        //Gunakan method lastIndexOf untuk mencari kataCari dalam kalimat
        const indexKataTerakhir = kalimat.lastIndexOf(kataCari);
        if (indexKataTerakhir !== -1) {
            console.log(`Kata '${kataCari}' ditemukan pada index terakhir: ${indexKataTerakhir}`);
        } else {
            console.log(`kata '${kataCari}' tidak ditemukan dalam kalimat.`);
        }
        rl.close();
    });
});