const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan index awal: ", (startIndex) => {
        rl.question("Masukan index akhir: ", (endIndex) => {
            //Konversi nilai index ke tipe Number
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            // Gunakan method substring untuk mengambil substring dari startIndex hingga endIndex
            const substringResult = kalimat.substring(startIndex, endIndex);
            console.log(`Hasil substring dari index ${startIndex} hingga ${endIndex}: ${substringResult}`);
            rl.close();
        });
    });
});