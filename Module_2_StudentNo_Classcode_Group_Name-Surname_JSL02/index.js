const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');

    // ⚠️ Hint 1: Check for duplicates
    // Use 'goalList' to get all existing goals and check if 'goalInput' matches any of them.

    let isDuplicate = false;
    const goals = goalList.querySelectorAll('li');

    goals.forEach(goal => {
        if (goal.textContent === goalInput) {
            isDuplicate = true;
        }
    });
    // I believe there might be a more DRY way to write this code however none of my solutions of my head worked
    // I couldnt properly apply all the debugging techinques i wished due to some confusion in the live portal
    // I ended up creating an additional variable isDuplicate to compare the booleans and prevent duplicates via an if statement


    // ⚠️ Hint 2: Prevent duplicates
    // If a duplicate is found, display an alert to the user and don't add the goal to the list.
    // If it's not a duplicate, proceed with adding it as a new goal.

    if (isDuplicate) {
        alert(`Goal "${goalInput}" is already in the list.`);
    } else {
        // Add the new goal to the list
        const newGoal = document.createElement('li');
        newGoal.textContent = goalInput;
        goalList.appendChild(newGoal);
    }


    // Clear the input field
    document.querySelector('#goalInput').value = '';


};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault();
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
