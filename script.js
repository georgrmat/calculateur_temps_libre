function calculateTime() {
    // Get user input values
    const birthdate = new Date(document.getElementById('birthdate').value);
    const sleepHours = parseFloat(document.getElementById('sleepHours').value);
    const workHours = parseFloat(document.getElementById('workHours').value);
    const mealHours = parseFloat(document.getElementById('mealHours').value);
    const miscHours = parseFloat(document.getElementById('miscHours').value);
    const lifeExpectancy = parseFloat(document.getElementById('lifeExpectancy').value);

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
    resultElement.innerText = `Temps Libre Restant : ${remainingFreeTime.toFixed(2)} heures`;
}
