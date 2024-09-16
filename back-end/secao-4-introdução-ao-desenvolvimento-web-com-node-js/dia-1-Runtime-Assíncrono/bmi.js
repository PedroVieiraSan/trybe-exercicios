const readline = require('readline-sync');

weightInKg = 80;
heightInCm = 185;

function handleBMI(weight, height) {
    console.log(`Weight: ${weight}kg, Height: ${height}m`);

    heightInMeter = height/100;
    bmi = weight/(heightInMeter**2);
    return bmi;
}

const BMI_MAX_AND_MIN = {
    'Underweight': {
        minBMI: 0,
        maxBMI: 18.4,
    },
    'Normal Weight': {
        minBMI: 18.5,
        maxBMI: 24.9,
    },
    'Overweight': {
        minBMI: 25,
        maxBMI: 29.9,
    },
    'Obese Class I': {
        minBMI: 30,
        maxBMI: 34.9,
    },
    'Obese Class II': {
        minBMI: 35,
        maxBMI: 39.9,
    },
    'Obese Class III': {
        minBMI: 40,
        maxBMI: 100,
    },
};

function handleBMIStatus(bmi) {
    const statuses = Object.keys(BMI_MAX_AND_MIN);
    const results = statuses.filter(status => {
        const { minBMI, maxBMI } = BMI_MAX_AND_MIN[status];
        return bmi >= minBMI && bmi <= maxBMI;
    });
    return results;
};

function main() {
    const weight = readline.questionFloat('What\'s your weight? (kg) ');
    const height = readline.questionInt('What\'s your height? (cm) ');

    const bmi = handleBMI(weight, height);
    const bmiStatus = handleBMIStatus(bmi);
    console.log(`BMI: ${bmi.toFixed(2)}`);
    console.log(`Status: ${bmiStatus}`);
}

main();