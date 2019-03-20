"use strict";
(function(exports){
  var listOfNotes;

  function NoteListView(noteList){
    listOfNotes = noteList;
  };
  NoteListView.prototype.view = function(){
      var htmlStringArray = [];
      htmlStringArray.push("<ul>")
      listOfNotes.getNotes().forEach(function(note){
        htmlStringArray.push("<li><div>".concat(note.getText()).concat("</div></li>"));
      })
      htmlStringArray.push("</ul>");
      return htmlStringArray.join("");

  }
  exports.NoteListView = NoteListView;
})(this);
