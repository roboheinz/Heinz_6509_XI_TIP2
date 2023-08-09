const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (inputString) => {
    console.log(`Jumlah karakter: ${inputString.length}`);
    rl.close();
});

//Berapa karakterkah dalam kata "Ibu Kota Negara"?
//Jumlah karakter dari kalimat tersebut adalah 15