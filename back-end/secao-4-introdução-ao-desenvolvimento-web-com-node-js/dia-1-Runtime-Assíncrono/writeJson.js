const fs = require('fs').promises;

async function createJSON() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);

    const ids = [1, 2, 3, 4];
    const selectedSimpsons = simpsons
    .filter((simpson) =>
        ids.includes(Number(simpson.id))); 

    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(selectedSimpsons));
}

function main() {
    createJSON();
}

main();