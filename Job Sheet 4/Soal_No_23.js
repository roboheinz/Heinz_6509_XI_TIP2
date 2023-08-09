const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
        rl.question("Masukan jumlah index terakhir: ", (length) => {
            startIndex = kalimat.length - length
            length = Number(length);
            const substringResult = kalimat.substr(startIndex, length);
            console.log(`Hasil substring dari ${length} index terakhir: ${substringResult}`);
            rl.close();
        });
    });

//Dapatkan substr 7 karakter terakhir dari string "Universitas Gajah Mada adalah salah satu universitas favorite di Indonesia".
//7 karakter terakhir dari kalimat tersebut: donesia