(function(exports){
  function testNoteIsInstantiatedWithGivenTextAssert() {
    var note = new Note("My first note");
    assert.isTrue(note.getText() === "My first note")
  };
  testNoteIsInstantiatedWithGivenTextAssert();
})(this);
