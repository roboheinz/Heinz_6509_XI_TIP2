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

//Ubah kalimat "Jurusan Teknik Informatika Pemrograman" menjadi huruf besar (uppercase).
//Hasil uppercase: JURUSAN TEKNIK INFORMATIKA PEMROGRAMAN
