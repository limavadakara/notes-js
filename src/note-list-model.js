"use strict";
(function(exports){

  function NoteList(){
    var notes = [];
    var id = 0;


    function getNotes() {
      return notes;
    }
    function storeNote(note) {
      note.id = id;
      notes.push(note);
      id += 1;
    }

    return {
      getNotes: getNotes,
      storeNote: storeNote
    }
  }
  exports.NoteList = NoteList;
})(this);
