const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan index awal: ", (startIndex) => {
        rl.question("Masukan panjang substring: ", (length) => {
            startIndex = Number(startIndex);
            length = Number(length);
            const substringResult = kalimat.substr(startIndex, length);
            console.log(`Hasil substring dari index ${startIndex} dengan panjang ${length}: ${substringResult}`);
            rl.close();
        });
    });
});

//Dapatkan substring dari kalimat "I love programming" mulai dari indeks 2 dengan panjang 5 karakter.
//Hasil substring: love