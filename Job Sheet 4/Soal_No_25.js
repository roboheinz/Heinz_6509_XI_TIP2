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

//Dapatkan slice dari string "1234567890" mulai dari indeks 4 dengan panjang 4 karakter.
//Slice dari kalimat di atas: 5678