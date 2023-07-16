
// Liste des mots à deviner
let wordList = {
    easy: ["chat", "soleil", "livre", "chien","abricot","ail","amande","ananas","arbre","aubergine","avion","avocat","ballon","banane","bateau","bouteille","brocoli","cacahuete","carotte","cassis","camion","cerise","chapeau","chat","chemin","cheval","chien","chou","citron","cle","concombre","crayon","ecole","etoile","figue","fleur","foret","fraise","framboise","fusee","grenade","groseille","guitare","haricot","kiwi","lac","lampe","lion","livre","lune","maison","mangue","marteau","melons","mer","montagne","montre","moto","mure","myrtille","nectarine","noisette","noix","nuage","ocean","oignon","oiseau","orange","ordinateur","pamplemousse","papaye","papier","parc","pasteque","peche","pendu","piano","plage","planete","poire","poivron","pomme","prune","raisin","riviere","salade","saxophone","soleil","stylo","table","telephone","terre","tigre","tomate","train","trompette","velo","violon","voiture","pendu","chat","soleil","livre","chien","arbre","fleur","maison","avion","table","bateau","voiture","ballon","oiseau","montagne","mer","lac","rivière","plage","forêt","parc","pomme","fraise","orange","poire","banane","raisin","citron","cerise","pastèque","tomate","carotte","poivron","salade","brocoli","concombre","aubergine","haricot","chou","oignon","ail","kiwi","mangue","grenade","noix","noisette","amande","cacahuète","avocat","melon","pêche","nectarine","abricot","figue","cassis","mûre","myrtille","papaye","prune","framboise","groseille","melon","pamplemousse","pastèque","fraise","banane","orange","poire","cerise","abricot","grenade","mangue","noix","amande","cacahuète","avocat","pêche","nectarine","pastèque","fraise","banane","orange","pamplemousse","groseille","melon","pastèque","banane","abricot","pêche","poire","cerise","pastèque","mangue","melon","pastèque","fraise","orange","poire","cerise","melon","pamplemousse","nectarine","banane","abricot","pêche","pastèque","pastèque","groseille","orange","cerise","poire","mangue","pastèque","melon","framboise","banane","nectarine","abricot","pêche","orange","pastèque","pastèque","poire","cerise","groseille","melon","framboise","pastèque","nectarine","abricot","pastèque","pastèque","pêche","cerise","groseille","orange","melon","framboise","banane","nectarine","abricot","pêche","pastèque","pastèque","poire","cerise","orange","groseille","melon","framboise","pastèque","nectarine","banane","abricot","pêche","pastèque","pastèque","cerise","groseille","melon","framboise","nectarine","pastèque","pastèque","banane","abricot","pêche","pastèque","poire","cerise","groseille","orange","melon","framboise","pastèque","nectarine","abricot","pêche","pastèque","pastèque","poire","cerise","groseille","orange","melon","framboise","pastèque","nectarine","abricot","pêche","pastèque","pastèque","cerise","groseille","orange","melon","framboise","pastèque","nectarine","banane"],
    medium: ["abeille","abeille","aigle","aigle","alouette","alouette","araignee","araignee","autruche","autruche","avion","baleine","ballon","banane","bateau","bouteille","caille","caille","canard","canard","canard","canard","canari","canari","cerf","chapeau","chardonneret","chat","chemise","cheval","chien","chouette","chouette","chouette","château","chevre","cigale","cigogne","coccinelle","coccinelle","cochon","colibri","colombe","colombe","colombe","condor","corbeau","corbeau","corbeau","corbeau","cormoran","cormoran","cormoran","corneille","coucou","crocodile","crocodile","cygne","cygne","cygne","dauphin","dauphin","dindon","dindon","dromadaire","escargot","escargot","faisan","fantôme","faucon","fauvette","fauvette","fleur","football","foret","fourmi","fourmi","fraise","gazelle","geai","girafe","gorille","grenouille","grillon","guitare","guepard","hibou","hibou","hippocampe","hirondelle","hirondelle","hirondelle","herisson","jardin","javascript","kangourou","kangourou","kangourou","koala","koala","lapin","lion","lionceau","livre","loriot","loup","loutre","leopard","lezard","manchot","marmotte","marteau","merle","merle","merle","moineau","moineau","moineau","moineau","moineau","montagne","mouette","mouton","musique","meduse","mesange","oiseau","ordinateur","ours","ours","panda","pantalon","panthere","paon","paon","paon","paon","papillon","papillon","papillon","perdrix","perroquet","perroquet","perroquet","perroquet","perroquet","perruche","perruche","perruche","perruche","pigeon","pigeon","pingouin","pinson","pinson","pintade","pintade","pizza","pomme","poule","poule","poulet","programmation","puma","pelican","renard","requin","requin","restaurant","rhinoceros","rossignol","scarabee","serpent","singe","soleil","stylo","suricate","tableau","tatou","tigre","tortue","tourterelle","telephone","vache","vautour","verdier","voiture","zebre","ecole","ecureuil","ecureuil","ecureuil","elephant","etoile","etourneau","etourneau"],
    hard: ["algorithmique","exorbitant","cryptographie","paradigme","intelligence","spectaculaire","inévitable","incroyable","révolution","magnifique","extraordinaire","exceptionnel","phénoménal","éblouissant","prodigieux","sensationnel","grandiose","remarquable",'formidable',"sensation","émerveillement","énigme","merveille","émerveillement","phénomène","stupéfiant","insolite","splendide","incroyablement","fascinant","miraculeux","remarquablement","impressionnant","surprenant","stupéfiant","fantastique","fascinant","sensationnel","prodigieusement","singulièrement","merveilleusement","miraculeusement","magnifiquement","grandiosement","surprenante","épatant","impressionnante","étonnant","étonnante","sensationnelle","impressionnante","époustouflante","fascinante","grandiose","stupéfiante","sensationnelle","fascinante","prodigieuse","remarquable","magnifique","éblouissante","fantastique","étonnante","impressionnante","émerveillante","sensationnelle","prodigieuse","stupéfiante","fascinante","impressionnante","miraculeuse","grandiose","surprenante","éblouissante","épatante","extraordinairement","stupéfiante","fascinante","impressionnante","émerveillante","sensationnelle","stupéfiante","épatante","grandiose","sensationnelle","prodigieuse","éblouissante","étonnante","extraordinaire","impressionnante","stupéfiante","fascinante","miraculeuse","magnifique","épatante","éblouissante","émerveillante","sensationnelle","extraordinaire","impressionnante","stupéfiante","fascinante","prodigieuse","grandiose","étonnante","miraculeuse","éblouissante","épatante","impressionnante","stupéfiante","fantastique","émerveillante","magnifique","surprenante","impressionnante","stupéfiante","épatante","sensationnelle","émerveillante","stupéfiante","fascinante","prodigieuse","éblouissante","grandiose","étonnante","impressionnante","stupéfiante","extraordinaire","fascinante","épatante","émerveillante","sensationnelle","stupéfiante","grandiose","étonnante","éblouissante","fantastique","impressionnante","émerveillante","sensationnelle","stupéfiante","prodigieuse","fascinante","éblouissante","épatante","grandiose","étonnante","impressionnante","stupéfiante","fantastique","émerveillante","sensationnelle","éblouissante","stupéfiante","épatante","étonnante","sensationnelle","impressionnante","stupéfiante","fascinante","grandiose","éblouissante","émerveillante","épatante","sensationnelle","stupéfiante","étonnante","impressionnante","fascinante","extraordinaire","grandiose","éblouissante","épatante","sensationnelle","stupéfiante","émerveillante","fantastique","étonnante","extraordinaire","impressionnante","stupéfiante","fascinante","grandiose","éblouissante","émerveillante","sensationnelle","stupéfiante","extraordinaire","impressionnante","fascinante","épatante","éblouissante","fantastique","émerveillante","sensationnelle","stupéfiante","grandiose","épatante","impressionnante","extraordinaire"],
    impossible: ["pneumonoultramicroscopicsilicovolcanoconiose","anticonstitutionnellement","floccinaucinihilipilification","hippopotomonstrosesquippedaliophobie","intergouvernementalisations","dichlorodiphényltrichloroéthane","électroencéphalographiques","antidéconstitutionnellement","anticonstitutionnelles","anticonstitutionnel","électroencéphalographique","intergouvernementalisation","dichlorodiphényltrichloroéthanes","anticonstitutionnelle","anticonstitutionnalité","anticonstitutionnalités","anticonstitutionnaliste","anticonstitutionnalismes","électroencéphalographiquement","électroencéphalographiste","électroencéphalographistes","inconstitutionnellement","interministériellement","inintelligibilité","immunoélectrophorétique","immunohistochimie","immunosuppresseur","immunosuppression","immunosupprimé","immunothérapeutique","immunothérapie","impondérabilité","impopularité","impraticabilité","imprédictibilité","improbabilité","improvisabilité","inadéquation","inadéquatement","inaltérabilité","inapplicabilité","inapprochabilité","inappropriabilité","inassimilabilité","inattaquabilité","inatteignabilité","inattribuabilité","incommunicabilité","inconcevabilité","inconditionnalité","inconstance","inconséquentialité","inconvertibilité","indéboulonnable","indébrouillable","indébrouillablement","indéchiffrabilité","indécidabilité","indéfectibilité","indéfectiblement","indélébilité","indélibérabilité","indémontabilité","indémontrabilité","indéniable","indéniablement","indépassabilité","indépassablement","indescriptibilité","indésirabilité","indestructibilité","indétectabilité","indéterminabilité","indifférenciabilité","indiscernabilité","indiscutabilité","indissociabilité","indissolubilité","indomptabilité","indubitabilité","indubitablement","indulgencier","industrieusement","ineffabilité","inéluctabilité","inévitabilité","inextricabilité","inexécutable","inexécutablement","inexorabilité","inexplicabilité","inexpugnabilité","inextinguibilité","infalsifiable","infalsifiablement","infatigablement","infaillibilité","infalsifiabilité","infailliblement","infantiliser","infiniment","infinité","infinissabilité","inflammabilité","infroissabilité","ingouvernabilité","inguérissable","inguérissabilité","inhérent","inhérentes","inhérente","ininflammabilité","inintelligiblement","innavigabilité","innommabilité","innombrabilité","innommable","innommablement","innover","innébranlable"]
};

// Mot à deviner
let selectedWord;

// Nombre de tentatives restantes
let remainingAttemptsTotal = 7;
let remainingAttempts = 7;

// Tableau pour stocker les lettres déjà devinées
let guessedLetters = [];

let rejouer = '<div><a onclick="startGame()" class="btn btn-secondary">Rejouer</a></div>';

// Fonction pour choisir un mot aléatoire en fonction du niveau de difficulté
function selectWord(difficulty) {
    arr = wordList[difficulty]
    let unique = arr.filter((x, i) => arr.indexOf(x) === i);
    let words = unique;
    let word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    return word;
}

// Lance le jeu
function startGame() {
    remainingAttempts = remainingAttemptsTotal;
    let difficulty = document.getElementById("difficulty").value;
    selectedWord = selectWord(difficulty);
    guessedLetters = [];

    // Réinitialisation de l'affichage
    updateWordDisplay();
    updateGuessedLettersDisplay();
    updateRemainingAttemptsDisplay();
    updatePenduImage();
    createLetterButtons();
    clearMessage();
}


// Fonction pour mettre à jour l'affichage du mot
function updateWordDisplay(tryLetter = null) {
    let wordDisplay = "";
    for (let i = 0; i < selectedWord.length; i++) {
        let letter = selectedWord[i];
        if (guessedLetters.indexOf(letter) !== -1) {
            if (letter === tryLetter) {
                wordDisplay += '<span class="animated">' + letter + "</span>";
            } else {
                wordDisplay += "<span>" + letter + "</span>";
            }
        } else {
            wordDisplay += "<span>_</span>";
        }
    }
    document.querySelector(".word").innerHTML = wordDisplay;
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
    let difficulty = document.getElementById("difficulty");
    if (difficulty.value) {
        let hangmapenduImage = document.querySelector(".pendu-image");
        hangmapenduImage.style.backgroundImage = "url('img/sprite_" + (remainingAttemptsTotal - remainingAttempts) + ".png')";
        hangmapenduImage.classList.add('show');
    } else {
        hangmapenduImage.classList.add('hide');
    }
}

// Fonction pour vérifier si le joueur a gagné
function checkWin() {
    for (let i = 0; i < selectedWord.length; i++) {
        if (guessedLetters.indexOf(selectedWord[i]) === -1) {
        return false;
        }
    }
    return true;
}

// Fonction pour gérer le clic sur une lettre
function handleLetterClick(letter) {
    letter = letter.toLowerCase();
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        if (selectedWord.indexOf(letter) === -1) {
            // console.log(guessedLetters + '|' + selectedWord + '-oui' + selectedWord.indexOf(letter) + '|' + letter);
            remainingAttempts--;
            updatePenduImage();
        } else {
            // console.log('non');
        }
        let  lettre = document.querySelector('button.'+letter);
        // lettre.style.visibility = 'hidden';
        lettre.classList.add('disabled');
        updateWordDisplay(letter);
        updateGuessedLettersDisplay();
        updateRemainingAttemptsDisplay();

        if (checkWin()) {
            showMessage('<div class="alert alert-success my-3">Félicitations, vous avez gagné !</div>' + rejouer);
            disableLetterButtons();
        } else if (remainingAttempts <= 0) {
            showMessage('<div class="alert alert-warning my-3">Dommage, vous avez perdu.<br>Le mot était : <strong>' + selectedWord + '</strong></div>' + rejouer);
            disableLetterButtons();
        }
    }
}

// Fonction pour créer les boutons des lettres en fonction du niveau de difficulté
function createLetterButtons() {
    let letterButtonsContainer = document.querySelector(".letter-buttons");
    letterButtonsContainer.innerHTML = "";

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < alphabet.length; i++) {
        let letter = alphabet[i];
        let button = document.createElement("button");
        button.textContent = letter;
        button.classList.add("btn", "btn-secondary", "mb-1", "mx-1", letter.toLowerCase());
        button.addEventListener("click", function() {
            handleLetterClick(this.textContent);
        });
        letterButtonsContainer.appendChild(button);
    }
}

// Fonction pour afficher un message
function showMessage(message) {
    document.querySelector(".message").innerHTML = message;
}

// Fonction pour effacer le message
function clearMessage() {
    document.querySelector(".message").textContent = "";
}

// Fonction pour désactiver les boutons des lettres
function disableLetterButtons() {
    let letterButtons = document.querySelectorAll(".letter-buttons button");
    for (var i = 0; i < letterButtons.length; i++) {
        letterButtons[i].disabled = true;
        letterButtons[i].classList.add("disabled");
    }
}

// Gestion des clics sur les lettres
let letterButtons = document.querySelectorAll(".letter-buttons button");
// for (let i = 0; i < letterButtons.length; i++) {
//     letterButtons[i].addEventListener("click", function() {
//         handleLetterClick(this.textContent.toLowerCase());
//     });
// }