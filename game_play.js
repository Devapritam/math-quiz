player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

player1 = document.getElementById("player1_name");
player2 = document.getElementById("player2_name");
player1_scoreDiv = document.getElementById("player1_score");
player2_scoreDiv = document.getElementById("player2_score");
player_quest = document.getElementById("player_question");
player_ans = document.getElementById("player_answer");

player1.innerHTML = player1_name + ":";
player2.innerHTML = player2_name + ":";
player1_scoreDiv.innerHTML = player1_score;
player2_scoreDiv.innerHTML = player2_score;
player_quest.innerHTML = "Question Turn - " + player1_name;
player_ans.innerHTML = "Answer Turn - " + player2_name;

function send() {
    getNum1 = document.getElementById("number_1").value;
    getNum2 = document.getElementById("number_2").value;
    question = getNum1 + "X" + getNum2;
    actual_answer = getNum1 * getNum2;

    output_div = document.getElementById("output");
    question_div = "<h4 id='word_display'> Q. " + question + "</h4>";
    input_box = "<br><h5 id='answer_title'>Answer:</h5> <input type='number' class='form-control' id='input_checkbox' placeholder='Enter your answer' style='font-family: 'Poppins', sans-serif;'>";
    check_button = "<br><button class='btn btn-info' onclick='check()' style='outline: none;'>Check</button>";

    output_div.innerHTML = question_div + input_box + check_button;
    document.getElementById('number_1').value = "";
    document.getElementById('number_2').value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check() {
    answer = document.getElementById("input_checkbox").value;

    if(answer == actual_answer) {
        if(answer_turn == "player_1") {
            player1_score = player1_score + 1;
            player1_scoreDiv.innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            player2_scoreDiv.innerHTML = player2_score;
        }
    }
    if(question_turn == "player_1"){
        question_turn = "player_2";
        player_quest.innerHTML = "Question Turn - " + player2_name;
    }
    else {
        question_turn = "player_1";
        player_quest.innerHTML = "Question Turn - " + player1_name;
    }
    if(answer_turn == "player_1") {
        answer_turn = "player_2";
        player_ans.innerHTML = "Answer Turn - " + player2_name;
    }
    else {
        answer_turn = "player_1";
        player_ans.innerHTML = "Answer Turn - " + player1_name;
    }

    output_div.innerHTML = "";
}