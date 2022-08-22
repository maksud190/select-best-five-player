const playerListArray = [];

function display(player){
    
    const olBody = document.getElementById('player-list');
    olBody.innerHTML = "";
    for(let i = 0; i < player.length; i++){
        // console.log(playerListArray[i]);
        const name = playerListArray[i].playerName;
        
        const li = document.createElement("li");

        li.innerHTML = `
        ${name}
        `
        olBody.appendChild(li);
    }
}

function addPlayerList(element){
    // console.log(element.parentNode.children);
    // console.log(element.parentNode.children[0]);
    // console.log(element.parentNode.children[1]);
    const playerOne = element.parentNode.children[0].innerText;

    const playerObj = {

        playerName: playerOne
    }

    playerListArray.push(playerObj);
    // console.log(playerListArray);

    // document.getElementById('player-list').innerText = playerOne;
    
    display(playerListArray);
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


// function playerCost(){
//     const playerQuantity = playerListArray.length;
//     const pricePerPlayer = document.getElementById('price-per-player');
//     const calculate = playerQuantity * pricePerPlayer;
// }