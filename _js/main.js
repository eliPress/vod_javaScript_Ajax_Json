$(function(){
    doajax(10);
    createAll();
    declerbtns();
})

function declerbtns(){
    $(".container > button").on("click",function(){
        let getCatId =$(this).data("cat");
        doajax(getCatId);
        
        
    })

    $(close_btn_dark).on("click",function(){
        $(".dark_window").fadeOut(500);
    })

}


function doajax(_id){
    $(".row").empty();
    $(".loading").show();
    var myApi = "https://api.themoviedb.org/3/list/"+_id+"?api_key=d4bc3c640586e7f90dc68d8b300247ff&language=en-US";
    $.ajax({
        url:myApi,
        crossDomain:true,
        dataType:"json",
        success:function(json_data){
            console.log(json_data.items);
            createAll(json_data.items);
            $(".loading").fadeOut(500);
    }
})
}
function createAll(json_data){
    for(let i in json_data){
        var item = json_data[i];
        var first = new Movie(id_parent,item.poster_path,item.title,item.popularity,item.vote_average,item.overview);
        first.addtoHtmal();
    }
}