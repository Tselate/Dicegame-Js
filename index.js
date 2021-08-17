const turnDisplay = document.querySelector(".turnDisplay")
const player1ScoreBoard = document.querySelector(".player1scoredBoard")
const player2ScoreBoard = document.querySelector(".player2scoredBoard")
const player1Dice = document.querySelector(".player1Dice")
const player2Dice = document.querySelector(".player2Dice")
const diceGif = document.getElementById("diceImage")
const playMessage = document.getElementById("letsPlay")
const rollDiceBtn = document.querySelector(".rollDice")
const resetBtn = document.querySelector(".reset")
const diceImage = document.querySelector(".diceImage")
let mainImage = document.querySelector(".mainImage")


let player1Score = 0
let player2Score = 0
let player1Turn = true


function playerTurn () {
    let randomNum = Math.floor(Math.random() * 6) + 1
    if (player1Turn === true) {
        turnDisplay.innerHTML = "Player 1 Turn"
        player1Dice.textContent = randomNum
        player1Score += randomNum
        player1ScoreBoard.textContent = "Player 1 Score: " + player1Score
        player1Turn = false
    }else {
       turnDisplay.innerHTML = "Player 2 Turn"
       player2Dice.textContent = randomNum
       player2Score += randomNum
       player2ScoreBoard.textContent = "Player 2 score: " + player2Score
       player1Turn = true
    }
}


rollDiceBtn.addEventListener("click", function letsPlay() {
    playMessage.style.display = "none"
    diceGif.style.display = "block"
    playerTurn()

    if (player1Score >= 21) {
        turnDisplay.innerHTML = "🎉 Player 1 Wins 🎉"
        rollDiceBtn.style.display = "none"
        resetBtn.style.display = "inline-block"
    }

    if (player2Score >= 21) {
        turnDisplay.innerHTML = "🎉 Player 2 Wins 🎉"
        rollDiceBtn.style.display = "none"
        resetBtn.style.display = "inline-block"
    }
})

resetBtn.addEventListener("click", function resetGame (){
    window.location.reload()
})
