
const numberFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

 const personalMoviesBd= {
    count: numberFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
 };

 const a= prompt("Один из послених просмотренных фильмов:", ''),
       b= prompt("На сколько оцените его"),
       c= prompt("Один из послених просмотренных фильмов:", ''),
       d= prompt("На сколько оцените его");

       personalMoviesBd.movies[a]=b;
       personalMoviesBd.movies[c]=d;

       console.log(personalMoviesBd);