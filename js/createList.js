const playerListArray = [];

function display(player){
    
    const olBody = document.getElementById('player-list');
    olBody.innerHTML = "";
    for(let i = 0; i < player.length; i++){
        // console.log(playerListArray[i]);
        const name = playerListArray[i].playerName;
        console.log(name);
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