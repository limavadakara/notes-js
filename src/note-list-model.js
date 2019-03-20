"use strict";
(function(exports){
  var notes;
  function NoteList(){
    notes = [];
  };
  NoteList.prototype.getNotes = function(){
    return notes;
  }

  NoteList.prototype.storeNote = function(noteText){
    
    notes.push((new Note(noteText)));
  }
  exports.NoteList = NoteList;
})(this);
