userScore = 0;
    computerScore = 0;
    function computerPlay() {
        num = Math.floor(Math.random() * 3);
        if (num == 0) {
            return 'Paper';
        } else if (num == 1) {
            return 'Rock';
        } else {
            return 'Scissors';
        }
    }

    //write a function with two parameters that returns the winner that makes sense
    function playRound(playerSelection, computerSelection) {
        if (playerSelection == 'Paper') {
            if (computerSelection == 'Rock') {
                userScore += 1;
                return 'You Win! ' + playerSelection + ' Beats '  + computerSelection + '.';
            } else if  (computerSelection == 'Scissors') {
                computerScore += 1;
                return 'You Lose! ' + playerSelection + ' Loses to '  + computerSelection + '.';
            } else {
                return "It's a tie! You both picked " + playerSelection + '.'; 
            }
        }
        if (playerSelection == 'Rock') {
            if (computerSelection == 'Scissors') {
                userScore += 1;
                return 'You Win! ' + playerSelection + ' Beats '  + computerSelection + '.';
            } else if (computerSelection == 'Paper') {
                computerScore += 1;
                return 'You Lose! ' + playerSelection + ' Loses to '  + computerSelection + '.';
            } else {
                return "It's a tie! You both picked " + playerSelection + '.'; 
            }
        }
        if (playerSelection == 'Scissors') {
            if (computerSelection == 'Paper') {
                userScore += 1;
                return 'You Win! ' + playerSelection + ' Beats '  + computerSelection + '.';
            } else if (computerSelection == 'Rock') {
                computerScore += 1;
                return 'You Lose! ' + playerSelection + ' Loses to '  + computerSelection + '.';
            } else {
                return "It's a tie! You both picked " + playerSelection + '.'; 
            }    
        }
    }
    const result = document.querySelector('#results');

    const results = document.createElement('div');
    results.setAttribute('id', 'result');

    const compScore = document.createElement('p');
    const usScore = document.createElement('p');
    compScore.setAttribute('id', 'score');
    usScore.setAttribute('id', 'score');

    const buttons = document.querySelectorAll('button');

    const winner = document.createElement('h2');
    winner.setAttribute('id', 'winner');

    buttons.forEach((button) => {
            button.addEventListener('click', () => {
                console.log(button.id)
                    if (button.id == '1') {
                        results.textContent = playRound('Rock', computerPlay());
                        result.appendChild(results);
                    } else if (button.id == '2') {
                        results.textContent = playRound('Paper', computerPlay());
                        result.appendChild(results);
                    } else 
                        results.textContent = playRound('Scissors', computerPlay());
                        result.appendChild(results);
                    compScore.textContent = 'Computer: ' + computerScore;
                    usScore.textContent = 'User: ' + userScore;
                    result.appendChild(compScore)
                    result.appendChild(usScore)
                    if (computerScore == 5) {
                        winner.textContent = 'The Computer is victorious!'
                    } else if (userScore == 5) {
                        winner.textContent = 'Congratulations! You beat the computer!'
                    }
                    result.appendChild(winner);
                });
    });