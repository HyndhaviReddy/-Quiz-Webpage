const questions = {
    general: [
      { question: "What is the capital of France?", options: ["Paris", "Berlin", "London", "Madrid"], correctAnswer: "Paris" },
      { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"], correctAnswer: "William Shakespeare" },
    ],
    science: [
      { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "NaCl"], correctAnswer: "H2O" },
      { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], correctAnswer: "Mars" },
    ],
    technology: [
      { question: "Who is the CEO of Tesla?", options: ["Jeff Bezos", "Elon Musk", "Tim Cook", "Mark Zuckerberg"], correctAnswer: "Elon Musk" },
      { question: "What does 'HTML' stand for?", options: ["Hyper Text Markup Language", "High Tech Machine Learning", "Home Tool Markup Language", "Hyperlink and Text Markup Language"], correctAnswer: "Hyper Text Markup Language" },
    ],
    art: [
      { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"], correctAnswer: "Leonardo da Vinci" },
      { question: "Which art movement includes works like 'Starry Night' and 'The Scream'?", options: ["Impressionism", "Cubism", "Surrealism", "Expressionism"], correctAnswer: "Expressionism" },
    ],
  };
  
  let currentCategory = null;
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    const categorySelect = document.getElementById("category");
    currentCategory = categorySelect.value;
  
    const categorySelection = document.getElementById("category-selection");
    const quizQuestions = document.getElementById("quiz-questions");
  
    categorySelection.style.display = "none";
    quizQuestions.style.display = "block";
  
    showQuestion();
  }
  
  // ... (previous JavaScript code) ...

function showQuestion() {
  const questionContainer = document.querySelector(".question");
  const optionsForm = document.querySelector(".options");

  const currentQuestion = questions[currentCategory][currentQuestionIndex];

  // Display the question
  questionContainer.textContent = currentQuestion.question;

  // Display the options as checkboxes
  optionsForm.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement("label");
    optionElement.innerHTML = `
      <input type="checkbox" name="option" value="${option}" id="option${index}">
      ${option}
    `;
    optionsForm.appendChild(optionElement);
  });

  // Add a submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  optionsForm.appendChild(submitButton);
}

function checkAnswer() {
  const selectedOptions = document.querySelectorAll('input[name="option"]:checked');
  const currentQuestion = questions[currentCategory][currentQuestionIndex];

  // Check if at least one option is selected
  if (selectedOptions.length > 0) {
    // Check if the selected options are correct
    selectedOptions.forEach((selectedOption) => {
      if (currentQuestion.options.includes(selectedOption.value) && !selectedOption.checked) {
        // Incorrect option selected
        alert("Incorrect! Please select the correct option(s).");
        return false; // Prevent form submission
      }
    });

    // All selected options are correct
    score++;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions[currentCategory].length) {
      showQuestion();
    } else {
      showResult();
    }

    // Prevent form submission
    return false;
  } 
}

// ... (remaining JavaScript code) ...

  
  function showResult() {
    const quizQuestions = document.getElementById("quiz-questions");
    const resultContainer = document.getElementById("result");
    const scoreElement = document.getElementById("score");
  
    quizQuestions.style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.textContent = score;
  }
  