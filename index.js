import moment from "moment"
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const tanggal = await rl.question('Format penulisan adalah DD-MM-YYYY (Contoh: 03-03-2026)?');

    const isValid = moment(tanggal, "DD-MM-YYYY", true).isValid();

    if (!isValid) {
      console.log("Maaf, format tanggal yang kamu masukkan salah atau tanggal tidak valid.");
    } else {
      let output = moment(tanggal, "DD-MM-YYYY").format('DD/MM/YYYY');
      console.log("Hasil konversi:", output);
    }
rl.close();