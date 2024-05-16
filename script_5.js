function afficherDonneesLivres() {
    const books = [
        { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
        { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
        { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
        { title: 'Les frères Karamazov', id: 450911, rented: 55 },
        { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
        { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
        { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
        { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
        { title: 'La disparition', id: 364445, rented: 33 },
        { title: 'La lune seule le sait', id: 63541, rented: 43 },
        { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
        { title: 'Guerre et Paix', id: 748147, rented: 19 }
    ];

    const container = document.getElementById('container');
    let html = '';

    // 1. Tous les livres ont été au moins empruntés une fois
    const allBooksRented = books.every(book => book.rented > 0);
    html += `<p>1. Tous les livres ont été au moins empruntés une fois : ${allBooksRented ? 'Oui' : 'Non'}</p>`;

    // 2. Le livre le plus emprunté
    const mostRentedBook = books.reduce((prev, current) => (prev.rented > current.rented) ? prev : current);
    html += `<p>2. Le livre le plus emprunté est : ${mostRentedBook.title}</p>`;

    // 3. Le livre le moins emprunté
    const leastRentedBook = books.reduce((prev, current) => (prev.rented < current.rented) ? prev : current);
    html += `<p>3. Le livre le moins emprunté est : ${leastRentedBook.title}</p>`;

    // 4. Le livre avec l'ID 873495
    const bookWithId873495 = books.find(book => book.id === 873495);
    html += `<p>4. Le livre avec l'ID 873495 est : ${bookWithId873495.title}</p>`;

    // 5. Livre avec l'ID 133712 supprimé
    const booksWithoutId133712 = books.filter(book => book.id !== 133712);
    html += `<p>5. Livre avec l'ID 133712 supprimé.</p>`;

    // 6. Livres triés par ordre alphabétique
    const sortedBooks = booksWithoutId133712.slice().sort((a, b) => a.title.localeCompare(b.title));
    html += "<p>6. Livres triés par ordre alphabétique:</p>";
    html += "<pre>" + JSON.stringify(sortedBooks, null, 2) + "</pre>";

    container.innerHTML = html;
}