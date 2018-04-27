

var questions =[{
    question : "How old is Quavo from the Migos?",
    option1 : "22",
    option2 : "26",
    option3 : "29",
    option4 : "32",
    answer : "2",
    image: "../images/171106-Quavo-DX-Mike-Lavin-800x600.jpg",
    gif: "../images/giphy.gif"

}, {
    question : "How old is Cardi B?",
    option1 : "19",
    option2 : "21",
    option3 : "23",
    option4 : "25",
    answer : "4",
    image: "../images/cardi-b-grammys-2018-01.jpg",
    gif: "../images/giphy (1).gif"
}, {
    question : "How old is Future?",
    option1 : "31",
    option2 : "34",
    option3 : "37",
    option4 : "41",
    answer : "2",
    image: "../images/151208_Future_608.jpg",
    gif: "../images/giphy (2).gif"
}, {
    question : "How old is Nicki Minaj?",
    option1 : "29",
    option2 : "31",
    option3 : "35",
    option4 : "38",
    answer : "3",
    image: "../images/nicki-minaj-pregnancy-rumors__oPt.jpg",
    gif: "../images/giphy (3).gif"
}, {
    question : "How old is A$AP Rocky?",
    option1 : "23",
    option2 : "25",
    option3 : "27",
    option4 : "39",
    answer : "4",
    image: "../images/asap-rocky.jpg",
    gif: "../images/giphy (4).gif"
}, {
    question : "How old is Lil Wayne?",
    option1 : "35",
    option2 : "38",
    option3 : "41",
    option4 : "44",
    answer : "1",
    image: "../images/lilWayne1.jpeg",
    gif: "../images/giphy (5).gif" 
}, {
    question : "How old is Drake?",
    option1 : "29",
    option2 : "31",
    option3 : "33",
    option4 : "35",
    answer : "2",
    image: "../images/drake-beard-1448454174-view-0.png",
    gif: "../images/giphy (6).gif" 
}, {
    question : "How old is Kim Kardashian?",
    option1 : "28",
    option2 : "33",
    option3 : "37",
    option4 : "39",
    answer : "3",
    image: "../images/kim-k-0fc05ec1-6159-422f-9626-2423767fd542.jpg",
    gif: "../images/giphy (7).gif" 
}, {
    question : "How old is Kanye?",
    option1 : "31",
    option2 : "35",
    option3 : "38",
    option4 : "40",
    answer : "4",
    image: "../images/070816-chicago-kanye-west.jpg",
    gif: "../images/giphy (8).gif" 
}, {
    question : "How old is Jay Z?",
    option1 : "45",
    option2 : "48",
    option3 : "51",
    option4 : "444",
    answer : "2",
    image: "../images/jayz.jpeg",
    gif: "../images/giphy (9).gif" 
}, {
    question : "How old is Kendrick Lamar?",
    option1 : "24",
    option2 : "27",
    option3 : "30",
    option4 : "33",
    answer : "3",
    image: "../images/kendrick.jpeg",
    gif: "../images/giphy (10).gif" 
}, {
    question : "How old is Beyonce?",
    option1 : "33",
    option2 : "36",
    option3 : "39",
    option4 : "41",
    answer : "2",
    image: "../images/beyonce.jpg",
    gif: "../images/giphy (11).gif" 
}, {
    question : "How old is Rihanna?",
    option1 : "26",
    option2 : "28",
    option3 : "30",
    option4 : "32",
    answer : "3",
    image: "../images/rihanna.jpg",
    gif: "../images/giphy (12).gif" 
}];

// var currentQuestion = 0;
// var correct = 0;
// var incorrect = 0;
// var remainingQuest = 13;


// var container = document.getElementsByClassName('question')
// var questionEl = document.getElementsByClassName('question');
// var opt1 = document.getElementById('opt-1');
// var opt2 = document.getElementById('opt-2');
// var opt3 = document.getElementById('opt-3');
// var opt3 = document.getElementById('opt-4');

var game = {
    questions: questions,
    currentQuestion: 0,
    timer: 5,
    correct: 0,
    incorrect: 0,
    // timer method
    countdown: function(){
        game.timer--;
        $("#timer").html(game.timer);
        if(game.timer <= 0){
            console.log("TIME UP!");
            game.timeUp();
        }
    },
    
    loadQuestion: function(){
        timer = setInterval(game.countdown,1000);
        $('.question').html(questions[game.currentQuestion].question)

    },
    nextQuestion: function(){

    },
    timeUp: function(){

    },
    results: function(){

    },
    clicked: function(){

    },
    answeredCorrectly: function(){

    },
    answeredIncorrectly: function(){

    },
    reset: function(){

    },

}
