"use strict";
(function(exports){

  function NoteList(){
    var notes = [];


    function getNotes() {
      return notes;
    }
    function storeNote(note) {
      notes.push(note);
    }

    return {
      getNotes: getNotes,
      storeNote: storeNote
    }
  }
  exports.NoteList = NoteList;
})(this);
