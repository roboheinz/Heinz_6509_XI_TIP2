const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan index awal: ", (startIndex) => {
        rl.question("Masukan index akhir: ", (endIndex) => {
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            const substringResult = kalimat.substring(startIndex, endIndex);
            console.log(`Hasil substring dari index ${startIndex} hingga ${endIndex}: ${substringResult}`);
            rl.close();
        });
    });
});

//Ambil substring dari kalimat "Welcome to the world of programming" mulai dari indeks 11 hingga akhir kalimat.
//Hasil substring: the world of programming