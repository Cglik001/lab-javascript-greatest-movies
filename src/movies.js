const movies = require("./data");

// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const listDirectors = movies.map(directorName => directorName.director);
    return listDirectors

  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDramaMovies = movies.filter(drama => (drama.director === "Steven Spielberg" && drama.genre.includes('Drama')) );
  return spielbergDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }

 const movieScoreAverage = movies.reduce(function (sum, movieScore) {
   if (typeof movieScore.score === 'number') {
    return sum + movieScore.score;
   }
    return sum
 }, 0);

  return Number((movieScoreAverage / movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
 const dramaMovieList = movies.filter(drama => drama.genre.includes("Drama"));

 return scoresAverage(dramaMovieList)

}




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedMoviesArray = movies.map(movie => movie);

  sortedMoviesArray.sort(function(movie1, movie2) {
    if (movie1.year > movie2.year) {
      return 1;
    }
    else if (movie1.year < movie2.year) {
      return -1;
    }
    else if (movie1.title > movie2.title) {
      return 1;
    }
    else if (movie1.title < movie2.title) {
      return -1;
    }
    else {
      return 0;
    }
  })

  return sortedMoviesArray;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const alphabeticalTitleArray = movies.map(movie => movie.title);

  alphabeticalTitleArray.sort(function (movie1, movie2) {
    return movie1.localeCompare(movie2);
  })

  return alphabeticalTitleArray.splice(0,20);

}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
