const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat: ", (inputString) => {
    rl.question("Masukan indeks yang ingin Anda cek: ", (index) => {
        index = Number(index);
        if (index >= 0 && index < inputString.length) {
            const character = inputString.charAt(index);
            console.log(`Karakter pada index ${index}: ${character}`);
        } else {
            console.log("Index tidak valid!");
        }
        rl.close();
    });
});

//Karakter apa yang terdapat pada indeks ke-7 dalam kata "Republik Indonesia"?
//Karakter pada index ke-7: k