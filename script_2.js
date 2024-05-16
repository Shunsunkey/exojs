function factorielle(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}

function calculerFactorielle() {
    const nombreInput = document.getElementById('nombreInput').value;
    const nombre = parseInt(nombreInput);
    const resultatElement = document.getElementById('resultat');

    if (isNaN(nombre)) {
        resultatElement.textContent = 'Erreur : Veuillez entrer un nombre valide.';
    } else {
        const resultat = factorielle(nombre);
        resultatElement.textContent = 'Le résultat est : ' + resultat;
    }
}