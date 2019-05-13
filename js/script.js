// hide and show the game section
$('.cont-2-3-1').click(function () {
    $("#btn-1").hide();
    $("#hide").show();
});
//Business logic
var playDice = true;
var activePlayer = 0;

//business logic
class Player {
    constructor(id, domObject) {
        //this.roll = 0;
        this.tempscore = 0;
        this.finalscore = 0;
        this.id = id;
        this.isMyTurn = false;
        this.domObject = domObject;
    }
    rollDice() {
        let diceRolled = Math.floor(Math.random() * 6) + 1;
        console.log(diceRolled);
        this.domObject.rolledNumber.text(diceRolled);
        return diceRolled
    };
    oneIsRolled(rolledDiceNumber) {
        return rolledDiceNumber > 1 ? this.updateTempScore(rolledDiceNumber) : true;
    };
    updateTempScore(score) {
        this.tempscore += score;
        this.domObject.cumulativeDices.text(this.tempscore);
    };
    onHold() {
        this.finalscore += this.tempscore;
        //check if he has won
        this.domObject.turnScore.text(this.finalscore);
        return this.haveIWon();
    };
    haveIWon() {
        return this.finalscore >= 100 ? true : false;
    };
}
var domObjectsUser1 = {
    cumulativeDices: $("#roll-1"),
    rolledNumber: $("#rol-dice-0"),
    turnScore: $("#turnScore")
};
var domObjectsUser2 = {
    cumulativeDices: $("#roll-2"),
    rolledNumber: $("#rol-dice-2"),
    turnScore: $("#turnScore2")
}
var player1 = new Player(1, domObjectsUser1);
var player2 = new Player(2, domObjectsUser2)
//rool the dice 


//user logic 
$(document).ready(function () {
    let activePlayer = player1;
    var rollDice = function () {
        activePlayer.roll = Math.floor(Math.random() * 6) + 1;
        console.log(player1.roll);
        return player1.roll;
    }
    // when a player gets value 1
    var oneIsRolled = function () {
        if (playDice) {
            if (player1.roll !== 1) {
                // sum all the random number;
                player1.tempscore += player1.roll;
                document.getElementById('rol-dice-0').innerHTML = player1.roll;
                //   document.querySelector('roll-1' + activePlayer).textContent = player1.tempscore;
                $("#roll-1").text(player1.tempscore);
            } else if (player1.tempscore == 1) {
            }
        }
    }
    var isonHold = function () {
        if (playDice) {
            player1.tempscore += player1.finalscore;
            $('#rol-dice-1').text(player1.tempscore);
            document.querySelector("#roll-1").textContent = '0';
            document.querySelector('#rol-dice-0').textContent = '0';
            document.querySelector("#roll-1").classList.add('classHold');
            if (player1.tempscore == 1) {

                document.querySelector(".player-0-panel").classList.toggle('active');
                document.querySelector(".player-1-panel").classList.toggle('active');

            }
        }

    }
    var newGame = function () {
    }
    $('#btn-fn-1').click(function () {
        //  rollDice();
        //  oneIsRolled();
        //check whether value rolled is one
        if (activePlayer.oneIsRolled(activePlayer.rollDice())) {
            //switch players when it is one.
            activePlayer.isMyTurn = false;
            activePlayer = player1.id === activePlayer.id ? player2 : player1;
            activePlayer.isMyTurn = true;
            $(".player").toggleClass("hide");
            console.log("currentPlayer");
            console.log(activePlayer);
        }
    });
    $('#btn-fn-2').click(function () {
        if (activePlayer.onHold()) {
            alert("Player" + activePlayer.id + " has won");
        } else {
            //here if active player hasnt won.
            activePlayer.isMyTurn = false;
            activePlayer = player1.id === activePlayer.id ? player2 : player1;
            activePlayer.isMyTurn = true;
            $(".player").toggleClass("hide");
            console.log("currentPlayer");
            console.log(activePlayer);
        }
    });
    $('#new-game').click(function () {
        startNewGame();
    });
});