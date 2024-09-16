const fs = require('fs').promises;

async function filterSimpsons() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const simpsonsFiltered = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(simpsonsFiltered));
}

async function main () {
  await filterSimpsons();
}

main();