(function(exports){
  function testThatNoteListViewReturnsTheRightHtmlforAnEmptyNoteList(){
    var noteList = new NoteList();

    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.view() === "<ul></ul>")
  }
  testThatNoteListViewReturnsTheRightHtmlforAnEmptyNoteList();

  function testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasOneNote(){
    var noteListDouble = {
      getNotes: function(){
        return [{
                  getText: function(){
                    return "A note"
                                  }
                    }]
                  }
                }
    var noteListView = new NoteListView(noteListDouble);
    assert.isTrue(noteListView.view() === "<ul><li><div>A note</div></li></ul>")
  }
  testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasOneNote();

  function testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasThreeNotes(){

    var noteListDouble = {
      getNotes: function(){
        return [{
                  getText: function(){
                    return "First note"
                                  }
                    },
                {
                  getText: function(){
                    return "Second note"
                                  }
                    },
                {
                  getText: function(){
                    return "Third note"
                                  }
              }]
            }
        }
    var noteListView = new NoteListView(noteListDouble);
    assert.isTrue(noteListView.view() === "<ul><li><div>First note</div></li><li><div>Second note</div></li><li><div>Third note</div></li></ul>")
  }
  testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasThreeNotes();
})(this);
