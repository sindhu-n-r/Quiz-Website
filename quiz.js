//Question bank
var questionBank= [
    {
        question : 'How many sizes of headers are available in HTML by default?',
        option : ['5','1','3','6'],
        answer : '6'
    },
    {
        question : 'How to create an ordered list in HTML?',
        option : ['ul','ol','href','b'],
        answer : 'ol'
    },
    {
        question : 'How to display preformatted text in HTML?',
        option : ['p','pre','hr','All of the above'],
        answer : 'pre'
    },
    {
        question : 'Which attribute is used to provide a unique name to an HTML element?',
        option : ['id','class','type','None of the above'],
        answer : 'id'
    },
    {
        question : 'Which HTML element is used to define description data?',
        option : ['li','ol','dd','dl'],
        answer : 'dd'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var op0= document.getElementById('op0');
var op1= document.getElementById('op1');
var op2= document.getElementById('op2');
var op3= document.getElementById('op3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function display(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    op0.innerHTML= questionBank[i].option[0];
    op1.innerHTML= questionBank[i].option[1];
    op2.innerHTML= questionBank[i].option[2];
    op3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calculate(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        display();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


display();