import { useState } from "react";

export default function useFilter() {
  const [filteredMovies, setFilteredMovies] = useState([]);

  const filterMovies = (movies, languageFilter, searchKeyWord) => {
    if (languageFilter || searchKeyWord) {
      return setFilteredMovies({
        ...movies,
        results: movies?.results
          ?.filter((movie) =>
            languageFilter && languageFilter !== "all"
              ? movie.original_language === languageFilter
              : true
          )
          .filter((movie) =>
            searchKeyWord ? movie.title.includes(searchKeyWord) : true
          )
      });
    }
    return setFilteredMovies(movies);
  };

  return [filteredMovies, filterMovies];
}
