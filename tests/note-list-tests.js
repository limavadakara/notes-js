(function(exports){
  function testNoteListIsInstantiatedWithAnEmptyArray() {
    var noteList = new NoteList();
    assert.isTrue(Array.isArray(noteList.getNotes()));
    assert.isTrue(noteList.getNotes().length === 0);
  };
  testNoteListIsInstantiatedWithAnEmptyArray();

  function testNoteListCreatesAndStoresANoteInItsArray() {
    var noteList = new NoteList();
    noteList.storeNote("A new note");
    testNote = noteList.getNotes().shift();
    assert.isTrue(testNote.getText() === "A new note");
  }
  testNoteListCreatesAndStoresANoteInItsArray();
})(this);
