let playerArray = []

function displayPlayer(players){
    const displaySelectedPlayer = document.getElementById('selected-player');
    displaySelectedPlayer.innerText = '';
    let count = 0;
    for(const player of players){
        count++;
        // ! validation 1
        if(count > 5){
            // alert('you have already selected five players')
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
        // console.log(ul.childNodes)
    }
}

function addToSelect(clickBtn){
    const playerName = clickBtn.parentElement.parentElement.children[1].children[0].innerText;
    const playerObject = {
        playerName: playerName
    }
    if(playerArray.length < 5){
        playerArray.push(playerObject);
        // ! validation
        if(clickBtn.disabled = true){
            clickBtn.parentElement.parentElement.children[1].children[2].style.backgroundColor = 'gray';
        }
    }
    else{
        alert("You've Already Choose Five Players");
    }
    displayPlayer(playerArray);
}

// ? calculation per player
document.getElementById('calculate-btn').addEventListener('click', function(){
    const selectedPlayer = playerArray.length;
    const perPlayerBudget = getInputById('player-budget');
    // ! validation
    if(isNaN(perPlayerBudget)){
        alert('Please Enter Number');
        return;
    }
    else if(perPlayerBudget < 0){
        alert('Please Enter Valid Number');
        return;
    }
    const totalPlayerExpense = selectedPlayer * perPlayerBudget;

    const previousExpense = document.getElementById('player-expense');
    previousExpense.innerText = totalPlayerExpense;
})

// ? total calculation
document.getElementById('total-calculate-btn').addEventListener('click', function(){
    const playerExpenses = getTextElementById('player-expense');
    const managerExpenses = getInputById('manager-expense');
    const coachExpenses = getInputById('coach-expense');
    // ! validation
    if((isNaN(managerExpenses)) || (isNaN(coachExpenses))){
        alert('Please Enter Number');
        return;
    }
    else if((managerExpenses < 0) || (coachExpenses < 0)){
        alert('Please Enter Valid Number');
        return;
    }
    else if(playerExpenses < 0){
        alert('You Have to Calculate Player Expenses First.');
        return
    }
    const finalTotal = playerExpenses + managerExpenses + coachExpenses;
    const totalExpense = document.getElementById('total-expense');

    totalExpense.innerText = finalTotal;
})

