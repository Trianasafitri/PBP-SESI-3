const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function harga(barang) {
    switch (barang.toLowerCase()) {
        case "buku": return 15000;
        case "pulpen": return 5000;
        case "tas": return 100000;
        case "sepatu": return 250000;
        case "jaket": return 150000;
        default: return 0;
    }
}

console.log("=== PROGRAM HITUNG DISKON ===");
console.log("Barang: Buku, Pulpen, Tas, Sepatu, Jaket");

rl.question("Pilih barang 1: ", a => {
    rl.question("Jumlah: ", b => {
        rl.question("Pilih barang 2: ", c => {
            rl.question("Jumlah: ", d => {
                rl.question("Pilih barang 3: ", e => {
                    rl.question("Jumlah: ", f => {

                        let total = harga(a) * +b + harga(c) * +d + harga(e) * +f;

                        let diskon = total >= 300000 ? total * 10 / 100 :
                                     total >= 100000 ? total * 5 / 100 :
                                     total >= 50000 ? total * 3 / 100 : 0;

                        console.log("\nTotal Belanja : Rp" + total.toLocaleString("id-ID"));

                        if (diskon > 0) {
                            console.log("Diskon        : Rp" + diskon.toLocaleString("id-ID"));
                            console.log("Total Bayar   : Rp" + (total - diskon).toLocaleString("id-ID"));
                        } else {
                            console.log("Anda tidak mendapat diskon karena tidak mencapai minimum perbelanjaan");
                        }

                        rl.close();
                    });
                });
            });
        });
    });
});