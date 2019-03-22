(function(exports){
  function testNoteListIsInstantiatedWithAnEmptyArray() {
    var noteList = new NoteList();
    assert.isTrue(Array.isArray(noteList.getNotes()));
    assert.isTrue(noteList.getNotes().length === 0);
  };
  testNoteListIsInstantiatedWithAnEmptyArray();

  function testNoteListCreatesAndStoresANoteInItsArray() {
    var noteDouble = {
                  getText: function(){
                      return "A new note"
                  }
              }
    var noteList = new NoteList();
    noteList.storeNote(noteDouble);
    
    assert.isTrue(noteList.getNotes().shift().getText() === "A new note");
  }
  testNoteListCreatesAndStoresANoteInItsArray();
})(this);
