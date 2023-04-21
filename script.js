const questions = [
    {
      question: "What is the name of the AI that assists Master Chief?",
      answer: "Cortana"
    },
    {
      question: "What is the name of the alien race that Master Chief fights against?",
      answer: "Covenant"
    },
    {
      question: "What is the name of the main protagonist in Halo 3?",
      answer: "Master Chief"
    },
    {
      question: "What is the name of the organization that Master Chief is a part of?",
      answer: "UNSC"
    },
    {
      question: "What is the name of the planet where Master Chief crash lands in Halo 3?",
      answer: "Earth"
    },
    {
      question: "What is the name of the main weapon used by the Covenant?",
      answer: "Plasma Rifle"
    },
    {
      question: "What is the name of the main weapon used by Master Chief?",
      answer: "Assault Rifle"
    },
    {
      question: "What is the name of the vehicle that Master Chief can drive?",
      answer: "Warthog"
    },
    {
      question: "What is the name of the main antagonist in Halo 3?",
      answer: "The Prophet of Truth"
    },
    {
      question: "What is the name of the Flood leader in Halo 3?",
      answer: "Gravemind"
    }
  ];
  
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
    questionText.textContent = questions[currentQuestionIndex].question;
  }
  
  function checkAnswer(event) {
    event.preventDefault();
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
    if (userAnswer === correctAnswer) {
      resultText.textContent = "Correct!";
      numCorrect++;
    } else {
      resultText.textContent = "Incorrect.";
    }
    answerForm.style.display = "none";
    resultContainer.style.display = "block";
    nextButton.style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      // End of questions
      questionContainer.style.display = "none";
      resultContainer.style.display = "none";
      endContainer.style.display = "block";
      endText.textContent = `You got ${numCorrect} out of ${questions.length} correct.`;
    } else {
      // Display next question
      questionText.textContent = questions[currentQuestionIndex].question;
      answerForm.reset();
      answerForm.style.display = "block";
      resultContainer.style.display = "none";
      nextButton.style.display = "none";
    }
  }
  
  showQuestion();
  answerForm.addEventListener("submit", checkAnswer);
  nextButton.addEventListener("click", nextQuestion);
  