var buildAlbumThumbnail = function() {
    var template =
        '<div class="collection-album-container col-md-2">'
      + '   <div class="collection-album-image-container">'
      + '    <img src="/images/album-placeholder.png"/>'
   	  + '  </div>'
      + '  <div class="caption album-collection-info">'
      + '    <p>'
      + '      <a class="album-name" href="/album.html"> Album Name </a>'
      + '      <br/>'
      + '      <a href="/album.html"> Artist name </a>'
      + '      <br/>'
      + '      X songs'
      + '      <br/>'
      + '    </p>'
      + '  </div>'
      + '</div>';
 
   return $(template);
 };
 
   var buildAlbumOverlay = function(albumURL) {
    var template =
        '<div class="collection-album-image-overlay">'
      + '  <div class="collection-overlay-content">'
      + '    <a class="collection-overlay-button" href="' + albumURL + '">'
      + '      <i class="fa fa-play"></i>'
      + '    </a>'
      + '    &nbsp;'
      + '    <a class="collection-overlay-button">'
      + '      <i class="fa fa-plus"></i>'
      + '    </a>'
      + '  </div>'
      + '</div>'
      ;
    return $(template);
  };
 
  var updateCollectionView = function() {
   var $collection = $(".collection-container .row");
   $collection.empty();
   var total = 0;
   while (total < 25) {
	   total = Math.random() * 100;
   }
   
   total = Math.floor(total);
   

   for (var i = 0; i < total; i++) {
     var $newThumbnail = buildAlbumThumbnail();
     $collection.append($newThumbnail);
   }
   
   var onHover = function(event) {
	   $(this).append(buildAlbumOverlay("/album.html"));
   };
   
   var offHover = function(even) {
	   $(this).find('.collection-album-image-overlay').remove();
   }
   
   $collection.find('.collection-album-image-container').hover(onHover, offHover);
 };
  
 if (document.URL.match(/\/collection.html/)) {
   // Wait until the HTML is fully processed.
   $(document).ready(function() {
	   updateCollectionView();
    });
 }