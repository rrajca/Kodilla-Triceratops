var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
var textNew = text.replace("Velociraptor", dinosaur.toUpperCase() );
var textNewHalf = textNew.length/2;

console.log(textNew.substr(0, textNewHalf));