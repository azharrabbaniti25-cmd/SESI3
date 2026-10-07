const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");
 
async function main() {
  const rl = readline.createInterface({ input, output });
 
  let totalKalori = 0;
  let lanjut = "y";
 
  console.log("=== PROGRAM HITUNG KALORI OLAHRAGA ===");
 
  while (lanjut === "y" || lanjut === "Y") {
    console.log("\nPilih jenis olahraga:");
    console.log("1. Lari      (60 kalori / 5 menit)");
    console.log("2. Push-up   (200 kalori / 30 menit)");
    console.log("3. Plank     (5 kalori / 1 menit)");
 
    const pilihan = Number(await rl.question("Masukkan pilihan (1-3): "));
 
    if (pilihan === 1 || pilihan === 2 || pilihan === 3) {
      const durasi = Number(await rl.question("Lama olahraga (menit): "));
 
      if (durasi > 0) {
        let kalori = 0;
        let namaOlahraga = "";
 
        switch (pilihan) {
          case 1:
            namaOlahraga = "Lari";
            kalori = (durasi / 5) * 60;
            break;
          case 2:
            namaOlahraga = "Push-up";
            kalori = (durasi / 30) * 200;
            break;
          case 3:
            namaOlahraga = "Plank";
            kalori = durasi * 5;
            break;
        }
 
        totalKalori += kalori;
        console.log(`${namaOlahraga} selama ${durasi} menit membakar ${kalori} kalori.`);
      } else {
        console.log("Durasi harus lebih dari 0 menit!");
      }
    } else {
      console.log("Pilihan tidak valid! Pilih angka 1, 2, atau 3.");
    }
 
    lanjut = await rl.question("\nTambah aktivitas olahraga lain? (y/n): ");
  }
 
  console.log("\n=== HASIL AKHIR ===");
  console.log(`Total kalori yang terbakar: ${totalKalori} kalori`);
 
  if (totalKalori === 0) {
    console.log("Keterangan: Belum ada kalori yang terbakar.");
  } else if (totalKalori < 100) {
    console.log("Keterangan: Pembakaran kalori masih rendah.");
  } else if (totalKalori < 300) {
    console.log("Keterangan: Pembakaran kalori sedang, bagus!");
  } else {
    console.log("Keterangan: Pembakaran kalori tinggi, kerja bagus!");
  }
 
  rl.close();
}
 
main();