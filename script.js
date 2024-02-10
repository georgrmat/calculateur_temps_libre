function calculateTime() {
    // Get user input values
    const birthdateInput = document.getElementById('birthdate');
    const sleepHoursInput = document.getElementById('sleepHours');
    const workHoursInput = document.getElementById('workHours');
    const mealHoursInput = document.getElementById('mealHours');
    const miscHoursInput = document.getElementById('miscHours');
    const lifeExpectancyInput = document.getElementById('lifeExpectancy');

    // Parse user input values
    const birthdate = new Date(birthdateInput.value);
    const sleepHours = parseFloat(sleepHoursInput.value);
    const workHours = parseFloat(workHoursInput.value);
    const mealHours = parseFloat(mealHoursInput.value);
    const miscHours = parseFloat(miscHoursInput.value);
    const lifeExpectancy = parseFloat(lifeExpectancyInput.value);

    // Check for valid numeric input
    if (isNaN(sleepHours) || isNaN(workHours) || isNaN(mealHours) || isNaN(miscHours) || isNaN(lifeExpectancy)) {
        alert("Please enter valid numeric values for all fields.");
        return;
    }

    // Calculate total hours spent on various activities
    const totalHoursSpent = sleepHours + workHours + mealHours + miscHours;

    // Calculate remaining life in hours based on the provided formula
    const currentDate = new Date();
    const age = (currentDate - birthdate) / (1000 * 60 * 60 * 24 * 365);
    const remainingLife = (lifeExpectancy - age) * 365.25 * (24 - sleepHours - workHours - mealHours - miscHours);

    // Calculate remaining free time without changing the constants
    const remainingFreeTime = remainingLife - totalHoursSpent;

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerText = `Remaining Free Time: ${remainingFreeTime.toFixed(2)} hours`;
}
