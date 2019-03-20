"use strict";
(function(exports){

  function Note(text){
    var text = text;

function getText() {
    return text;
  }

  return {
    getText: getText
  }
}
  exports.Note = Note;

})(this);
