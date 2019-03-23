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
        return [{ id: 0,
                  getText: function(){
                    return "A note"
                                  }
                    }]
                  }
                }
    var noteListView = new NoteListView(noteListDouble);
    assert.isTrue(noteListView.view() === "<ul><li><div><a href='#notes/0'>A note</a></div></li></ul>")
  }
  testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasOneNote();

  function testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasThreeNotes(){

    var noteListDouble = {
      getNotes: function(){
        return [{ id: 0,
                  getText: function(){
                    return "First note"
                                  }
                    },
                { id: 1,
                  getText: function(){
                    return "Second note"
                                  }
                    },
                { id: 2,
                  getText: function(){
                    return "Third note"
                                  }
              }]
            }
        }
    var noteListView = new NoteListView(noteListDouble);
    assert.isTrue(noteListView.view() === "<ul><li><div><a href='#notes/0'>First note</a></div></li><li><div><a href='#notes/1'>Second note</a></div></li><li><div><a href='#notes/2'>Third note</a></div></li></ul>")
  }
  testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasThreeNotes();

  function testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasOneNoteWithTextLongerThan20Chars(){
    var noteListDouble = {
      getNotes: function(){
        return [{ id: 0,
                  getText: function(){
                    return "A note that has more than 20 characters is not ver difficult to build"
                                  }
                    }]
                  }
                }
    var noteListView = new NoteListView(noteListDouble);
    assert.isTrue(noteListView.view() === "<ul><li><div><a href='#notes/0'>A note that has more</a></div></li></ul>")
  }
  testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasOneNoteWithTextLongerThan20Chars();
})(this);
