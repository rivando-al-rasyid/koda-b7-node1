import { cowsay, cowthink, moo } from "cowsayjs";


import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const Quotes = await rl.question('Quotes Hari Ini? ');

console.log(cowsay(`${Quotes}`));

rl.close();
