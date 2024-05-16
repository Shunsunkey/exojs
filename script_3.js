function construirePyramide(etages) {
    let pyramide = '';
    for (let i = 1; i <= etages; i++) {
        let ligne = ' '.repeat(etages - i) + '#'.repeat(i);
        pyramide += ligne + '<br>';
    }
    return pyramide;
}

function afficherPyramide() {
    const etagesInput = document.getElementById('etagesInput').value;
    const etages = parseInt(etagesInput);
    const pyramideElement = document.getElementById('pyramide');

    if (isNaN(etages) || etages < 1) {
        pyramideElement.innerHTML = 'Erreur : Veuillez entrer un nombre entier positif.';
    } else {
        // Construire la pyramide et l'afficher
        const pyramide = construirePyramide(etages);
        pyramideElement.innerHTML = "Voici ta pyramide de " + etages + " étages :<br>" + pyramide;
    }
}