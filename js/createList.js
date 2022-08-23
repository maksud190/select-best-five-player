const playerListArray = [];

function display(player){
    
    const olBody = document.getElementById('player-list');
    olBody.innerHTML = "";
    for(let i = 0; i < player.length; i++){
        

        const name = playerListArray[i].playerName;

        
        const li = document.createElement("li");
        if(i === 5){
            alert("You cannot add player more then Five");
            return false;
        }

        li.innerHTML = `
        ${name}
        `
        olBody.appendChild(li);
        
    }
}

function addPlayerList(element){
    const playerOne = element.parentNode.children[0].innerText;

    const playerObj = {

        playerName: playerOne
    }

    playerListArray.push(playerObj);
    display(playerListArray);

    element.disabled = true;
    element.style.backgroundColor = 'white';
    
}

document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerQuantity = playerListArray.length;
    const pricePerPlayerString = document.getElementById('price-per-player').value;
    const pricePerPlayer = parseInt(pricePerPlayerString);
    const calculate = playerQuantity * pricePerPlayer;

    document.getElementById('player-expenses').innerText = calculate;
    return calculate;
})

document.getElementById('btn-total').addEventListener('click', function(){

    const managerCostString = document.getElementById('manager-cost').value;
    const managerCost = parseInt(managerCostString);
    const coachCostString = document.getElementById('coach-cost').value;
    const coachCost = parseInt(coachCostString);
    const coachManagerTotal = managerCost + coachCost;
    const calculateString = document.getElementById('player-expenses').innerText;
    const calculate = parseInt(calculateString);
    const totalTeamCost = coachManagerTotal + calculate;
    document.getElementById('total-team-cost').innerText = totalTeamCost;

})