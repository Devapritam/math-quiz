function addUser() {
    player1 = document.getElementById("user1_input").value;
    player2 = document.getElementById("user2_input").value;

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    window.location = "game_play.html";
    document.getElementById("user1_input").value = "";
    document.getElementById("user2_input").value = "";
}