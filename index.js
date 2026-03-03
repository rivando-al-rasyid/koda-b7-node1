import moment from "moment";
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Format penulisan adalah DD-MM-YYYY (Contoh: 03-03-2026)? ", (tanggal) => {
  try {
    // 1. Validasi input menggunakan format yang diinginkan (DD-MM-YYYY)
    // Parameter 'true' di akhir mengaktifkan 'strict mode' agar validasi lebih akurat
    const isValid = moment(tanggal, "DD-MM-YYYY", true).isValid();

    if (!isValid) {
      console.log("Maaf, format tanggal yang kamu masukkan salah atau tanggal tidak valid.");
    } else {
      // 2. Jika valid, lakukan konversi ke format DD/MM/YYYY
      let output = moment(tanggal, "DD-MM-YYYY").format('DD/MM/YYYY');
      console.log("Hasil konversi:", output);
    }
  } catch (e) {
    console.log('Terjadi kesalahan:', e.message);
  } finally {
    // 3. Pastikan rl.close() dipanggil setelah semua logika selesai
    rl.close();
  }
});

