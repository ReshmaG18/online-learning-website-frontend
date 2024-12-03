// const quiz = [
//     {
//         question: "What is the most used programming language in 2024?",
//         ans1text: "Java",
//         ans2text: "C",
//         ans3text: "Python",
//         ans4text: "JavaScript",
//         answer: "JavaScript",
//     },
//     {
//         question: "How Many types of selectors in CSS"?
//         ans1text: "two",
//         ans2text: "Three",
//         ans3text: "Four",
//         ans4text: "five",
//         answer: "five",
//     },{
//         question: "What does HTML stand for?",
//         ans1text: "Hypertext Markup Language",
//         ans2text: "Cascading Style Sheet",
//         ans3text: "Jason Object Notation",
//         ans4text: "Helicopters Terminals Motorboats Lamborginis",
//         answer: "Hypertext Markup Language",
//     },
//     {
//         question: "What year was JavaScript launched?",
//         ans1text: "1996",
//         ans2text: "1995",
//         ans3text: "1994",
//         ans4text: "none of the above",
//         answer: "1995",

//     }
// ]
// const question = document.getElementById("quiz-question");
// console.log(question);
// console.log(question.textContent)
// const option_a = document.getElementById("text_option_a");
// const option_b = document.getElementById("text_option_b");
// const option_c = document.getElementById("text_option_c");
// const option_d = document.getElementById("text_option_d");
// const answerElement = document.querySelectorAll(".answer");
// console.log(option_a);
// console.log(option_b);  
// console.log(option_c);
// console.log(option_d);
// console.log(option_a.textContent);
// console.log(option_b.textContent);
// console.log(option_c.textContent);
// console.log(option_d.textContent);

// const submit = document.getElementById("submit");

// let currentQuestion = 0;
// let score = 0;

// console.log(quiz[currentQuestion].question);
// console.log(quiz[currentQuestion].ans1text);
// console.log(quiz[currentQuestion].ans2text);
// console.log(quiz[currentQuestion].ans3text);
// console.log(quiz[currentQuestion].ans4text);

// question.textContent = quiz[currentQuestion].question;
// option_a.textContent = quiz[currentQuestion].ans1text;
// option_b.textContent = quiz[currentQuestion].ans2text;
// option_c.textContent = quiz[currentQuestion].ans3text;
// option_d.textContent = quiz[currentQuestion].ans4text;


// submit.addEventListener("click", () => {
//     const checkedAns = document.querySelector('input[type="radio"]:checked')
//     console.log(checkedAns);
//     // console.log(checkedAns.nextElementSibling.textContent);
//     if( checkedAns === null){
//         alert("Please select an answer");
//     }else{
//         if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
//             score++;
//         }

//         currentQuestion++;
//         if( currentQuestion < quiz.length){
//             question.textContent = quiz[currentQuestion].question;
//             option_a.textContent = quiz[currentQuestion].ans1text;
//             option_b.textContent = quiz[currentQuestion].ans2text;
//             option_c.textContent = quiz[currentQuestion].ans3text;
//             option_d.textContent = quiz[currentQuestion].ans4text;
//             checkedAns.checked = false;
//         }else{
//             alert("Your score is " + score + " out of " + quiz.length);
//             location.reload();
//         }

//     }
// });//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Languag", "High Technology Markup Language", " Home Tool Markup Language"],
    correct: "Hyper Text Markup Language",
  },
  {
    id: "1",
    question: "Which of the following is NOT a valid value for the 'display' property in CSS??",
    options: ["inline"," block","floating"," inline-block"],
    correct: "floating",
  },
  {
    id: "2",
    question: "What is the purpose of the viewport meta tag in HTML",
    options: ["To define the layout of the webpage"," To specify the character encoding of the webpage",
"To control the width and scaling of the viewport on mobile devices",
"To include external JavaScript files"],
    correct: "To control the width and scaling of the viewport on mobile devices",
    
  },
  {
    id: "3",
    question: "Which of the following is NOT a valid HTTP status code?",
    options: [ "200","404","5000","302"],
    correct: 5000,
  },
  
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};