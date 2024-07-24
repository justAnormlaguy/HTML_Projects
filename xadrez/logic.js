
function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='all-img all-pown' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
            else {
                image.innerHTML = `${image.innerText} <img class='all-img' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()


function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {
        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(232 235 239)'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(125 135 150)'
        }
    })
}
coloring()


function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'blue') {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor == 'greenyellow' && i2.innerText.length !== 0) {


                    greenyellowText = i2.innerText

                    blueText = i1.innerText

                    blueColor = ((Array.from(blueText)).shift()).toString()
                    greenyellowColor = ((Array.from(greenyellowText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup

                    if (a % 2 == 0 && blueColor == greenyellowColor) {
                        i2.style.backgroundColor = 'rgb(232 235 239)'
                    }
                    if (a % 2 !== 0 && blueColor == greenyellowColor) {
                        i2.style.backgroundColor = 'rgb(125 135 150)'
                    }

                }
            })
        }
    })
}

//reset button
document.getElementById("reset-btn").addEventListener("click", function () {
    location.reload();
});


tog = 1

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', function () {
        coloring();
        if(tile.innerText.length !== 0) {
            if(tile.innerText[0] === turn) {
                tile.style.backgroundColor = pieceSelected;
                const pieceName = tile.innerText.slice(1);
                const position = tile.id;
                console.log(pieceName, position);
                const moves = hintMoves(pieceName, position);
                movePiece(moves, pieceName, position);
            }
        }
    });
}); 

function hintMoves(pieceName, position) {
    const moves = [];
    
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const row = parseInt(position[0]);
    const col = letters.indexOf(position[1]) + 1;
    console.log(row, col);
    console.log(pieceName);

    
    if(pieceName === "pawn") {
        
        let isFirstMove = false;
        if (row === 2 && turn === "W") {
            isFirstMove = true;
        }else if(row === 7 && turn === "B") {
            isFirstMove = true;
        }

       
        if(isFirstMove && turn === "W") {
            
            if(checkForPiece(`${row + 1}${letters[col - 1]}`, turn) === "noPiece"){
                moves.push([row + 1, col]);
            }
            if(checkForPiece(`${row + 2}${letters[col - 1]}`, turn) === "noPiece"){
                moves.push([row + 2, col]);
            }

            
            try {
                if(checkForPiece(`${row + 1}${letters[col - 2]}`, turn) === "pieceEnemy") {
                    moves.push([row + 1, col - 1]);
                }
            }catch(err) {
                console.log(err);
            }
            try {
                if(checkForPiece(`${row + 1}${letters[col]}`, turn) === "pieceEnemy") {
                    moves.push([row + 1, col + 1]);
                }
            }catch(err) {
                console.log(err);
            }
            
        }else if(turn === "W") {
            
            if(checkForPiece(`${row + 1}${letters[col - 1]}`, turn) === "noPiece"){
                moves.push([row + 1, col]);
            }

           
            try {
                if(checkForPiece(`${row + 1}${letters[col - 2]}`, turn) === "pieceEnemy") {
                    moves.push([row + 1, col - 1]);
                }
            }catch(err) {
                console.log(err);
            }
            try {
                if(checkForPiece(`${row + 1}${letters[col]}`, turn) === "pieceEnemy") {
                    moves.push([row + 1, col + 1]);
                }
            }catch(err) {
                console.log(err);
            }
        }
        if(isFirstMove && turn === "B") {
            
            if(checkForPiece(`${row - 1}${letters[col - 1]}`, turn) === "noPiece"){
                moves.push([row - 1, col]);
            }
            if(checkForPiece(`${row - 2}${letters[col - 1]}`, turn) === "noPiece"){
                moves.push([row - 2, col]);
            }

            
            try {
                if(checkForPiece(`${row - 1}${letters[col - 2]}`, turn) === "pieceEnemy") {
                    moves.push([row - 1, col - 1]);
                }
            }catch(err) {
                console.log(err);
            }
            try {
                if(checkForPiece(`${row - 1}${letters[col]}`, turn) === "pieceEnemy") {
                    moves.push([row - 1, col + 1]);
                }
            }catch(err) {
                console.log(err);
            }
        }else if(turn === "B") {
            
            if(checkForPiece(`${row - 1}${letters[col - 1]}`, turn) === "noPiece"){
                moves.push([row - 1, col]);
            }

            
            try {
                if(checkForPiece(`${row - 1}${letters[col - 2]}`, turn) === "pieceEnemy") {
                    moves.push([row - 1, col - 1]);
                }
            }catch(err) {
                console.log(err);
            }
            try {
                if(checkForPiece(`${row - 1}${letters[col]}`, turn) === "pieceEnemy") {
                    moves.push([row - 1, col + 1]);
                }
            }catch(err) {
                console.log(err);
            }
        }
    }

    //ROOK
    if(pieceName === "rook") {
        
        for(let i = row + 1; i <= 8; i++) {
            if(checkForPiece(`${i}${letters[col - 1]}`, turn) === "noPiece") {
                moves.push([i, col]);
            }else if(checkForPiece(`${i}${letters[col - 1]}`, turn) === "pieceEnemy") {
                moves.push([i, col]);
                break;
            }else {
                break;
            }
        }
        
        for(let i = row - 1; i >= 1; i--) {
            if(checkForPiece(`${i}${letters[col - 1]}`, turn) === "noPiece") {
                moves.push([i, col]);
            }else if(checkForPiece(`${i}${letters[col - 1]}`, turn) === "pieceEnemy") {
                moves.push([i, col]);
                break;
            }else {
                break;
            }
        }
        
        for(let i = col + 1; i <= 8; i++) {
            if(checkForPiece(`${row}${letters[i - 1]}`, turn) === "noPiece") {
                moves.push([row, i]);
            }else if(checkForPiece(`${row}${letters[i - 1]}`, turn) === "pieceEnemy") {
                moves.push([row, i]);
                break;
            }else {
                break;
            }
        }
        
        for(let i = col - 1; i >= 1; i--) {
            if(checkForPiece(`${row}${letters[i - 1]}`, turn) === "noPiece") {
                moves.push([row, i]);
            }else if(checkForPiece(`${row}${letters[i - 1]}`, turn) === "pieceEnemy") {
                moves.push([row, i]);
                break;
            }else {
                break;
            }
        }
        //castling
    }

    //KNIGHT
    if(pieceName === "knight") {
       
        try {
            if(checkForPiece(`${row + 2}${letters[col]}`, turn) !== "pieceTeam") {
                moves.push([row + 2, col + 1]);
            }
        }catch(err) {
            console.log(err);
        }
       
        try {
            if(checkForPiece(`${row + 2}${letters[col - 2]}`, turn) !== "pieceTeam") {
                moves.push([row + 2, col - 1]);
            }
        }catch(err) {
            console.log(err);
        }
        
        try {
            if(checkForPiece(`${row - 2}${letters[col]}`, turn) !== "pieceTeam") {
                moves.push([row - 2, col + 1]);
            }
        }catch(err) {
            console.log(err);
        }
       
        try {
            if(checkForPiece(`${row - 2}${letters[col - 2]}`, turn) !== "pieceTeam") {
                moves.push([row - 2, col - 1]);
            }
        }catch(err) {
            console.log(err);
        }
        
        try {
            if(checkForPiece(`${row + 1}${letters[col + 1]}`, turn) !== "pieceTeam") {
                moves.push([row + 1, col + 2]);
            }
        }catch(err) {
            console.log(err);
        }
        
        try {
            if(checkForPiece(`${row + 1}${letters[col - 3]}`, turn) !== "pieceTeam") {
                moves.push([row + 1, col - 2]);
            }
        }catch(err) {
            console.log(err);
        }
        
        try {
            if(checkForPiece(`${row - 1}${letters[col + 1]}`, turn) !== "pieceTeam") {
                moves.push([row - 1, col + 2]);
            }
        }catch(err) {
            console.log(err);
        }
        
        try {
            if(checkForPiece(`${row - 1}${letters[col - 3]}`, turn) !== "pieceTeam") {
                moves.push([row - 1, col - 2]);
            }
        }catch(err) {
            console.log(err);
        }
    }

    //BISHOP
    if(pieceName === "bishop") {
        
        for(let i = row + 1, j = col + 1; i <= 8 && j <= 8; i++, j++) {
            if(checkForPiece(`${i}${letters[j - 1]}`, turn) === "noPiece") {
                moves.push([i, j]);
            }else if(checkForPiece(`${i}${letters[j - 1]}`, turn) === "pieceEnemy") {
                moves.push([i, j]);
                break;
            }else {
                break;
            }
        }
       
        for(let i = row + 1, j = col - 1; i <= 8 && j >= 1; i++, j--) {
            if(checkForPiece(`${i}${letters[j - 1]}`, turn) === "noPiece") {
                moves.push([i, j]);
            }else if(checkForPiece(`${i}${letters[j - 1]}`, turn) === "pieceEnemy") {
                moves.push([i, j]);
                break;
            }else {
                break;
            }
        }
       
        for(let i = row - 1, j = col + 1; i >= 1 && j <= 8; i--, j++) {
            if(checkForPiece(`${i}${letters[j - 1]}`, turn) === "noPiece") {
                moves.push([i, j]);
            }else if(checkForPiece(`${i}${letters[j - 1]}`, turn) === "pieceEnemy") {
                moves.push([i, j]);
                break;
            }else {
                break;
            }
        }
        
        for(let i = row - 1, j = col - 1; i >= 1 && j >= 1; i--, j--) {
            if(checkForPiece(`${i}${letters[j - 1]}`, turn) === "noPiece") {
                moves.push([i, j]);
            }else if(checkForPiece(`${i}${letters[j - 1]}`, turn) === "pieceEnemy") {
                moves.push([i, j]);
                break;
            }else {
                break;
            }
        }
    }

   
    if(pieceName === "queen") {
        
        for(let i = row + 1, j = col + 1; i <= 8 && j <= 8; i++, j++) {
            if(checkForPiece(`${i}${letters[j - 1]}`, turn) === "noPiece") {
                moves.push([i, j]);
            }else if(checkForPiece(`${i}${letters[j - 1]}`, turn) === "pieceEnemy") {
                moves.push([i, j]);
                break;
            }else {
                break;
            }
        }
        
        for(let i = row + 1, j = col - 1; i <= 8 && j >= 1; i++, j--) {
            if(checkForPiece(`${i}${letters[j - 1]}`, turn) === "noPiece") {
                moves.push([i, j]);
            }else if(checkForPiece(`${i}${letters[j - 1]}`, turn) === "pieceEnemy") {
                moves.push([i, j]);
                break;
            }else {
                break;
            }
        }
        
        for(let i = row - 1, j = col + 1; i >= 1 && j <= 8; i--, j++) {
            if(checkForPiece(`${i}${letters[j - 1]}`, turn) === "noPiece") {
                moves.push([i, j]);
            }else if(checkForPiece(`${i}${letters[j - 1]}`, turn) === "pieceEnemy") {
                moves.push([i, j]);
                break;
            }else {
                break;
            }
        }
       
        for(let i = row - 1, j = col - 1; i >= 1 && j >= 1; i--, j--) {
            if(checkForPiece(`${i}${letters[j - 1]}`, turn) === "noPiece") {
                moves.push([i, j]);
            }else if(checkForPiece(`${i}${letters[j - 1]}`, turn) === "pieceEnemy") {
                moves.push([i, j]);
                break;
            }else {
                break;
            }
        }
        
        for(let i = row + 1; i <= 8; i++) {
            if(checkForPiece(`${i}${letters[col - 1]}`, turn) === "noPiece") {
                moves.push([i, col]);
            }else if(checkForPiece(`${i}${letters[col - 1]}`, turn) === "pieceEnemy") {
                moves.push([i, col]);
                break;
            }else {
                break;
            }
        }
        
        for(let i = row - 1; i >= 1; i--) {
            if(checkForPiece(`${i}${letters[col - 1]}`, turn) === "noPiece") {
                moves.push([i, col]);
            }else if(checkForPiece(`${i}${letters[col - 1]}`, turn) === "pieceEnemy") {
                moves.push([i, col]);
                break;
            }else {
                break;
            }
        }
        
        for(let i = col + 1; i <= 8; i++) {
            if(checkForPiece(`${row}${letters[i - 1]}`, turn) === "noPiece") {
                moves.push([row, i]);
            }else if(checkForPiece(`${row}${letters[i - 1]}`, turn) === "pieceEnemy") {
                moves.push([row, i]);
                break;
            }else {
                break;
            }
        }
        
        for(let i = col - 1; i >= 1; i--) {
            if(checkForPiece(`${row}${letters[i - 1]}`, turn) === "noPiece") {
                moves.push([row, i]);
            }else if(checkForPiece(`${row}${letters[i - 1]}`, turn) === "pieceEnemy") {
                moves.push([row, i]);
                break;
            }else {
                break;
            }
        }
    }


    if(pieceName === "king") {
        
        if(row + 1 <= 8 && col + 1 <= 8) {
            if(checkForPiece(`${row + 1}${letters[col]}`, turn) !== "pieceTeam") {
                moves.push([row + 1, col + 1]);
            }
        }

        if(row + 1 <= 8 && col - 1 >= 1) {
            if(checkForPiece(`${row + 1}${letters[col - 2]}`, turn) !== "pieceTeam") {
                moves.push([row + 1, col - 1]);
            }
        }
        
        if(row - 1 >= 1 && col + 1 <= 8) {
            if(checkForPiece(`${row - 1}${letters[col]}`, turn) !== "pieceTeam") {
                moves.push([row - 1, col + 1]);
            }
        }
       
        if(row - 1 >= 1 && col - 1 >= 1) {
            if(checkForPiece(`${row - 1}${letters[col - 2]}`, turn) !== "pieceTeam") {
                moves.push([row - 1, col - 1]);
            }
        }
       
        if(row + 1 <= 8) {
            if(checkForPiece(`${row + 1}${letters[col - 1]}`, turn) !== "pieceTeam") {
                moves.push([row + 1, col]);
            }
        }
       
        if(row - 1 >= 1) {
            if(checkForPiece(`${row - 1}${letters[col - 1]}`, turn) !== "pieceTeam") {
                moves.push([row - 1, col]);
            }
        }
  
        if(col + 1 <= 8) {
            if(checkForPiece(`${row}${letters[col]}`, turn) !== "pieceTeam") {
                moves.push([row, col + 1]);
            }
        }
   
        if(col - 1 >= 1) {
            if(checkForPiece(`${row}${letters[col - 2]}`, turn) !== "pieceTeam") {
                moves.push([row, col - 1]);
            }
        }
    }
    

    const validMoves = [];
    moves.forEach(move => {
        const row = move[0];
        const col = move[1];
        const position = `${row}${letters[col - 1]}`;
        validMoves.push(position);
    });
    giveHints(validMoves);
    console.log(validMoves);
    return validMoves;
}


function checkForPiece(position, myColor) {
    const tile = document.getElementById(position);
    if(tile.innerText.length !== 0) {
        if(tile.innerText[0] !== myColor) {
            return "pieceEnemy";
        }else {
            return "pieceTeam";
        }
    }else {
        return "noPiece";
    }
}

function giveHints(validMoves) {
    validMoves.forEach(move => {
        const tile = document.getElementById(move);
        if(tile.innerText.length !== 0) {
            tile.classList.src('img/');
        }else {
            tile.classList.add('hintMove');
        }
    });
}


function movePiece(moves, pieceName, position) {
    document.querySelectorAll('.tile').forEach(tile => {
        tile.addEventListener('click', function() {
            moves.forEach(move => {
                if(tile.id === move) {
                    tile.innerText = pieceName;
                    tile.innerHTML = `${turn + tile.innerText}<img class='img' src="img/${turn + tile.innerText}.png" alt="${turn + tile.innerText}">`;
                    tile.style.cursor = 'pointer';
                    const previousTile = document.getElementById(position);
                    previousTile.innerText = "";
                    previousTile.style.cursor = "default";
                    if(winner() === 1) {
                        alert("Black Wins", true);
                    }else if(winner() === 2) {
                        alert("White Wins", true);
                    }else {
                        toggleTurn(turn);
                    }
                    moves = [];
                }else {
                    moves = [];
                }
            });
        });
    });
}


function alert(text, end) {
    const alert = document.querySelector('.container-turn');
    alert.style.visibility = 'visible';
    alert.style.opacity = '1';

    const imgTurn = document.getElementById('imgTurn');
    if(text === "White's Turn" || text === "White Wins") {
        imgTurn.src = "img/WKing.png";
        imgTurn.alt = "Wking";
    }else {
        imgTurn.src = "img/BKing.png";
        imgTurn.alt = "Bking";
    }

    const turnElement = document.getElementById('turn');
    turnElement.innerText = text;

    if(end === true) {
        setTimeout(function(){
            alert.style.visibility = 'hidden';
            alert.style.opacity = '0';
            window.location.reload();
        }, 3000);
    }else {
        setTimeout(function(){
            alert.style.visibility = 'hidden';
            alert.style.opacity = '0';
        }, 1000);
    } 
}


function toggleTurn() {
    if(turn === "W") {
        turn = "B";
        alert("Black's Turn", false)
    }else {
        turn = "W";
        alert("White's Turn", false)
    }
}

function winner() {
    let winnerW = false;
    let winnerB = false;
    document.querySelectorAll('.tile').forEach(tile => {
        if(tile.innerText === "Wking") {
            winnerW = true;
        }
        if(tile.innerText === "Bking") {
            winnerB = true;
        }
    });
    if(winnerW === false) {
        return 1;
    }else if(winnerB === false) {
        return 2;
    }
}