
// Liste des mots à deviner
let wordList = {
    easy: ["chat", "soleil", "livre", "chien","abricot","ail","amande","ananas","arbre","aubergine","avion","avocat","ballon","banane","bateau","bouteille","brocoli","cacahuete","carotte","cassis","camion","cerise","chapeau","chat","chemin","cheval","chien","chou","citron","cle","concombre","crayon","ecole","etoile","figue","fleur","foret","fraise","framboise","fusee","grenade","groseille","guitare","haricot","kiwi","lac","lampe","lion","livre","lune","maison","mangue","marteau","melons","mer","montagne","montre","moto","mure","myrtille","nectarine","noisette","noix","nuage","ocean","oignon","oiseau","orange","ordinateur","pamplemousse","papaye","papier","parc","pasteque","peche","pendu","piano","plage","planete","poire","poivron","pomme","prune","raisin","riviere","salade","saxophone","soleil","stylo","table","telephone","terre","tigre","tomate","train","trompette","velo","violon","voiture","pendu","chat","soleil","livre","chien","arbre","fleur","maison","avion","table","bateau","voiture","ballon","oiseau","montagne","mer","lac","riviere","plage","foret","parc","pomme","fraise","orange","poire","banane","raisin","citron","cerise","pasteque","tomate","carotte","poivron","salade","brocoli","concombre","aubergine","haricot","chou","oignon","ail","kiwi","mangue","grenade","noix","noisette","amande","cacahuete","avocat","melon","peche","nectarine","abricot","figue","cassis","myrtille","papaye","prune","framboise","groseille","melon","pamplemousse","pasteque","fraise","banane","orange","poire","cerise","abricot","grenade","mangue","noix","amande","cacahuete","avocat","peche","nectarine","pasteque","fraise","banane","orange","pamplemousse","groseille","melon","pasteque","banane","abricot","peche","poire","cerise","pasteque","mangue","melon","pasteque","fraise","orange","poire","cerise","melon","pamplemousse","nectarine","banane","abricot","peche","pasteque","pasteque","groseille","orange","cerise","poire","mangue","pasteque","melon","framboise","banane","nectarine","abricot","peche","orange","pasteque","pasteque","poire","cerise","groseille","melon","framboise","pasteque","nectarine","abricot","pasteque","pasteque","peche","cerise","groseille","orange","melon","framboise","banane","nectarine","abricot","peche","pasteque","pasteque","poire","cerise","orange","groseille","melon","framboise","pasteque","nectarine","banane","abricot","peche","pasteque","pasteque","cerise","groseille","melon","framboise","nectarine","pasteque","pasteque","banane","abricot","peche","pasteque","poire","cerise","groseille","orange","melon","framboise","pasteque","nectarine","abricot","peche","pasteque","pasteque","poire","cerise","groseille","orange","melon","framboise","pasteque","nectarine","abricot","peche","pasteque","pasteque","cerise","groseille","orange","melon","framboise","pasteque","nectarine","banane"],
    medium: ["abeille","abeille","aigle","aigle","alouette","alouette","araignee","araignee","autruche","autruche","avion","baleine","ballon","banane","bateau","bouteille","caille","caille","canard","canard","canard","canard","canari","canari","cerf","chapeau","chardonneret","chat","chemise","cheval","chien","chouette","chouette","chouette","château","chevre","cigale","cigogne","coccinelle","coccinelle","cochon","colibri","colombe","colombe","colombe","condor","corbeau","corbeau","corbeau","corbeau","cormoran","cormoran","cormoran","corneille","coucou","crocodile","crocodile","cygne","cygne","cygne","dauphin","dauphin","dindon","dindon","dromadaire","escargot","escargot","faisan","fantôme","faucon","fauvette","fauvette","fleur","football","foret","fourmi","fourmi","fraise","gazelle","geai","girafe","gorille","grenouille","grillon","guitare","guepard","hibou","hibou","hippocampe","hirondelle","hirondelle","hirondelle","herisson","jardin","javascript","kangourou","kangourou","kangourou","koala","koala","lapin","lion","lionceau","livre","loriot","loup","loutre","leopard","lezard","manchot","marmotte","marteau","merle","merle","merle","moineau","moineau","moineau","moineau","moineau","montagne","mouette","mouton","musique","meduse","mesange","oiseau","ordinateur","ours","ours","panda","pantalon","panthere","paon","paon","paon","paon","papillon","papillon","papillon","perdrix","perroquet","perroquet","perroquet","perroquet","perroquet","perruche","perruche","perruche","perruche","pigeon","pigeon","pingouin","pinson","pinson","pintade","pintade","pizza","pomme","poule","poule","poulet","programmation","puma","pelican","renard","requin","requin","restaurant","rhinoceros","rossignol","scarabee","serpent","singe","soleil","stylo","suricate","tableau","tatou","tigre","tortue","tourterelle","telephone","vache","vautour","verdier","voiture","zebre","ecole","ecureuil","ecureuil","ecureuil","elephant","etoile","etourneau","etourneau"],
    hard: ["algorithmique","exorbitant","cryptographie","paradigme","intelligence","spectaculaire","inevitable","incroyable","revolution","magnifique","extraordinaire","exceptionnel","phenomenal","eblouissant","prodigieux","sensationnel","grandiose","remarquable",'formidable',"sensation","emerveillement","enigme","merveille","emerveillement","phenomene","stupefiant","insolite","splendide","incroyablement","fascinant","miraculeux","remarquablement","impressionnant","surprenant","stupefiant","fantastique","fascinant","sensationnel","prodigieusement","singulierement","merveilleusement","miraculeusement","magnifiquement","grandiosement","surprenante","epatant","impressionnante","etonnant","etonnante","sensationnelle","impressionnante","epoustouflante","fascinante","grandiose","stupefiante","sensationnelle","fascinante","prodigieuse","remarquable","magnifique","eblouissante","fantastique","etonnante","impressionnante","emerveillante","sensationnelle","prodigieuse","stupefiante","fascinante","impressionnante","miraculeuse","grandiose","surprenante","eblouissante","epatante","extraordinairement","stupefiante","fascinante","impressionnante","emerveillante","sensationnelle","stupefiante","epatante","grandiose","sensationnelle","prodigieuse","eblouissante","etonnante","extraordinaire","impressionnante","stupefiante","fascinante","miraculeuse","magnifique","epatante","eblouissante","emerveillante","sensationnelle","extraordinaire","impressionnante","stupefiante","fascinante","prodigieuse","grandiose","etonnante","miraculeuse","eblouissante","epatante","impressionnante","stupefiante","fantastique","emerveillante","magnifique","surprenante","impressionnante","stupefiante","epatante","sensationnelle","emerveillante","stupefiante","fascinante","prodigieuse","eblouissante","grandiose","etonnante","impressionnante","stupefiante","extraordinaire","fascinante","epatante","emerveillante","sensationnelle","stupefiante","grandiose","etonnante","eblouissante","fantastique","impressionnante","emerveillante","sensationnelle","stupefiante","prodigieuse","fascinante","eblouissante","epatante","grandiose","etonnante","impressionnante","stupefiante","fantastique","emerveillante","sensationnelle","eblouissante","stupefiante","epatante","etonnante","sensationnelle","impressionnante","stupefiante","fascinante","grandiose","eblouissante","emerveillante","epatante","sensationnelle","stupefiante","etonnante","impressionnante","fascinante","extraordinaire","grandiose","eblouissante","epatante","sensationnelle","stupefiante","emerveillante","fantastique","etonnante","extraordinaire","impressionnante","stupefiante","fascinante","grandiose","eblouissante","emerveillante","sensationnelle","stupefiante","extraordinaire","impressionnante","fascinante","epatante","eblouissante","fantastique","emerveillante","sensationnelle","stupefiante","grandiose","epatante","impressionnante","extraordinaire"],
    impossible: ["pneumonoultramicroscopicsilicovolcanoconiose","anticonstitutionnellement","floccinaucinihilipilification","hippopotomonstrosesquippedaliophobie","intergouvernementalisations","dichlorodiphenyltrichloroethane","electroencephalographiques","antideconstitutionnellement","anticonstitutionnelles","anticonstitutionnel","electroencephalographique","intergouvernementalisation","dichlorodiphenyltrichloroethanes","anticonstitutionnelle","anticonstitutionnalite","anticonstitutionnalites","anticonstitutionnaliste","anticonstitutionnalismes","electroencephalographiquement","electroencephalographiste","electroencephalographistes","inconstitutionnellement","interministeriellement","inintelligibilite","immunoelectrophoretique","immunohistochimie","immunosuppresseur","immunosuppression","immunosupprime","immunotherapeutique","immunotherapie","imponderabilite","impopularite","impraticabilite","impredictibilite","improbabilite","improvisabilite","inadequation","inadequatement","inalterabilite","inapplicabilite","inapprochabilite","inappropriabilite","inassimilabilite","inattaquabilite","inatteignabilite","inattribuabilite","incommunicabilite","inconcevabilite","inconditionnalite","inconstance","inconsequentialite","inconvertibilite","indeboulonnable","indebrouillable","indebrouillablement","indechiffrabilite","indecidabilite","indefectibilite","indefectiblement","indelebilite","indeliberabilite","indemontabilite","indemontrabilite","indeniable","indeniablement","indepassabilite","indepassablement","indescriptibilite","indesirabilite","indestructibilite","indetectabilite","indeterminabilite","indifferenciabilite","indiscernabilite","indiscutabilite","indissociabilite","indissolubilite","indomptabilite","indubitabilite","indubitablement","indulgencier","industrieusement","ineffabilite","ineluctabilite","inevitabilite","inextricabilite","inexecutable","inexecutablement","inexorabilite","inexplicabilite","inexpugnabilite","inextinguibilite","infalsifiable","infalsifiablement","infatigablement","infaillibilite","infalsifiabilite","infailliblement","infantiliser","infiniment","infinite","infinissabilite","inflammabilite","infroissabilite","ingouvernabilite","inguerissable","inguerissabilite","inherent","inherentes","inherente","ininflammabilite","inintelligiblement","innavigabilite","innommabilite","innombrabilite","innommable","innommablement","innover","innebranlable"]
};

// Mot à deviner
let selectedWord;

// Nombre de tentatives totales
let remainingAttemptsTotal = 7;

// Nombre de tentatives restantes
let remainingAttempts = 7;

// Tableau pour stocker les lettres déjà devinées
let guessedLetters = [];

// Tableau pour stocker les mots déjà devinées
let guessedWords = [];

let rejouer = '<div><a onclick="startGame()" class="btn btn-primary">Rejouer</a></div>';


// Fonction pour choisir un mot aléatoire en fonction du niveau de difficulté
function selectWord(difficulty) {
    arr = wordList[difficulty];
    let unique = arr.filter((x, i) => arr.indexOf(x) === i);
    let words = unique;
    let word = words[Math.floor(Math.random() * words.length)];

    if (!guessedWords[difficulty]) {
        console.log('lkkk');
        guessedWords[difficulty] = [];
    }

    guessedWords[difficulty].push(word);
    wordList[difficulty].splice(words.indexOf(word), 1);
    
    if (wordList[difficulty].length === 0) {
        console.log('lll');
        wordList[difficulty] = guessedWords[difficulty];
        guessedWords[difficulty] = [];
    }
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
            showMessage('<div class="animated alert alert-success mb-3">Félicitations, vous avez gagné !</div>' + rejouer);
            disableLetterButtons();
            playSound('winSound');
        } else if (remainingAttempts <= 0) {
            showMessage('<div class="animated alert alert-warning mb-3">Dommage, vous avez perdu.<br>Le mot était : <strong>' + selectedWord + '</strong></div>' + rejouer);
            disableLetterButtons();
            playSound('lostSound');
        }
    }
}




let toggleButton = document.getElementById('toggleSound');
let isSoundEnabled = localStorage.getItem('soundEnabled') === 'true';
if (isSoundEnabled) {
    toggleButton.classList.toggle("muted");
}

// Fonction pour activer/désactiver le son et mémoriser son état
function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    toggleButton.classList.toggle("muted", isSoundEnabled);

    // Mémoriser l'état du son dans le localStorage
    localStorage.setItem('soundEnabled', isSoundEnabled);
}

// Ajouter un écouteur d'événement au bouton pour activer/désactiver le son au clic
toggleButton.addEventListener('click', toggleSound);


function playSound(target) {
    if (isSoundEnabled) {
        let sound = document.getElementById(target);
        sound.play();
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
        letterButtons[i].classList.add("disabled", "hide");
    }
}

// Gestion des clics sur les lettres
let letterButtons = document.querySelectorAll(".letter-buttons button");
// for (let i = 0; i < letterButtons.length; i++) {
//     letterButtons[i].addEventListener("click", function() {
//         handleLetterClick(this.textContent.toLowerCase());
//     });
// }