const { stat } = require("fs");
const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan index awal: ", (startIndex) => {
        rl.question("Masukan panjang index: ", (length) => {
            startIndex = Number(startIndex);
            length = Number(length)
            lengthAkhir = startIndex + length;
            const slicedSubstring = kalimat.slice(startIndex, lengthAkhir);
            console.log(`Hasil sliece dari index ${startIndex} hingga ${lengthAkhir}: ${slicedSubstring}`);
            rl.close();
        });
    });
});

//Dapatkan slice dari kalimat "Bahasa yang digunakan untuk membuat aplikasi mobile adalah Kotlin dan Javascript" mulai dari indeks 7 dengan panjang 8 karakter.
//Slice dari kalimat di atas: yang dig