const books = [
    {id: 0, title: 'Les Misérables', author: 'Victor Hugo', year: 1862, borrowedBy: [2, 4, 1]},
    {id: 1, title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry', year: 1943, borrowedBy: [3, 5]},
    {id: 2, title: '1984', author: 'George Orwell', year: 1949, borrowedBy: [4, 1, 3, 5]},
    {id: 3, title: 'L’Étranger', author: 'Albert Camus', year: 1942, borrowedBy: []},
    {id: 4, title: 'Harry Potter à l’école des sorciers', author: 'J.K. Rowling', year: 1997, borrowedBy: [2, 3, 5]},
    {id: 5, title: 'Le Seigneur des Anneaux', author: 'J.R.R. Tolkien', year: 1954, borrowedBy: [1, 4]}
];

// Exercice 1 : Liste des titres des livres
// Crée une constante qui contient la liste des titres des livres.

const titleBooks = books.map(book => book.title)
// console.log({titleBooks});

// Exercice 2 : Liste des livres triés par année de publication ascendante
// Crée une constante qui contient la liste des livres triés par leur année de publication, du plus ancien au plus récent.

const sortedBooksByYears = [...books].sort((a,b) => {
    return a.year - b.year;
})
// console.log(sortedBooksByYears);

// Exercice 3 : Le livre le plus emprunté
// Trouve le livre qui a été emprunté le plus de fois.
let maxBorrows = 0;
let mostBorrowedBook = null;    

books.forEach(book => {
    const borrowCount = book.borrowedBy.length;
    if (borrowCount > maxBorrows) {
        maxBorrows = borrowCount;
        mostBorrowedBook = book;
    }
});

// console.log(`Le livre le plus emprunté est "${mostBorrowedBook.title}" avec ${maxBorrows} emprunts.`);

// Exercice 4 : Nombre d'emprunts par auteur
// Calcule le nombre total d'emprunts pour chaque auteur et affiche le résultat.

let totalBorrow = {};

books.forEach(book => {
    console.log(book)
    book.borrowedBy.forEach(borrow => {

        // console.log(borrow)
        if(totalBorrow[book.author]){
            totalBorrow[book.author]++
            console.log(totalBorrow[book.author])
        }else{
            totalBorrow[book.author] = 1;
        }
    })
})

console.log(totalBorrow);

// Exercice 5 : Une fonction qui prend en paramètre un id de livre et renvoie une chaîne de caractères
// La fonction doit renvoyer une chaîne de caractères qui décrit le livre et les personnes qui l'ont emprunté, par exemple : "Les Misérables, écrit par Victor Hugo en 1862, a été emprunté par les personnes avec les id."