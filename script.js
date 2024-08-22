let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

function updateProgressBar() {
    const progress = (attempts / maxAttempts) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function makeGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    attempts += 1;

    const resultElement = document.getElementById('result');
    const historyElement = document.getElementById('attempt-history');

    updateProgressBar(); // Mettre à jour la barre de progression

    if (attempts >= maxAttempts) {
        resultElement.innerText = `Désolé, vous avez dépassé le nombre maximal d'essais (${maxAttempts}). Le nombre était ${numberToGuess}.`;
        resultElement.style.color = "red";
        document.getElementById('guess').disabled = true;
        document.querySelector('.btn-guess').disabled = true;
        return;
    }

    if (isNaN(guess)) {
        resultElement.innerText = "Veuillez entrer un nombre valide.";
        resultElement.style.color = "red";
    } else if (guess < numberToGuess) {
        resultElement.innerText = "Trop bas ! Essayez encore.";
        resultElement.style.color = "orange";
        historyElement.innerHTML += `<li>${guess} est trop bas.</li>`;
    } else if (guess > numberToGuess) {
        resultElement.innerText = "Trop haut ! Essayez encore.";
        resultElement.style.color = "orange";
        historyElement.innerHTML += `<li>${guess} est trop haut.</li>`;
    } else {
        resultElement.innerText = `Félicitations ! Vous avez deviné le nombre en ${attempts} essais.`;
        resultElement.style.color = "green";
        historyElement.innerHTML += `<li>${guess} est correct !</li>`;
        document.getElementById('guess').disabled = true;
        document.querySelector('.btn-guess').disabled = true;
    }

    resultElement.classList.add('show');
}

function restartGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('result').classList.remove('show');
    document.getElementById('attempt-history').innerHTML = '';
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('guess').disabled = false;
    document.querySelector('.btn-guess').disabled = false;
}