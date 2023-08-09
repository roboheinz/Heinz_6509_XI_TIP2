const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan kata yang ingin Anda cari: ", (kataCari) => {
        const indexKata = kalimat.indexOf(kataCari);
        if (indexKata !== -1) {
            console.log(`kata '${kataCari}' ditemukan pada index: ${indexKata}`);
        } else {
            console.log(`kata '${kataCari}' tidak ditemukan dalam kalimat`);
        }
        rl.close();
    });
});

//Dimana posisi kata "jurusan" pertama kali muncul dalam kalimat "Banu merupakan seorang murid di sekolah SMK di Jakarta dan jurusan dia adalah RPL"?
//kata "jurusan" pertama kali muncul pada index: 59