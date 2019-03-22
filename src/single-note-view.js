"use strict";
(function(exports){
  function SingleNoteView(note){
    var note = note;
    function view(){
      return "<div>"+note.getText()+"</div>"
    }
    return {
      view: view
    }
  }
  exports.SingleNoteView = SingleNoteView
})(this)
