var Dymtro = (function () {

  var api = {};
  var $boxes = null;
  var watchers = [];
  var currentColor = null;

  api.init = function() {
    $boxes = document.querySelectorAll( '.box' );

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
    document.body.style.backgroundColor = currentColor;
  };

  return api;

})();

$(document).ready(function() {
  Dymtro.init();
});
