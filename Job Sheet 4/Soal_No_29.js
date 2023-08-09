const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    const kalimatUpperCase = kalimat.toUpperCase();
    console.log(`Kalimat dalam huruf besar: ${kalimatUpperCase}`);
    rl.close();
});

//Ubah kalimat "I love programming" menjadi huruf besar (uppercase).
//Hasil uppercase: I LOVE PROGRAMMING
