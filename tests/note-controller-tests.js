(function(exports){
  function testThatAControllerGetsInstantiatedAndItSetsTheRightHTMLStringOnTheRightDOMElement() {
    function NoteDouble(text) {}
    NoteDouble.prototype = {
      getText: function(){
        return "First Text"
      }
    }

    noteListDouble = {
                        notes: [],
                        getNotes: function(){
                                    return this.notes
                                  },
                        storeNote: function(note){
                          this.notes.push(note)
                        }
                    }
    function NoteListViewDouble(noteList) {
                    }
    NoteListViewDouble.prototype = {
      view: function(){
              return "<ul><li><div>First Text</div></li></ul>"
      }
    }
    controller = new NoteController(noteListDouble, NoteListViewDouble, NoteDouble)
    controller.updateWindow()

    assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>First Text</div></li></ul>")

  };
  testThatAControllerGetsInstantiatedAndItSetsTheRightHTMLStringOnTheRightDOMElement();
})(this);
