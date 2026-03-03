import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const tanggal = await rl.question('Format penulisan adalah DD-MM-YYYY (Contoh: 03-03-2026)?');


const date_regex = /^(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/;

if (!(date_regex.test(tanggal))) {
    console.log("Maaf, format tanggal yang kamu masukkan salah atau tanggal tidak valid.");
} else {
    const tgl = tanggal.split("-");
    const hari = tgl[0];
    const bulan = tgl[1];
    const tahun = tgl[2];
    const output = new Date(`${bulan}-${hari}-${tahun}`).toLocaleDateString("en-GB");
    console.log("Hasil konversi:", output);
}

rl.close();

