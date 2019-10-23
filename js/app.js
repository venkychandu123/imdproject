  let search =document.getElementById('searchtext');
  search.addEventListener('keypress',e=>{
      let searchtext=e.target.value;
      getmovies(searchtext);//calling function claback
  });
  function getmovies(searchtext){
    //   let api=`http://www.omdbapi.com/?s=${searchtext}&apikey=34696847`;
    let api =`http://www.omdbapi.com/?s=${searchtext}&apikey=c3eaaabc`;
      window.fetch(api).then(data => {
//nest step is converting response into json object
//how to convert res obj into json objects..
 let jsondata=data.json();
jsondata.then(movie =>{
   let movies=movie.Search;
   let output='';
    for  (let kkk of movies) {
       output += `
       <h1>${kkk.Title}</h1>
       <p>${kkk.Year}</p>
       <p>${kkk.imdbID}</p>
       <p>${kkk.Type}</p>
       <img src=${kkk.Poster}/>
       `;
document.getElementById('template').innerHTML=output;
       
   }
    //if resolve ecicuting then block..............
}).catch(err =>{
    console.log(err);
})//if rejects excuting catch block....
      }).catch(err=>console.log(err));//fething data from omdb server........................................
  }

  