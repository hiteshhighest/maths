const questions = [
    { question: "(-1) + 2", answer: 1 },
    { question: "(-3) + 4", answer: 1 },
    { question: "(-5) + 3", answer: -2 },
    { question: "(-2) + (-3)", answer: -5 },
    { question: "(-7) + 8", answer: 1 },
    { question: "(-10) + 6", answer: -4 },
    { question: "(-4) + (-9)", answer: -13 },
    { question: "(-6) - 2", answer: -8 },
    { question: "(-9) + 3", answer: -6 },
    { question: "2 + (-3)", answer: -1 },
    { question: "5 - (-2)", answer: 7 },
    { question: "(-8) + 2", answer: -6 },
    { question: "(-7) - 4", answer: -11 },
    { question: "(-1) - (-5)", answer: 4 },
    { question: "(-3) - 2", answer: -5 },
    { question: "(-10) - (-5)", answer: -5 },
    { question: "(-2) - (-6)", answer: 4 },
    { question: "4 + (-9)", answer: -5 },
    { question: "(-12) + 8", answer: -4 },
    { question: "(-15) + 6", answer: -9 },
    { question: "(-1) + (-8)", answer: -9 },
    { question: "(-5) - (-7)", answer: 2 },
    { question: "(-8) - 1", answer: -9 },
    { question: "(-6) + (-6)", answer: -12 },
    { question: "(-3) + 10", answer: 7 },
    { question: "(-4) - (-5)", answer: 1 },
    { question: "(-3) - 8", answer: -11 },
    { question: "5 + (-6)", answer: -1 },
    { question: "(-14) + 7", answer: -7 },
    { question: "(-6) - (-3)", answer: -3 },
    { question: "(-7) + 9", answer: 2 },
    { question: "(-11) - 5", answer: -16 },
    { question: "(-2) - 4", answer: -6 },
    { question: "(-9) - (-11)", answer: 2 },
    { question: "3 + (-7)", answer: -4 },
    { question: "(-4) + (-5)", answer: -9 },
    { question: "(-6) + 10", answer: 4 },
    { question: "(-8) + (-2)", answer: -10 },
    { question: "(-2) + (-7)", answer: -9 },
    { question: "(-5) + (-3)", answer: -8 },
    { question: "(-7) - 3", answer: -10 },
    { question: "(-9) + 12", answer: 3 },
    { question: "(-13) + 9", answer: -4 },
    { question: "(-3) + (-12)", answer: -15 },
    { question: "(-4) - (-2)", answer: -2 },
    { question: "(-7) + 5", answer: -2 }
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestionIndex].question;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = questions[currentQuestionIndex].answer;
    const feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Nice Manavi";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Try again";
        feedback.style.color = "red";
    }
}

function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    showQuestion();
}

showQuestion();