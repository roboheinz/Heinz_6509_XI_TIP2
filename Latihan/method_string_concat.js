const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan kalimat pertama: ", (kalimat1) => {
    rl.question("Masukan kalimat kedua: ", (kalimat2) => {
        //Menggabungkan kalimat 1 dan kalimat 2 menggunakan method concat()
        const kalimatGabungan = kalimat1.concat(kalimat2);
        console.log(`Hasil penggabungan : ${kalimatGabungan}`);
        rl.close();
    });
});