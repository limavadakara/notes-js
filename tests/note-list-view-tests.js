(function(exports){
  function testThatNoteListViewReturnsTheRightHtmlforAnEmptyNoteList(){
    var noteList = new NoteList();

    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.view() === "<ul></ul>")
  }
  testThatNoteListViewReturnsTheRightHtmlforAnEmptyNoteList();

  function testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasOneNote(){
    var noteList = new NoteList();
    noteList.storeNote("A note");
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.view() === "<ul><li><div>A note</div></li></ul>")
  }
  testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasOneNote();

  function testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasThreeNotes(){
    var noteList = new NoteList();
    noteList.storeNote("First note");

    noteList.storeNote("Second note");
    noteList.storeNote("Third note");
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.view() === "<ul><li><div>First note</div></li><li><div>Second note</div></li><li><div>Third note</div></li></ul>")
  }
  testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasThreeNotes();


})(this);
