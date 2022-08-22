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