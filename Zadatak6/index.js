const startBtn = document.getElementById("start-button");
const nextBtn = document.getElementById('next-button');
const checkBtn = document.getElementById('check-button');
const mainContainer = document.querySelector('.main-container');
const question = document.querySelector('.question');
const answerButtons = document.querySelector('.answer-container');
const scoreElement = document.querySelector('.score-container')
const endText = document.querySelector('.end-text');

let questionIndex;
let shuffledQuestions;
let score = 0;

const questions = [
    {
        question: "Da li je HTML programski jezik?",
        choices: [
            { text: 'Ne', correct: true },
            { text: 'Da', correct: false }
        ]
    },
    {
        question: "Tranzicije se kontrolišu kroz svojstva:",
        choices: [
            { text: 'transition-animation', correct: false },
            { text: 'transition-delay', correct: true },
            { text: 'transition-transform', correct: false },
            { text: 'transition-duration', correct: true }
        ]
    },{
        question: "Kod JavaScript-a, stringovi su immutable?",
        choices: [
            { text: 'Da', correct: true },
            { text: 'Ne', correct: false },
            { text: 'Ne znam', correct: false },
            { text: 'Mogu i ne moraju da budu', correct: false }
        ]
    }
]

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    questionIndex++;
    nextQuestion()
});

function startQuiz(){
    mainContainer.classList.remove('hide');
    endText.classList.add('hide');
    scoreElement.classList.add('hide')
    checkBtn.classList.remove('hide');
    startBtn.classList.add('hide');
    questionIndex =0;
    score = 0;
    nextQuestion();
}
function nextQuestion(){
    resetState();
    showQuestion(questions[questionIndex]);
}
function showQuestion(questions){
    mainContainer.classList.remove('hide');
    question.innerText = questions.question;
    questions.choices.forEach(answer => {
        const input = document.createElement('input');
        input.type = 'checkbox'
        input.classList.add('choice');
        const label = document.createElement('label');
        label.classList.add('choice-label');
        label.innerText = answer.text;
        label.appendChild(input);
        if(answer.correct){
           label.dataset.correct = answer.correct;
           score++;
        } 
        checkBtn.addEventListener('click', checkAnswer)
        answerButtons.appendChild(label);
        console.log(answerButtons);
    });
}

function resetState(){
    nextBtn.classList.add('hide');
    score=0;
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function checkAnswer(e){
    const selectedInput = e.target;
    const correct = selectedInput.dataset.correct;
    Array.from(answerButtons.children).forEach(label =>{
        setStatusClass(label, label.dataset.correct)
    });
    if(questions.length > questionIndex + 1){
        nextBtn.classList.remove('hide');
    } else {
        scoreElement.classList.remove('hide')
        scoreElement.innerText = 'Score: ' + score;
        endText.classList.remove('hide');
        endText.innerText = "Došli ste do kraja kviza. Želite li pokušati ponovo?"
        startBtn.firstElementChild.innerText = "Restart";
        startBtn.classList.remove('hide');
        checkBtn.classList.add('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
        score-=0;
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}