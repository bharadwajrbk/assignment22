/*BharadwajKanukuntla-8618679*/
var movieArray=[
    {title:"Baahubali",Director:"SS Rajamouli"},
    {title:"Sahoo",Director:"Sujeeth"},
    {title:"Vennala",Director:"Deva Katta"},
    {title:"Kabaali",Director:"Pa. Ranjith"},
    {title:"Panja",Director:"Vishnuvardhan"}
];

const movies = function(req, res){
      res.render('list-display', { movies: movieArray });
    };
    
  

    module.exports = {
        movies    
    };