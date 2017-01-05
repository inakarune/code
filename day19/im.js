/*
var get_pictures = function(searchTerm){
  $.ajax({
  url: "https://api.imgur.com/3/gallery/search?q=" + encodeURI(searchTerm),
  headers: { "Authorization": "Client-ID e3776adbe9c5fb9"},
  success: function(response){
    var array = response.data;
    console.log("array :::", array);
    for(var i = 0; i < array.length; i++){
      var obj = array[i];
      var imageLink = obj.mp4;
      var videoTag = '<video width="320" height="240" controls></video>';
      var $source = $('<source type="video/mp4">').attr('src', videoLink);
      $source.appendTo(videoTag).parent('video').appendTo('body');

    }
  }
  });
};
*/


var get_pictures = function(searchTerm){
  $.ajax({
  url: "https://api.imgur.com/3/gallery/search?q=" + encodeURI(searchTerm),
  headers: { "Authorization": "Client-ID e3776adbe9c5fb9"},
  success: function(response){
    var array = response.data;
    console.log("array :::", array);
    for(var i = 0; i < array.length; i++){
      var firstObj = array[i];
      var gifLink = firstObj.link;
      var $img = $('<img>').attr('src', gifLink);
      $('body').append($img);

    }
  }
  });
};
// get_pictures('baby deer');

$('button').click(function (){
  var text = $('input').val();
  get_pictures(text);
});
