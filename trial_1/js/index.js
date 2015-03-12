$(document).ready(function() {
  Dymtro.init();
  resizeLanding();


  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-fixed-top").css('backgroundColor',"white");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-fixed-top").css('backgroundColor',"transparent");
    }
});








});


function resizeLanding() {
  $(window).resize(function(){
    $("#landing-box").height($(window).height())
  }).resize();
}

var Dymtro = (function () {
  var api = {};
  var $boxes = null;
  var watchers = [];
  var currentColor = null;

  api.init = function() {
    $boxes = document.querySelectorAll( '.box-intro' );

    for (var i = 0; i < $boxes.length; i++) {
      watchers.push = api.createWatcher( $boxes[i] );
    }

  };

  api.createWatcher = function( element ) {
    var watcher = scrollMonitor.create( element );
    var elementColor = element.getAttribute( "data-color" );

    watcher.stateChange( function() {
      if (!watcher.isFullyInViewport) {
        return
      } else if (currentColor !== elementColor) {
        currentColor = elementColor;
        api.changeBodyClass();
      }
    });
  };

  api.changeBodyClass = function( ) {
    // $parent = document.querySelectorAll('.parent');
    // $parent.style.backgroundColor = currentColor;
    document.body.style.backgroundColor = currentColor;
  };

  return api;

})();

