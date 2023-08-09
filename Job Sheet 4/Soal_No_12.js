const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan kalimat pertama: ", (kalimat1) => {
    rl.question("Masukan kalimat kedua: ", (kalimat2) => {
        const kalimatGabungan = kalimat1.concat(kalimat2);
        console.log(`Hasil penggabungan : ${kalimatGabungan}`);
        rl.close();
    });
});

//Gabungkan kata "Welcome" dengan nama pengguna (input dari pengguna) untuk menyapa pengguna.
//Hasil dari gabungan kedua kata tersebut adalah "Welcome(input dari pengguna)"