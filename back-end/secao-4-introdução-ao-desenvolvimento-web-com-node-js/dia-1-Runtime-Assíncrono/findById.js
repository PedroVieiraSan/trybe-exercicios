const fs = require('fs').promises;

async function readById(id) {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);

    const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

    if (!chosenSimpson) {
        throw new Error('id não encontrado');
    };
    return chosenSimpson;
};

async function main() {
    const simpson = await readById(1);
    console.log(simpson);
};

main();