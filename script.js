let questions_count = 0
let score = 0
const questions = [{
        title: "What is Captain Kirk's Middle name?",
        choices: ["Lee", "Tiberius", "James"],
        answer: "Tiberius"
    },

    {
        title: "What does Commander Data want more than anything else?",
        choices: ["To get married", "A promotion", "To be human"],
        answer: "To be human"
    },

    {
        title: "Captain Sisko loves what sport?",
        choices: ["Baseball", "Tennis", "Soccer"],
        answer: "Baseball"
    }
]

function startQuiz() {
    console.log("started quiz");
    // reset all necessary global variables upon quiz completion 
    questions_count = 0
    let titleScreen = document.getElementById("title-screen")
    titleScreen.style.display = "none"

    let quiz = document.getElementById("quiz")
    quiz.style.display = "block"
    populateQuestion()
    // Hide the start button once it's clicked

    
    // show final score and time prompt after quiz questions are answered
}

function nextQuestion(buttonElement) {
    console.log("To the next question!");
    console.log(buttonElement.id);
    const answerChosen = questions[questions_count].choices[parseInt(buttonElement.id)]
    const correctAnswer = questions[questions_count].answer
    let result = "Incorrect"
    if (answerChosen === correctAnswer) {
        result = "Correct"
        score = score + 5
        document.getElementById("score").textContent = score
        
    }
    let questionResult = document.getElementById("question-result") 
    questionResult.style.display = "block"
    document.getElementById("question-result").textContent = result
    
    questions_count++
    // When we've reached the end of the questions, we want to stop asking them
    if (questions_count > questions.length - 1) {
        let quiz = document.getElementById("quiz")
        quiz.style.display = "none"
        document.getElementById("quiz-end").style.display = "block"
        
    }else{
        populateQuestion()
    }
    {
        
    }
    
}
function populateQuestion() {
    let question_title = document.getElementById("question-title")
    question_title.textContent = questions[questions_count].title
    for( let i = 0; i < questions[questions_count].choices.length; i++) {
        let ans = document.getElementById(`${i}`)
        // let ans = document.getElementById("0")
        ans.textContent = questions[questions_count].choices[i]
        // for every question fill dom elements after each choice is made
        }
}

function restartQuiz() {
    score = 0
    document.getElementById("quiz-end").style.display = "none"
    document.getElementById("title-screen").style.display = "block"
}



// console.log(questions[question_count])
// question_count = question_count + 1
// console.log(questions[question_count]);
// console.log(question_count);

    // .textContent = questions[0].title



    // let questions = document.
    // let current_question =
    // console.log(questions[0].choices[0]);
    // question_count++

// document.getElementById("question-title").textContent = questions[question_count].title