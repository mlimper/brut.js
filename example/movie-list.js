async function initMovieList()
{
  const response = await fetch("movie-list.json");
  const movieDB  = await response.json();

  let parent = dom.q("#movie-table");

  for (entry of movieDB.movies) // for each DB entry ...
  {    
    let newEntry = {            // define its DOM tree structure ... 
      "tr" : {},   ">" : [
        {"td" : {}, "%": `${entry.name}`},
        {"td" : {}, "%": `${entry.genre}`},
        {"td" : {}, "%": `${entry.rating}`}]
    };
    dom.add(newEntry, parent);  // and append it to the DOM.
  }
}
