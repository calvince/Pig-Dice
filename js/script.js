/*****************************
 ***INSTRUCTIONS
 *****************************/
$('.cont-2-3-1').click(function () {
    $("#btn-1").hide();
    $("#hide").show();
});
//Business logic
var player1 = "";
var player2 = "";
document.querySelector('.btn-2' + activePlayer).textContent = rollDice;
class Player {
    constructor(turn) {
        this.roll = 0;
        this.tempscore = 0;
        this.finalscore = 0;
        this.turn = turn;
    }
    //rool the dice 
    rollDice() {
        return Math.floor(6 * Math.random()) + 1;
    }
    // when a player gets value 1
    isRollone() {
        if (this.roll === 1) {
            this.tempscore = 0;
            alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!");
            // this.changeturn();
        } else {
            this.tempscore += this.roll;
        }
    }
    // when button hold is pressed
    isOnhold() {
        this.totalscore += this.tempscore;
        this.tempscore = 0;
        // this.changeturn();
        alert(this.playerName + ", your turn is over, pass the mouse!");
    }
    //confirm the winner
    aWinnerCheck() {
        if (this.totalscore >= 100) {
            alert(this.playerName + " You are the winner!");
        }
    }
    aNewGame() {
        //debugger;
        this.roll = 0;
        this.tempscore = 0;
        this.totalscore = 0;
    }
}
var clearValues = function () {
    $(".player1").val("");
    $(".player2").val("");
}
//user logic 
$(document).ready(function () {
    $('.btn-roll').click(function () {
        rollDice();
    });
    $('.btn-hold').click(function () {
        rollDice();
    });
});