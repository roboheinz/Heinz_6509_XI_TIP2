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
            //Gunakan method slice untuk mengambil substring dari startIndex hingga endIndex
            const slicedSubstring = kalimat.slice(startIndex, endIndex);
            console.log(`Hasil sliece dari index ${startIndex} hingga ${endIndex}: ${slicedSubstring}`);
            rl.close();
        });
    });
});