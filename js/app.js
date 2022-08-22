let playerArray = []

function displayPlayer(players){
    const displaySelectedPlayer = document.getElementById('selected-player');
    displaySelectedPlayer.innerText = '';
    let count = 0;
    for(const player of players){
        count++;
        // ! validation 1
        if(count > 5){
            return;
        }
        const name = player.playerName;

        const ul = document.createElement('ul');
        ul.innerHTML = `
        <li class="mb-6">
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
    playerArray.push(playerObject);

    displayPlayer(playerArray);
}
function getTextElementById(elementId){
    const depositElement = document.getElementById(elementId);
    const depositElementSring = depositElement.innerText;
    const previousDepositAmount = parseFloat(depositElementSring);
    return previousDepositAmount;
}

// ? calculation per player
document.getElementById('calculate-btn').addEventListener('click', function(){
    const selectedPlayer = playerArray.length;
    const perPlayerBudget = getInputById('player-budget');
    const totalPlayerExpense = selectedPlayer * perPlayerBudget;

    // ! alternative
    /* const previousExpense = getTextElementById('player-expense');
    const totalExpenses = previousExpense + expense;
    setTextElementById('player-expense', totalExpenses); */

    const previousExpense = document.getElementById('player-expense');
    previousExpense.innerText = totalPlayerExpense;
})

// ? total calculation
document.getElementById('total-calculate-btn').addEventListener('click', function(){
    const playerExpenses = getTextElementById('player-expense');
    const managerExpenses = getInputById('manager-expense');
    const coachExpenses = getInputById('coach-expense');
    
    const finalTotal = playerExpenses + managerExpenses + coachExpenses;
    const totalExpense = document.getElementById('total-expense');

    totalExpense.innerText = finalTotal;
})

