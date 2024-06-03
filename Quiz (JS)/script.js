const questions = [
  {
    question: "la3ib faransi",
    answers:[
      {text: "kros", correct: false},
      {text: "varane", correct: true},
      {text: "lunin", correct: false},
      {text: "ramos", correct: false},
    ]
  },
  {
    question: "chkon marka l real contre bayern lbarh",
    answers:[
      {text: "vini", correct: false},
      {text: "joselo", correct: true},
      {text: "rodrigo", correct: false},
      {text: "natcho", correct: false},
    ]
  },
  {
    question: "chkon li 9tel wliy 3ahd namsa",
    answers:[
      {text: "talib chinwi", correct: false},
      {text: "talib ma4ribi", correct: false},
      {text: "talib sirbi", correct: true},
      {text: "talib jazairi", correct: false},
    ]
  },
  {
    question: "chhal men rak3a kyna fi nhar ",
    answers:[
      {text: "22", correct: false},
      {text: "20", correct: true},
      {text: "10", correct: false},
      {text: "18", correct: false},
    ]
  },
  {
    question: "chkon li 3ndo 39 3am",
    answers:[
      {text: "Asia", correct: false},
      {text: "nora", correct: true},
      {text: "salah", correct: false},
      {text: "hasan", correct: false},
    ]
  },
  {
    question: "chhal men sora kayna fi l9oraan",
    answers:[
      {text: "314", correct: false},
      {text: "114", correct: true},
      {text: "118", correct: false},
      {text: "100", correct: false},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    showQuestion(); 
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerText = questionNo + ". " + currentQuestion.question; 

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  } 
}


function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
    }else{
      selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
      }

      button.disabled = true ;
    });

  nextButton.style.display = "block";
  
}

function showScore(){
  resetState();
  questionElement.innerText = `You scored ${score} out of ${questions.length} !`;
  nextButton.innerText = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}



nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});

startQuiz();





 