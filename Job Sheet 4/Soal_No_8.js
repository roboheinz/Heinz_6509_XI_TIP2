const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat; ", (kalimat) => {
    rl.question("Masukan kata yang ingin anda cari: ", (karakterCari) => {
        const indexKarakterTerakhir = kalimat.lastIndexOf(karakterCari);
        if (indexKarakterTerakhir !== -1) {
            console.log(`Karakter '${karakterCari}' ditemukan pada index terakhir: ${indexKarakterTerakhir}`);
        } else {
            console.log(`karakter '${karakterCari}' tidak ditemukan dalam kalimat.`);
        }
        rl.close();
    });
});

//Pada indeks berapa karakter terakhir dalam kalimat "I love programming"?
//Karakter terakhir berada pada index: 17