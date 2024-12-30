// Questions grouped by levels of difficulty
const questions = {
    level1: [
        { question: "(-1) + 2", answer: 1 },
        { question: "(-3) - 4", answer: -7 },
        { question: "5 - (-2)", answer: 7 },
        { question: "(-7) + 8", answer: 1 },
        { question: "(-10) - (-5)", answer: -5 },
        { question: "(-4) - (-6)", answer: 2 },
        { question: "(-2) + (-9)", answer: -11 }
    ],
    level2: [
        { question: "(-1) + 2 - 3", answer: -2 },
        { question: "(-3) - 4 + 5", answer: -2 },
        { question: "5 + (-2) - (-4)", answer: 7 },
        { question: "(-6) + (-3) - 1", answer: -10 },
        { question: "(-2) - (-6) + (-4)", answer: 0 },
        { question: "(-8) + 2 - 3", answer: -9 },
        { question: "10 - (-7) + (-3)", answer: 14 }
    ],
    level3: [
        { question: "(-1) + 2 - 3 + 4", answer: 2 },
        { question: "(-5) + 3 - 4 + 6", answer: 0 },
        { question: "(-8) + 2 + (-3) + 5", answer: -4 },
        { question: "10 - (-2) + (-4) - 6", answer: 2 },
        { question: "(-3) - 2 + 1 - (-7)", answer: 3 },
        { question: "(-10) + 5 - (-3) + 1", answer: -1 },
        { question: "15 + (-7) - 6 + (-2)", answer: 0 }
    ]
};

let currentLevel = 'level1'; // Start with Level 1
let currentQuestionIndex = 0;

// Display the current question
function showQuestion() {
    const questionElement = document.getElementById('question');
    const levelQuestions = questions[currentLevel];
    questionElement.textContent = levelQuestions[currentQuestionIndex].question;
    document.getElementById('answer').value = ''; // Clear the input field
    document.getElementById('feedback').textContent = ''; // Clear feedback
}

// Check the user's answer
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = questions[currentLevel][currentQuestionIndex].answer;
    const feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Great job!";
        feedback.style.color = "green";

        // Move to the next question
        nextQuestion();
    } else {
        feedback.textContent = "Incorrect. Try again.";
        feedback.style.color = "red";
    }
}

// Move to the next question
function nextQuestion() {
    const levelQuestions = questions[currentLevel];
    currentQuestionIndex++;

    // If finished all questions in the level, move to the next level
    if (currentQuestionIndex >= levelQuestions.length) {
        if (currentLevel === 'level1') {
            alert("Great! You've completed Level 1. Get ready for harder questions!");
            currentLevel = 'level2';
        } else if (currentLevel === 'level2') {
            alert("Amazing! You've completed Level 2. Here comes the toughest set!");
            currentLevel = 'level3';
        } else {
            alert("You're a math master! You've completed all levels. Restarting at Level 1.");
            currentLevel = 'level1';
        }
        currentQuestionIndex = 0;
    }
    showQuestion();
}

// Initialize the first question
showQuestion();
