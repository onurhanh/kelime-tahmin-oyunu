
const dogruKelime = ["ekmek", "süt", "yumurta", "peynir"];
let tahminHakki = 5;

for (let i = 0; i < tahminHakki; i++) {
    let tahmin = prompt("Bir gida tahmini yap:").toLocaleLowerCase();

    if (dogruKelime.includes(tahmin)) {
        alert("Tebrikler, doğru tahmin ettiniz!");
        break;
    } else {
        alert("Kelime yanliş, tekrar deneyiniz.");
        if (i === tahminHakki - 1) {
            alert("Tahmin hakkiniz bitti! Oyunu kaybettiniz.");
        } else {
            alert("Yanliş tahmin, kalan hakkiniz: " + (tahminHakki - i - 1));
        }
    }
}




