// let text = document.getElementById("paragraphe")
// let buttonRed= document.getElementById("red")
// let buttonBlue= document.getElementById("blue")
// console.log(buttonBlue)
// console.log(buttonRed)

// buttonRed.onclick= () =>{text.style.color="pink"}
// buttonBlue.onclick= () =>{text.style.color="green"}


// //titre
// let newTitle = document.createElement("h1");
// newTitle.textContent = "Mon titre";

// newTitle.style.fontSize = "24px"; 
// newTitle.style.color = "red"; 
// newTitle.style.fontWeight = "bold";

// let parentElement = document.querySelector("main");
// parentElement.appendChild(newTitle);

// // div
// let newDiv = document.createElement("div");

// let firstParagraph = document.createElement("p");
// firstParagraph.textContent = "Mon premier paragraphe";
// newDiv.appendChild(firstParagraph);

// let secondParagraph = document.createElement("p");
// secondParagraph.textContent = "Mon second paragraphe";
// newDiv.appendChild(secondParagraph);

// //ajout dans la div (1er paragraphe)
// firstParagraph.textContent += " c'est le plus long";

// parentElement.appendChild(newDiv);




// Inner html
// let parentsElement = document.querySelector("main");
// let content = `<div>
// <h1>Mon titre</h1>
// <p> Mon paragraphe 1 </p>
// <p> Mon paragraphe 2 </p>
// </div>`
// parentsElement.innerHTML = content;


// --------------------------------------------------------------------------------------------

// // Palindrome

// let button = document.getElementById('checkButton'); 
// const input = document.getElementById('textInput'); 
// const result = document.getElementById('result'); 

// button.addEventListener('mouseover', () => {
//     button.style.backgroundColor = 'lightblue'; 
// });

// button.addEventListener('mouseout', () => {
//     button.style.backgroundColor = ''; 
// });

// button.addEventListener('click', () => {
//     let chain = input.value.trim(); 
//     let normalizedChain = chain.toLowerCase().replace(/[^a-z0-9]/g, ''); 
//     let inversedChain = normalizedChain.split("").reverse().join(""); 

    
//     if (normalizedChain === inversedChain) {
//         result.textContent = `"${chain}" est un palindrome.`; 
//     } else {
//         result.textContent = `"${chain}" n'est pas un palindrome.`; 
//     }
// });

// --------------------------------------------------------------------------------------------


// Formulaire Nouveau Produit

let submitButton = document.querySelector("form");

submitButton.addEventListener('submit', (event) => { 
    event.preventDefault();
    
    const nom = document.getElementById('inputName').value;
    const texte = document.getElementById('textArea').value;
    const age = document.getElementById('age').value;
    const genre = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').nextElementSibling.textContent.trim() : '';
    const pays = document.getElementById('country').value;
    const situation = Array.from(document.querySelectorAll('input[name="situation"]:checked')).map(input => input.nextElementSibling.textContent.trim()).join(', ');

    if (nom === "" || texte === "" || age === "") { 
        alert("Tous les champs ne sont pas remplis !");
    } else {
        afficherTableau(nom, texte, age, genre, pays, situation);
    }
});

function afficherTableau(nom, texte, age, genre, pays, situation) {
    const tableau = `
        <table border="1">
            <tr>
                <th>Nom</th>
                <th>Informations</th>
                <th>Âge</th>
                <th>Genre</th>
                <th>Pays</th>
                <th>Situation</th>
            </tr>
            <tr>
                <td>${nom}</td>
                <td>${texte}</td>
                <td>${age}</td>
                <td>${genre}</td>
                <td>${pays}</td>
                <td>${situation}</td>
            </tr>
        </table>
    `;
    
    document.getElementById('afficher').innerHTML = tableau;
}

// --------------------------------------------------------------------------------

// Tic tac toe

// let  currentPlayer = 'X';
// const cells = document.querySelectorAll('.cell');
// const statusDisplay = document.getElementById('status');
// const restartButton = document.getElementById('restartButton');

// cells.forEach(cell => {
//     cell.addEventListener('click', () => {
//         if (cell.textContent === '') {
//             cell.textContent = currentPlayer;
//             checkWinner();
//             currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         }
//     });
// });

// function checkWinner() {
//     const winningCombinations = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];

//     winningCombinations.forEach(combination => {
//         const [a, b, c] = combination;
//         if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
//             statusDisplay.textContent = `Joueur ${cells[a].textContent} a gagné!`;
//             cells.forEach(cell => cell.disabled = true);
//         }
//     });

//     if ([...cells].every(cell => cell.textContent)) {
//         statusDisplay.textContent = 'Match nul!';
//     }
// }

// restartButton.addEventListener('click', () => {
//     cells.forEach(cell => {
//         cell.textContent = '';
//         cell.disabled = false;
//     });
//     currentPlayer = 'X';
//     statusDisplay.textContent = '';
// });