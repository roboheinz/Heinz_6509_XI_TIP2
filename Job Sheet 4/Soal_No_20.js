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

//Dapatkan substring dari string "Universitas Sudirman merupakan universitas yang terletak di kota Purwokerto" mulai dari indeks 3 hingga indeks 10.
//Hasil substring: versita
