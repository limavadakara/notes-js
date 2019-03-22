"use strict";

(function(exports){

  function NoteController(noteList, NoteListView, Note){
    var noteList = noteList;
    var noteFunction = Note
    var noteListViewFunction = NoteListView
    var note = new Note("Favourite drink: seltzer")
    noteList.storeNote(note)
    function updateWindow(){
      var noteListView = new NoteListView(noteList)
      document.getElementById("app").innerHTML = noteListView.view()
    }

    return {
      updateWindow: updateWindow
    }
  }
  exports.NoteController = NoteController;
})(this);
