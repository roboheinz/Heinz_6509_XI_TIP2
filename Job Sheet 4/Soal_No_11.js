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

//Gabungkan string "Saya sangat suka sekali warna " dengan warna kesukaan Anda.
//Hasil dari gabungan kedua kata tersebut adalah "Saya sangat suka sekali warna biru"