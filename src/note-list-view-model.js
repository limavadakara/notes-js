"use strict";
(function(exports){

  function NoteListView(noteList){
    var noteList = noteList;

    function view(){
      var htmlStringArray = [];
      htmlStringArray.push("<ul>")
      noteList.getNotes().forEach(function(note){
        htmlStringArray.push("<li><div>".concat(note.getText().substring(0,20)).concat("</div></li>"));
      })
      htmlStringArray.push("</ul>");

      return htmlStringArray.join("");
    }

    return {
      view: view
    }

}
  exports.NoteListView = NoteListView;
})(this);
