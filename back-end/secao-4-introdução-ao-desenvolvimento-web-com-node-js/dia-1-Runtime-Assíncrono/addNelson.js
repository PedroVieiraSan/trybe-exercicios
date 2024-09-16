const fs = require('fs').promises;

async function addNelson () {
    const fileContent = await fs.readFile('.simpsonsFamily.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    const nelson = { id: '8', name: 'Nelson Muntz' };
    simpsons.push(nelson);

    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons));
};

async function main() {
    addNelson();
};

main();