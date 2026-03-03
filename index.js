import moment from "moment";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function getInput() {
    const rl = readline.createInterface({ input, output });
    const tanggal = await rl.question('Masukkan tanggal (DD-MM-YYYY, Contoh: 03-03-2026): ');
    rl.close();
    return tanggal;
}

function processDate(tanggal) {
    const isValid = moment(tanggal, "DD-MM-YYYY", true).isValid();
    if (!isValid) return null;
    return moment(tanggal, "DD-MM-YYYY").format('DD/MM/YYYY');
}

function showResult(hasil) {
    if (!hasil) {
        console.error("❌ Format tanggal tidak valid. Gunakan format DD-MM-YYYY.");
        process.exit(1);
    }
    console.log("✅ Hasil konversi:", hasil);
}

// --- MAIN ---
const tanggal = await getInput();
const hasil = processDate(tanggal);
showResult(hasil);