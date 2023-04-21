//Array of objects that holds the questions and answers 
//JSON "jay sahn" = data javascript object notation. Back end creates an api and this is how front end usually recieves data.
const questions = [
  {
    question: "What is the name of the AI that assists Master Chief?",
    answer: "Cortana"
  },
  {
    question: "The Great Journey is a saying used by which alien race?",
    answer: "Covenant"
  },
  {
    question: "What is the one word religious nickname the Covenant call Master Chief?",
    answer: "Demon"
  },
  {
    question: "What species within the Covenant are from a race of worms?",
    answer: "Hunters"
  },
  {
    question: "What is the name of the planet where Master Chief crash lands in Halo 3?",
    answer: "Earth"
  },
  {
    question: "What is the name of the main weapon used by Elite Honor Gaurds?",
    answer: "Energy Sword"
  },
  {
    question: "What is the name of the main melee weapon used by a Brute Chieftain?",
    answer: "Gravity Hammer"
  },
  {
    question: "What is the covenant sniper called",
    answer: "Beam Rifle"
  },
  {
    question: "What is the name of the main antagonist in Halo 3?",
    answer: "The Prophet"
  },
  {
    question: "What is the name of the Flood leader in Halo 3?",
    answer: "Gravemind"
  }
];
//pulling in html elements with unique ids and assigning them to a variable to be used in javascript/DOM
const questionText = document.getElementById("question-text");
const answerForm = document.getElementById("answer-form");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const nextButton = document.getElementById("next-button");
const endContainer = document.getElementById("end-container");
const endText = document.getElementById("end-text");

let currentQuestionIndex = 0;
let numCorrect = 0;

function showQuestion() {
  //questionText is pulling questionText from .getElementById
  //questionText.textContent is whatever text is inside that questionText
  //questions[currentQuestionIndex].question explanation : questions=array of all objects lines 5-42,currentQuestionIndex= question&answer example lines 5&6, and .question is pulling specifically the question information out of that object line 5.
  questionText.textContent = questions[currentQuestionIndex].question;
}
function checkAnswer(event) {
  //preventDefault prevents page from reloading
  event.preventDefault();
  //assigning a variable to the input value. Trim removes leading or ending spaces
  const userAnswer = answerInput.value.trim().toLowerCase();
  //Same as earlier but pulling just the answer using .answer
  const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
  if (userAnswer === correctAnswer) {
    resultText.textContent = "Correct!";
    //numCorrect++ means you add 1 to this variable
    numCorrect++;
  } else {
    resultText.textContent = "Incorrect.";
  }
  answerInput.value = "";
  //hiding input and submit button
  answerForm.style.display = "none";
  //result container pulling if or else statements using result-text depending if answer was correct or incorrect. Also pulling up container to show next button.
  resultContainer.style.display = "block";
}

function nextQuestion() {
  //it allows you to move to the next question by 1
  currentQuestionIndex++;
  //.length tells you how much is in an array 10 total questions.
  //currentQuestionIndex is what question you are on and if it is above 10 means test is over and show results
  if (currentQuestionIndex >= questions.length) {
    showResults();
  } else {
    //shows input in nsubmit button 
    answerForm.style.display = "block";
    //hides the feedback whether right or wrong
    resultContainer.style.display = "none";
    //run show question
    showQuestion();
  }
}

function showResults() {
  resultText.textContent = `You got ${numCorrect} out of ${questions.length} correct!`;
  questionContainer.style.display = "none";
  resultContainer.style.display = "none";
  endContainer.style.display = "block";
}

showQuestion();

submitButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", nextQuestion);