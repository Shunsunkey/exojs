function afficherDonneesEntrepreneurs() {
    const entrepreneurs = [
        { first: 'Steve', last: 'Jobs', year: 1955 },
        { first: 'Oprah', last: 'Winfrey', year: 1954 },
        { first: 'Bill', last: 'Gates', year: 1955 },
        { first: 'Sheryl', last: 'Sandberg', year: 1969 },
        { first: 'Mark', last: 'Zuckerberg', year: 1984 },
        { first: 'Beyonce', last: 'Knowles', year: 1981 },
        { first: 'Jeff', last: 'Bezos', year: 1964 },
        { first: 'Diane', last: 'Hendricks', year: 1947 },
        { first: 'Elon', last: 'Musk', year: 1971 },
        { first: 'Marissa', last: 'Mayer', year: 1975 },
        { first: 'Walt', last: 'Disney', year: 1901 },
        { first: 'Larry', last: 'Page', year: 1973 },
        { first: 'Jack', last: 'Dorsey', year: 1976 },
        { first: 'Evan', last: 'Spiegel', year: 1990 },
        { first: 'Brian', last: 'Chesky', year: 1981 },
        { first: 'Travis', last: 'Kalanick', year: 1976 },
        { first: 'Marc', last: 'Andreessen', year: 1971 },
        { first: 'Peter', last: 'Thiel', year: 1967 }
    ];

    const container = document.getElementById('container');
    let html = '';

    // 1. Entrepreneurs nés dans les années 70
    html += "<p>1. Entrepreneurs nés dans les années 70 :</p>";
    const entrepreneursAnnees70 = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);
    html += "<pre>" + JSON.stringify(entrepreneursAnnees70, null, 2) + "</pre>";

    // 2. Prénom et nom des entrepreneurs
    html += "<p>2. Prénom et nom des entrepreneurs :</p>";
    const prenomNomEntrepreneurs = entrepreneurs.map(entrepreneur => ({ first: entrepreneur.first, last: entrepreneur.last }));
    html += "<pre>" + JSON.stringify(prenomNomEntrepreneurs, null, 2) + "</pre>";

    // 3. Âge actuel des entrepreneurs
    html += "<p>3. Âge actuel des entrepreneurs :</p>";
    const anneeActuelle = new Date().getFullYear();
    entrepreneurs.forEach(entrepreneur => {
        const age = anneeActuelle - entrepreneur.year;
        html += `<p>${entrepreneur.first} ${entrepreneur.last} aurait ${age} ans aujourd'hui.</p>`;
    });

    // 4. Entrepreneurs triés par ordre alphabétique du nom de famille
    html += "<p>4. Entrepreneurs triés par ordre alphabétique du nom de famille :</p>";
    const entrepreneursTries = entrepreneurs.slice().sort((a, b) => a.last.localeCompare(b.last));
    html += "<pre>" + JSON.stringify(entrepreneursTries, null, 2) + "</pre>";

    container.innerHTML = html;
}