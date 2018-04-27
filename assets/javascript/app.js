$('#start').click(function(){
    $('#start-card').remove();
    game.loadQuestion();
});

// $(".options").click(function(){
//     console.log($(this.attr(id)));
//     game.clicked();
// });

var questions =[{
    question : "How old is Quavo from the Migos?",
    option1 : "22",
    option2 : "26",
    option3 : "29",
    option4 : "32",
    answer : "option2",
    image: "assets/images/171106-Quavo-DX-Mike-Lavin-800x600.jpg",
    gif: "assets/images/giphy.gif"

}, {
    question : "How old is Cardi B?",
    option1 : "19",
    option2 : "21",
    option3 : "23",
    option4 : "25",
    answer : "4",
    image: "assets/images/cardi-b-grammys-2018-01.jpg",
    gif: "assets/images/giphy (1).gif"
}, {
    question : "How old is Future?",
    option1 : "31",
    option2 : "34",
    option3 : "37",
    option4 : "41",
    answer : "2",
    image: "assets/images/151208_Future_608.jpg",
    gif: "assets/images/giphy (2).gif"
}, {
    question : "How old is Nicki Minaj?",
    option1 : "29",
    option2 : "31",
    option3 : "35",
    option4 : "38",
    answer : "3",
    image: "assets/images/nicki-minaj-pregnancy-rumors__oPt.jpg",
    gif: "assets/images/giphy (3).gif"
}, {
    question : "How old is A$AP Rocky?",
    option1 : "23",
    option2 : "25",
    option3 : "27",
    option4 : "39",
    answer : "4",
    image: "assets/images/asap-rocky.jpg",
    gif: "assets/images/giphy (4).gif"
}, {
    question : "How old is Lil Wayne?",
    option1 : "35",
    option2 : "38",
    option3 : "41",
    option4 : "44",
    answer : "1",
    image: "assets/images/lilWayne1.jpeg",
    gif: "assets/images/giphy (5).gif" 
}, {
    question : "How old is Drake?",
    option1 : "29",
    option2 : "31",
    option3 : "33",
    option4 : "35",
    answer : "2",
    image: "assets/images/drake-beard-1448454174-view-0.png",
    gif: "assets/images/giphy (6).gif" 
}, {
    question : "How old is Kim Kardashian?",
    option1 : "28",
    option2 : "33",
    option3 : "37",
    option4 : "39",
    answer : "3",
    image: "assets/images/kim-k-0fc05ec1-6159-422f-9626-2423767fd542.jpg",
    gif: "assets/images/giphy (7).gif" 
}, {
    question : "How old is Kanye?",
    option1 : "31",
    option2 : "35",
    option3 : "38",
    option4 : "40",
    answer : "4",
    image: "assets/images/070816-chicago-kanye-west.jpg",
    gif: "assets/images/giphy (8).gif" 
}, {
    question : "How old is Jay Z?",
    option1 : "45",
    option2 : "48",
    option3 : "51",
    option4 : "444",
    answer : "2",
    image: "assets/images/jayz.jpeg",
    gif: "assets/images/giphy (9).gif" 
}, {
    question : "How old is Kendrick Lamar?",
    option1 : "24",
    option2 : "27",
    option3 : "30",
    option4 : "33",
    answer : "3",
    image: "assets/images/kendrick.jpeg",
    gif: "assets/images/giphy (10).gif" 
}, {
    question : "How old is Beyonce?",
    option1 : "33",
    option2 : "36",
    option3 : "39",
    option4 : "41",
    answer : "2",
    image: "assets/images/beyonce.jpg",
    gif: "assets/images/giphy (11).gif" 
}, {
    question : "How old is Rihanna?",
    option1 : "26",
    option2 : "28",
    option3 : "30",
    option4 : "32",
    answer : "3",
    image: "assets/images/rihanna.jpg",
    gif: "assets/images/giphy (12).gif" 
}];

var game = {
    questions: questions,
    currentQuestion: 0,
    timer: 10,
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
    // setting timer interval for 1000mili sec/ 1 sec and printing question to page
    loadQuestion: function(){
        timer = setInterval(game.countdown,1000);
        $('.question').html(questions[game.currentQuestion].question);
        $('#opt-1').html(questions[game.currentQuestion].option1);
        $('#opt-2').html(questions[game.currentQuestion].option2);
        $('#opt-3').html(questions[game.currentQuestion].option3);
        $('#opt-4').html(questions[game.currentQuestion].option4);
        $('#celeb-pic').attr("src", questions[game.currentQuestion].image)

    },
    nextQuestion: function(){

    },
    timeUp: function(){

    },
    results: function(){

    },
    clicked: function(){
        clearInterval(timer);
        

    },
    answeredCorrectly: function(){

    },
    answeredIncorrectly: function(){

    },
    reset: function(){

    },

}
