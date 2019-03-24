(function(exports){
  function testThatAControllerGetsInstantiatedAndItSetsTheRightHTMLStringOnTheRightDOMElement() {
    function NoteDouble(text) {}


    noteListDouble = {

                        getNotes: function(){
                                    return this.notes
                                  },
                        storeNote: function(note){

                        }
                    }
    function NoteListViewDouble(noteList) {
                    }
    NoteListViewDouble.prototype = {
      view: function(){
              return '<ul><li><div><a href="#notes/0">First Text</a></div></li></ul>'
      }
    }
    controller = new NoteController(noteListDouble, NoteListViewDouble, NoteDouble)
    controller.updateWindow()
    assert.isTrue(document.getElementById("app").innerHTML === '<ul><li><div><a href="#notes/0">First Text</a></div></li></ul>')

  };
  testThatAControllerGetsInstantiatedAndItSetsTheRightHTMLStringOnTheRightDOMElement();

  function testThatTheSingleNoteViewIsOpenedForTheSelectedNoteWhenItsURLIsClickedOnTheDOM() {
    function NoteDouble2(text) {}
    function NoteListViewDouble2(noteList) {}
    noteListDouble2 = {

                        getNotes: function(){
                          return [{ id: 0,
                                    getText: function(){
                                      return "A long text that is more than 20 characters"
                                                    }
                                      }]
                                  },
                        storeNote: function(note){

                        }
                    }
    controller = new NoteController(noteListDouble2, NoteListViewDouble2, NoteDouble2)
    async function getResponseFromLinkClick(){
      let promise = new Promise(function(resolve, reject){
        document.links[0].click();

        setTimeout(() => resolve(true), 100)
      });
      let result = await promise;
      assert.isTrue(document.getElementById("app").innerHTML === '<div>A long text that is more than 20 characters</div>')
    }

    getResponseFromLinkClick();

  };
  testThatTheSingleNoteViewIsOpenedForTheSelectedNoteWhenItsURLIsClickedOnTheDOM();
})(this);
