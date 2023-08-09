const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (inputString) => {
    console.log(`Jumlah karakter: ${inputString.length}`);
    rl.close();
});

//Berapa jumlah karakter dalam string "1234567890"?
//Jumlah karakter dari kalimat tersebut adalah 10