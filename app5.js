$("#Start").on("click".function() {
    $(#Start).remove();
    for(var i = 0; i<questions.length; i++) {
    $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
    for (var j = 0; j < questions[i].answers.length; j++;) {
        $("#subwrapper").append("<input type ="radio" name="question - " " + i + " value="" " + questions[i].answers[j] + "" > "+questions[i].amswers[j]");
    }
}
game.Start();
})
$(document).on("click", #end, function(){
    game.done;
})

var questions = [{
    question: "How many dogs does it take to catch a cat?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "1",
}, {
    question: "If your airboat breaks down, how many snakes should you kill?",
    answers: ["1", "2", "3", "as many as you can"],
    correctAnswer: "as many as you can",
}, {
    question: "If you run into a hillbilly, what is the average number of teeth they have?",
    answers: ["0", "1", "3", "10"],
    correctAnswer: "3",
}, {
    question: "What proof is moonshine?",
    answers: ["90 Proof", "100 Proof", "150 Proof", "200 Proof"],
    correctAnswer: "200 Proof",
}, {
    question: "Whats the IQ of the average Trump Supporter?",
    answers: ["40", "80", "120", "135"],
    correctAnswer: "80",
}, {
    question: "When is deer hunting season?",
    answers: ["January", "March", "July", "November"],
    correctAnswer: "November",
}, {
    question: "How many trailors does the average redneck live in within a lifetime?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "3",
}, {
    question: "What is the greatest show ever?",
    answers: ["Duck Dynasty", "Swamp People", "Ice Road Truckers", "Honey Boo-Boo"],
    correctAnswer: "Duck Dynasty",
}, {
    question: "What is the most common ring tone in Alabama?",
    answers: ["Sweet Home Alabama", "Rocky Top", "Freebird", "Simple Man"],
    correctAnswer: "Sweet Home Alabama",
}, {
    question: "Why can't Tennessee Beat UF?",
    answers: ["No one wants to go to Tennessee", "Rocky Top is Fucking Annoying", "They suck", "All the Above"],
    correctAnswer: "All the Above",
},
}];

var game = {
    correct = 0,
    incorrect = 0,
    counter = 120,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);

        if (game.counter <= 0) {
            console.log("Time is up");
            game.done();
        }
    },
    Start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend("<h2> Time Remaining: <span id= "counter"" > 120</span > Seconds </h2 > ")
        $(#Start).remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++;) {
                $("#subwrapper").append("<input type ="radio" name="question - " " + i + " value="" " + questions[i].answers[j] + "" > "+questions[i].amswers[j]");
            }
        }
        $("#subwrapper").append(<button id="end">Done</button>);
    },
    done: functions(){
        $.each($("input[name= "question - 0]checked"))
            if ($(this).val() == questions[0].correctAnswer) {
    game.correct++;
} else {
    game.incorrect++;
};
done: functions(){
    $.each($("input[name= "question - 1]checked"))
                if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
    } else {
        game.incorrect++;
    };
    done: functions(){
        $.each($("input[name= "question - 2]checked"))
                    if ($(this).val() == questions[2].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        };
        done: functions(){
            $.each($("input[name= "question - 3]checked"))
                        if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            };
            done: functions(){
                $.each($("input[name= "question - 4]checked"))
                            if ($(this).val() == questions[4].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                };
                done: functions(){
                    $.each($("input[name= "question - 5]checked"))
                                if ($(this).val() == questions[5].correctAnswer) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    };
                    done: functions(){
                        $.each($("input[name= "question - 6]checked"))
                                    if ($(this).val() == questions[6].correctAnswer) {
                            game.correct++;
                        } else {
                            game.incorrect++;
                        };
                        done: functions(){
                            $.each($("input[name= "question - 7]checked"))
                                        if ($(this).val() == questions[7].correctAnswer) {
                                game.correct++;
                            } else {
                                game.incorrect++;
                            };
                            done: functions(){
                                $.each($("input[name= "question - 8]checked"))
                                            if ($(this).val() == questions[8].correctAnswer) {
                                    game.correct++;
                                } else {
                                    game.incorrect++;
                                };
                                done: functions(){
                                    $.each($("input[name= "question - 9]checked"))
                                                if ($(this).val() == questions[9].correctAnswer) {
                                        game.correct++;
                                    } else {
                                        game.incorrect++;
                                    };
                                    this.result();
                                },
                                result: function(){
                                    clearInterval(timer);
                                    $('#subwrapper h2').remove();
                                    $('#subwrapper').html("<h2>All Done</h2>");
                                    $('#subwrapper').append("<h3>Correct Answers: " + this.correct "</h3>");
                                    $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect "</h3>");
                                    $('#subwrapper').append('<h3> Unanswered:' + (questions.length(this.incorrect+this.correct))+"</h3>");
                                }
                            }