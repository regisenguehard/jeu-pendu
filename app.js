
// Liste des mots à deviner
let words = [
    "pendu",
    "chat",
    "soleil",
    "livre",
    "chien"
];

// Mot à deviner
let selectedWord = words[Math.floor(Math.random() * words.length)];

// Nombre de tentatives restantes
let remainingAttempts = 7;

// Tableau pour stocker les lettres déjà devinées
let guessedLetters = [];

let rejouer = '<div><a href="" class="btn btn-secondary">Rejouer</a></div>';

// Fonction pour mettre à jour l'affichage du mot
function updateWordDisplay() {
    let wordDisplay = "";
    for (let i = 0; i < selectedWord.length; i++) {
        let letter = selectedWord[i];
        if (guessedLetters.indexOf(letter) !== -1) {
            wordDisplay += letter + " ";
        } else {
            wordDisplay += "_ ";
        }
    }
    document.querySelector(".word").textContent = wordDisplay;
}

// Fonction pour mettre à jour l'affichage des lettres devinées
function updateGuessedLettersDisplay() {
      document.querySelector(".letters").textContent = "Lettres devinées : " + guessedLetters.join(", ");
}

// Fonction pour mettre à jour l'affichage du nombre de tentatives restantes
function updateRemainingAttemptsDisplay() {
    document.querySelector(".attempts").textContent = "Tentatives restantes : " + remainingAttempts;
}

// Fonction pour mettre à jour l'affichage de l'image du pendu
function updatePenduImage() {
    var hangmapenduImage = document.querySelector(".pendu-image");
    hangmapenduImage.style.backgroundImage = "url('img/sprite_" + (7 - remainingAttempts) + ".png')";
}

// Fonction pour vérifier si le joueur a gagné
function checkWin() {
for (var i = 0; i < selectedWord.length; i++) {
    if (guessedLetters.indexOf(selectedWord[i]) === -1) {
    return false;
    }
}
return true;
}

// Fonction pour gérer le clic sur une lettre
function handleLetterClick(letter) {
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        if (selectedWord.indexOf(letter) === -1) {
            console.log(guessedLetters + '|' + selectedWord + 'oui' + selectedWord.indexOf(letter));
            remainingAttempts--;
            updatePenduImage();
        } else {
            console.log('non');
        }
        let  lettre = document.querySelector('button.'+letter);
        // lettre.style.visibility = 'hidden';
        lettre.classList.add('disabled');
        updateWordDisplay();
        updateGuessedLettersDisplay();
        updateRemainingAttemptsDisplay();

        if (checkWin()) {
            document.querySelector(".message").innerHTML = '<div class="alert alert-success my-3">Félicitations, vous avez gagné !</div>' + rejouer;
            document.querySelector(".letters").textContent = "";
            document.querySelector(".letter-buttons").style.display = "none";
        } else if (remainingAttempts === 0) {
            document.querySelector(".message").innerHTML = '<div class="alert alert-warning my-3">Dommage, vous avez perdu.<br>Le mot était : <strong>' + selectedWord + '</strong></div>' + rejouer;
            document.querySelector(".letters").textContent = "";
            document.querySelector(".letter-buttons").style.display = "none";
        }
    }
}

// Initialisation de l'affichage
updateWordDisplay();
updateGuessedLettersDisplay();
updateRemainingAttemptsDisplay();

// Gestion des clics sur les lettres
var letterButtons = document.querySelectorAll(".letter-buttons button");
for (var i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener("click", function() {
        handleLetterClick(this.textContent.toLowerCase());
    });
}