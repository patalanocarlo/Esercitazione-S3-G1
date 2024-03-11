/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
const Concatenazione = function (Param1, Param2) {
  const PrimiCaratteri = Param1.substring(0, 2);
  const SecondiCaratteri = Param2.substring(Param2.length - 3);
  const Concateno = PrimiCaratteri + SecondiCaratteri;
  const RisultatoInMaiuscolo = Concateno.toUpperCase();
  console.log(RisultatoInMaiuscolo);
};
const Param1 = "Ciao";
const Param2 = "Mondo";
Concatenazione(Param1, Param2);
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
const NumeriCasuali = function () {
  const GeneraNumeriCasuali = [];
  for (let i = 0; i <= 10; i++) {
    const numero = Math.floor(Math.random() * 101);
    GeneraNumeriCasuali.push(numero);
  }
  return GeneraNumeriCasuali;
};
const arrayGeneratore = NumeriCasuali();
console.log(arrayGeneratore);
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
const valore = function () {
  const Pari = arrayDiNumeri.filter((numero) => numero % 2 === 0);
  return Pari;
};
const arrayDiNumeri = [(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)];
const soloPari = valore(arrayDiNumeri);
console.log(arrayDiNumeri);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const sommatoria = function () {
  let somma = 0;
  variArray.forEach((numero) => {
    somma += numero;
  });
  return somma;
};
const variArray = [1, 2, 3, 4];
const risultatoSomma = sommatoria(variArray);
console.log(risultatoSomma);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const reduce = function (numbers) {
  const unAltraSomma = numbers.reduce((acc, numero) => acc + numero, 0);
  return unAltraSomma;
};

const numbers = [2, 7, 19, 20, 50];
const Finale = reduce(numbers);
console.log(Finale);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
const value = function () {
  const incrementoValue = valueNumbers.map((numero) => numero + n);
  return incrementoValue;
};
const n = 10;
const valueNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const valoreFinale = value(valueNumbers, n);
console.log(valoreFinale);
/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const lunStrin = function () {
  const lunghezz = arrayString.map((stringa) => stringa.length);
  return lunghezz;
};
const arrayString = ["EPICODE", "is", "great"];
const lunghezz = lunStrin(arrayString);
console.log(lunghezz);
/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
const valArrayDispari = function () {
  const arrayVari = [];
  for (let i = 1; i <= 99; i += 2) {
    arrayVari.push(i);
  }
  return arrayVari;
};
const arrayDispari = valArrayDispari();
console.log("Adesso genero i valori dispari ", arrayDispari);
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function trovaFilmPiuVecchio(movies) {
  let filmPiuVecchio = movies[0]; // Assume che il primo film sia il più vecchio

  movies.forEach((film) => {
    // Confronta gli anni dei film e aggiorna il film più vecchio se necessario
    if (parseInt(film.Year) < parseInt(filmPiuVecchio.Year)) {
      filmPiuVecchio = film;
    }
  });

  return filmPiuVecchio;
}

// Utilizzo della funzione
const filmPiuVecchio = trovaFilmPiuVecchio(movies);
console.log("Il film più vecchio è:", filmPiuVecchio.Title);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
const numeriFilm = function (movies) {
  return movies.length;
};
const numFilm = numeriFilm(movies);
console.log("Il numero dei film è:", numFilm);
/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
const TitoliFilm = function (movies) {
  return movies.map((film) => film.Title);
};
const titoliDeiFilm = TitoliFilm(movies);
console.log("Titoli dei film:", titoliDeiFilm);
/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
const FilmMillennio = function () {
  const annoCorrente = new Date().getFullYear(); //ottengo l'anno corrente...
  return movies.filter(
    (film) => parseInt(film.Year) >= 2000 && parseInt(film.Year) <= annoCorrente
  );
};
const FilmDelNostroMillennio = FilmMillennio(movies);
console.log("I film sono:", FilmDelNostroMillennio);
/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
const ProduzioneFilm = function (movies) {
  return movies.reduce((somma, film) => somma + parseInt(film.Year), 0);
};
const sommaAnni = ProduzioneFilm(movies);
console.log(sommaAnni);
/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
function trovaFilmPerImdbID(movies, imdbID) {
  return movies.find((film) => film.imdbID === imdbID);
}
const imdbIDDaCercare = "tt4154796";
const filmTrovato = trovaFilmPerImdbID(movies, imdbIDDaCercare);

if (filmTrovato) {
  console.log("Film trovato:", filmTrovato);
} else {
  console.log("Nessun film trovato con l'IMDb ID specificato.");
}
const fornito = (imdbID = "tt4154796");
/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
function trovaIndicePrimoFilmPerAnno(movies, anno) {
  return movies.findIndex((film) => film.Year === anno.toString());
}

// Utilizzo della funzione per trovare l'indice del primo film uscito nell'anno specificato
const annoDaCercare = 2000;
const indicePrimoFilm = trovaIndicePrimoFilmPerAnno(movies, annoDaCercare);

if (indicePrimoFilm !== -1) {
  console.log(
    `L'indice del primo film uscito nell'anno ${annoDaCercare} è: ${indicePrimoFilm}`
  );
} else {
  console.log(`Nessun film trovato uscito nell'anno ${annoDaCercare}.`);
}
const annoUscita = 2000;
