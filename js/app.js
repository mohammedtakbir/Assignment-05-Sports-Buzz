let playerArray = [];
function displayPlayer(players){
    const displaySelectedPlayer = document.getElementById('selected-player');
    displaySelectedPlayer.innerText = '';
    let count = 0;
    for(const player of players){
        count++;
        // * Validation
        if(count > 5){
            return;
        }
        const name = player.playerName;
        const ul = document.createElement('ul');
        ul.innerHTML = `
        <li class="mb-4">
            <span class="text-gray-400 mr-5 font-bold text-2xl">${count}.</span>
            <span class="text-white font-normal text-xl">${name}</span>
        </li>
        `;
        displaySelectedPlayer.appendChild(ul);
    }
}

function addToSelect(clickBtn){
    const playerName = clickBtn.parentElement.parentElement.children[1].children[0].innerText;
    const playerObject = {
        playerName: playerName
    }
    // * Validation
    if(playerArray.length < 5){
        playerArray.push(playerObject);
        // * For disable selected button
        if(clickBtn.disabled = true){
            clickBtn.parentElement.parentElement.children[1].children[2].style.backgroundColor = 'gray';
        }
    }
    else{
        alert('You Already Select Five Players');
        return;
    }
    displayPlayer(playerArray);
}

// * Calculate player Expenses
document.getElementById('calculate-btn').addEventListener('click', function(){
    const selectedPlayer = playerArray.length;
    const perPlayerBudget = getInputById('player-budget');
    // * validation
    if((isNaN(perPlayerBudget)) || (perPlayerBudget < 0)){
        alert('Please Enter Valid Number');
        return;
    }
    else if(selectedPlayer === 0){
        alert('Please Select Player');
        return;
    }
    const totalPlayerExpense = selectedPlayer * perPlayerBudget;
    setTextElementById('player-expense', totalPlayerExpense);
})

// * total calculation
document.getElementById('total-calculate-btn').addEventListener('click', function(){
    const playerExpenses = getTextElementById('player-expense');
    const managerExpenses = getInputById('manager-expense');
    const coachExpenses = getInputById('coach-expense');
    // * validation
    if(((isNaN(managerExpenses)) || (managerExpenses < 0)) || ((isNaN(coachExpenses)) || (coachExpenses < 0))){
        alert('Please Enter Valid Number');
        return;
    }
    else if(playerExpenses === 0){
        alert('You Have to Calculate Player Expenses First');
        return;
    }
    const finalTotal = playerExpenses + managerExpenses + coachExpenses;
    setTextElementById('total-expense', finalTotal)
})

