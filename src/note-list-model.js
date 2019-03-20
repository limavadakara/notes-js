"use strict";
(function(exports){

  function NoteList(){
    var notes = [];


    function getNotes() {
      return notes;
    }
    function storeNote(noteText) {
      notes.push((new Note(noteText)));
    }

    return {
      getNotes: getNotes,
      storeNote: storeNote
    }
  }  
  exports.NoteList = NoteList;
})(this);
