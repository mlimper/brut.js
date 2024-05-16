async function initMovieList()
{
  const response = await fetch("movie-list.json");
  const movieDB  = await response.json();

  let parent = brut.q("#movie-table");

  for (entry of movieDB.movies) // for each DB entry
  {    
    let newEntry = {            // define HTML structure
      "tr" : {},   ">" : [
        {"td" : {}, "%": `${entry.name}`},
        {"td" : {}, "%": `${entry.genre}`},
        {"td" : {}, "%": `${entry.rating}`}]
    };
    brut.add(newEntry, parent);  // and append to the DOM.
  }
}
