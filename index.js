(function(){

  'use strict';

  if (typeof debug !== 'function') {
    window.debug = function() {
      return function() {};
    };
  }

  (function() {
    var log = debug('mouse:move');

    window.onmousemove = function(event) {
      log(event);
    };
  }());

  (function() {
    var log = debug('mouse:down');

    window.onmousedown = function(event) {
      log(event);
    };
  }());

  (function() {
    var log = debug('mouse:up');

    window.onmouseup = function(event) {
      log(event);
    };
  }());

  (function() {
    var log = debug('key:press');

    window.onkeypress = function(event) {
      log(event);
    };
  }());

  (function() {
    var log = debug('key:down');

    window.onkeydown = function(event) {
      log(event);
    };
  }());

  (function() {
    var log = debug('key:up');

    window.onkeyup = function(event) {
      log(event);
    };
  }());

}());
