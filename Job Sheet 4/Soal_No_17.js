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

//Ambil substring dari kalimat "Jika anda ingin menjadi orang sukses, jangan berhenti untuk bermimpi" mulai dari indeks 7 hingga akhir kalimat.
//Hasil substring: da ingin menjadi orang sukses, jangan berhenti untuk bermimpi

