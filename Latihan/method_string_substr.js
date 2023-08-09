const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan index awal: ", (startIndex) => {
        rl.question("Masukan panjang substring: ", (length) => {
            //Konversi nilai index dan panjang ke tipe Number
            startIndex = Number(startIndex);
            length = Number(length);
            //Gunakan method substr untuk mengambil substring daru startIndex dengan panjang length
            const substringResult = kalimat.substr(startIndex, length);
            console.log(`Hasil substring dari index ${startIndex} dengan panjang ${length}: ${substringResult}`);
            rl.close();
        });
    });
});