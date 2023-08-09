const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
        rl.question("Masukan jumlah index pertama: ", (endIndex) => {
            startIndex = Number(0);
            endIndex = Number(endIndex);
            const slicedSubstring = kalimat.slice(startIndex, endIndex);
            console.log(`Hasil sliece dari index ${startIndex} hingga ${endIndex}: ${slicedSubstring}`);
            rl.close();
        });
    });

//Ambil tiga karakter pertama dari string "SMK Strada Jakarta".
//Tiga karakter pertama: SMK 