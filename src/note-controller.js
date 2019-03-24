"use strict";

(function(exports){

  function NoteController(noteList, NoteListView, Note){
    var noteList = noteList;
    var noteFunction = Note
    var noteListViewFunction = NoteListView
    var note = new Note("Favourite drink: seltzer")
    noteList.storeNote(note)
    listen();
    function listen(){
      window.addEventListener("hashchange", function(){
      var noteHashToDisplay = window.location.hash
      var noteIdToShow = parseInt(noteHashToDisplay.slice(-1), 10)
      var noteToShow = noteList.getNotes()[noteIdToShow]
      document.getElementById("app").innerHTML = "<div>"+noteToShow.getText()+"</div>"
      })
    }
    function updateWindow(){
      var noteListView = new NoteListView(noteList)
      document.getElementById("app").innerHTML = noteListView.view()
    }

    return {
      updateWindow: updateWindow,
      listen: listen
    }
  }
  exports.NoteController = NoteController;
})(this);
