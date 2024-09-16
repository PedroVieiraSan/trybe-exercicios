const fs = require('fs').promises;

async function replaceNelson () {
    const fileContent = await fs.readFile('.simpsonsFamily.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);

    const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

};