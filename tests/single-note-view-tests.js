(function(exports){
  function TestThatSingleNoteViewReturnsTheRightHTMLForANote(){
    var noteDouble = {
        getText: function(){
            return "Favourite drink: seltzer"
        }
    }
    singleNoteView = new SingleNoteView(noteDouble);
    assert.isTrue(singleNoteView.view() === "<div>Favourite drink: seltzer</div>")
  }
  TestThatSingleNoteViewReturnsTheRightHTMLForANote();
})(this)
