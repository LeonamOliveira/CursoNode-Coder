"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const argv = yargs
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv;
// fs.writeFile(argv.filename, argv.content, (error) => {
//     if(error) throw error
//     console.log(`Arquivo ${argv.filename} foi salvo com sucesso.`)
// })
//# sourceMappingURL=save-file.js.map