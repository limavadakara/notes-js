(function(exports){
  function testNoteListIsInstantiatedWithAnEmptyArray() {
    var noteList = new NoteList();
    assert.isTrue(Array.isArray(noteList.getNotes()));
    assert.isTrue(noteList.getNotes().length === 0);
  };
  testNoteListIsInstantiatedWithAnEmptyArray();

  function testNoteListAssignsAnIdOf0AndStoresASingleNoteInItsArray() {
    var noteDouble = {
                  getText: function(){
                      return "A new note"
                  }
              }
    var noteList = new NoteList();
    noteList.storeNote(noteDouble);
    testNote = noteList.getNotes().shift();
    assert.isTrue(testNote.id === 0);
    assert.isTrue(testNote.getText() === "A new note");
  }
  testNoteListAssignsAnIdOf0AndStoresASingleNoteInItsArray();

  function testNoteListAssignsIdsOf0And1ToTwoNotesAndStoresInItsArray() {
    var noteDouble1 = {
                  getText: function(){
                      return "First note"
                  }
              }
    var noteDouble2 = {
                  getText: function(){
                      return "Second note"
                  }
              }
    var noteList = new NoteList();
    noteList.storeNote(noteDouble1);
    noteList.storeNote(noteDouble2);
    assert.isTrue(noteList.getNotes()[0].id === 0);
    assert.isTrue(noteList.getNotes()[0].getText() === "First note");
    assert.isTrue(noteList.getNotes()[1].id === 1);
    assert.isTrue(noteList.getNotes()[1].getText() === "Second note");
  }
  testNoteListAssignsIdsOf0And1ToTwoNotesAndStoresInItsArray();

})(this);
