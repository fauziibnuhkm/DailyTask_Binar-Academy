// 1 hasil tambah inputan user 
// 2 hasil kurang inputan user
// 3 hasil kali inputan user
// 4 hasil bagi inputan user
// 5 hasil total harga kali quantitas barang

const { penjumlahan } = require("./penjumlahan");
const { pengurangan } = require("./pengurangan");
const { pembagian } = require("./pembagian");
const { perkalian } = require("./perkalian");
const { total } = require("./total");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



console.log("========== NO 1 ==========");
rl.question("masukan angka 1 ! : ", (firstNum) => {
  rl.question("masukan angka 2 ! : ", (secondNum) => {
    const result = penjumlahan(parseInt(firstNum), parseInt(secondNum));
    console.log(`Hasil dari ${firstNum} + ${secondNum} Adalah ${result}`);
    rl.close();
  });
});

console.log("========== NO 2 ==========");
rl.question("masukan angka 1 ! : ", (firstNum) => {
  rl.question("masukan angka 2 ! : ", (secondNum) => {
    const result = pengurangan(parseInt(firstNum), parseInt(secondNum));
    console.log(`Hasil dari ${firstNum} - ${secondNum} Adalah ${result}`);
    rl.close();
  });
});

console.log("========== NO 3 ==========");
rl.question("masukan angka 1 ! : ", (firstNum) => {
  rl.question("masukan angka 2 ! : ", (secondNum) => {
    const result = pembagian(parseInt(firstNum), parseInt(secondNum));
    console.log(`Hasil Dari ${firstNum} / ${secondNum} Adalah ${result}`);
    rl.close();
  });
});

console.log("========== NO 4 ==========");
rl.question("masukan angka 1 ! : ", (firstNum) => {
  rl.question("masukan angka 2 ! : ", (secondNum) => {
    const result = perkalian(parseInt(firstNum), parseInt(secondNum));
    console.log(`Hasil Dari ${firstNum} x ${secondNum} Adalah ${result}`);
    rl.close();
  });
});

console.log("========== NO 5 ==========");
rl.question("masukan angka pertama ! : ", (price) => {
  rl.question("masukan angka kedua ! : ", (quantity) => {
    const result = total(parseInt(price), parseInt(quantity));
    console.log(`Total nya adalah: ${result}`);
    rl.close();
  });
});