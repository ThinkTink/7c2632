function useSearch(movies, titleKeyword, setKeywords) {
  if (setKeywords.length !== 0) {
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(titleKeyword.toLowerCase()) &&
        movie.genre.includes(setKeywords.toString())
      // movie.title.toLowerCase().includes(titleKeyword.toLowerCase())
    );
  } else {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(titleKeyword.toLowerCase())
    );
  }
}

export default useSearch;
