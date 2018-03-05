var currentQuestion = 0;
var correct = 0;
var incorrect = 0;
var remainingQuest = 13;

var container = document.getElementsByClassName('question')
var questionEl = document.getElementsByClassName('question');
var opt1 = document.getElementById('opt-1');
var opt2 = document.getElementById('opt-2');
var opt3 = document.getElementById('opt-3');
var opt3 = document.getElementById('opt-4');

var questions =[{
    "question" : "How old is Quavo from the Migos?",
    "option1" : "22",
    "option2" : "26",
    "option3" : "29",
    "option4" : "32",
    "answer" : "2"
}, {
    "question" : "How old is Cardi B?",
    "option1" : "19",
    "option2" : "21",
    "option3" : "23",
    "option4" : "25",
    "answer" : "4"
}, {
    "question" : "How old is Future?",
    "option1" : "31",
    "option2" : "34",
    "option3" : "37",
    "option4" : "41",
    "answer" : "2" 
}, {
    "question" : "How old is Nicki Minaj?",
    "option1" : "29",
    "option2" : "31",
    "option3" : "35",
    "option4" : "38",
    "answer" : "3" 
}, {
    "question" : "How old is A$AP Rocky?",
    "option1" : "23",
    "option2" : "25",
    "option3" : "27",
    "option4" : "39",
    "answer" : "4" 
}, {
    "question" : "How old is Lil Wayne?",
    "option1" : "35",
    "option2" : "38",
    "option3" : "41",
    "option4" : "44",
    "answer" : "1" 
}, {
    "question" : "How old is Drake?",
    "option1" : "29",
    "option2" : "31",
    "option3" : "33",
    "option4" : "35",
    "answer" : "2" 
}, {
    "question" : "How old is Kim Kardashian?",
    "option1" : "28",
    "option2" : "33",
    "option3" : "37",
    "option4" : "39",
    "answer" : "3" 
}, {
    "question" : "How old is Kanye?",
    "option1" : "31",
    "option2" : "35",
    "option3" : "38",
    "option4" : "40",
    "answer" : "4" 
}, {
    "question" : "How old is Jay Z?",
    "option1" : "45",
    "option2" : "48",
    "option3" : "51",
    "option4" : "444",
    "answer" : "2" 
}, {
    "question" : "How old is Kendrick Lamar?",
    "option1" : "24",
    "option2" : "27",
    "option3" : "30",
    "option4" : "33",
    "answer" : "3" 
}, {
    "question" : "How old is Beyonce?",
    "option1" : "33",
    "option2" : "36",
    "option3" : "39",
    "option4" : "41",
    "answer" : "2" 
}, {
    "question" : "How old is Rihanna?",
    "option1" : "26",
    "option2" : "28",
    "option3" : "30",
    "option4" : "32",
    "answer" : "3" 
}]