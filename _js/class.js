function Movie(id_parent,_poster_path,_title,_popularity,_vote_average,_overview){
this.parent = id_parent;
this.poster_path = _poster_path;
this.title = _title;
this.popularity = _popularity;
this.vote_average = _vote_average;
this.overview = _overview;

}

Movie.prototype.addtoHtmal = function(){
    var newBox = $("<div class='col-6 border p-2'></div>");
    $(this.parent).append(newBox);

    var imgUrl ="https://image.tmdb.org/t/p/w500/";
    $(newBox).append(`<img width='25%' class='float-left mr-2' src='${imgUrl+this.poster_path}'>`);
    $(newBox).append("<h2>"+this.title+"</h2>");
    $(newBox).append("<p>"+this.popularity+"</p>")
    $(newBox).append("<p>"+this.vote_average+"</p>")

$(newBox).on("click",function(){
    $(".dark_window").fadeIn(500);
    $(".dark_window").css("display", "flex");
    $("#id_img_dark").attr("src",`${imgUrl+this.poster_path}`);
    $("#id_h2_dark").text(`${this.title}`);
    $("#id_p_dark").text(`${this.overview}`)
}.bind(this))
  
}