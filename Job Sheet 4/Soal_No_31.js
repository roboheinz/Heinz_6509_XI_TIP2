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

//Ubah kalimat "Data Analyst merupakan pekerjaan yang dibutuhkan beberapa perusahaan" menjadi huruf besar (uppercase).
//Hasil uppercase: DATA ANALYST MERUPAKAN PEKERJAAN YANG DIBUTUHKAN BEBERAPA PERUSAHAAN

