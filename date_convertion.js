import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Format penulisan adalah DD-MM-YYYY (Contoh: 30-12-2026)? ", (tanggal) => {
  try {
    // 1. Validasi input menggunakan format yang diinginkan (DD-MM-YYYY)
    // Parameter 'true' di akhir mengaktifkan 'strict mode' agar validasi lebih akurat
    const date_regex = /^(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/;

    if (!(date_regex.test(tanggal))) {
      console.log("Maaf, format tanggal yang kamu masukkan salah atau tanggal tidak valid.");
    } else {
      tgl = tanggal.split("-")
      hari = tgl[0]
      bulan = tgl[1]
      tahun = tgl[2]



      let output = new Date(`${bulan}-${hari}-${tahun}`).toLocaleDateString("en-GB");
      console.log("Hasil konversi:", output);
    }
  } catch (e) {
    console.log('Terjadi kesalahan:', e.message);
  } finally {
    // 3. Pastikan rl.close() dipanggil setelah semua logika selesai
    rl.close();
  }
});

