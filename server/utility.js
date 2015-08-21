//test array
// var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//shuffle function
function shuffle (array) {
  var arrayCopy = array;
  var shuffled = [];
    while (arrayCopy.length > 0){
      var randomIndex = Math.floor(Math.random()*arrayCopy.length);
      shuffled.push(arrayCopy[randomIndex]);
      arrayCopy.splice(randomIndex, 1);
  }
  return shuffled;
}

//chunk function
function chunk (array, size) {
  var numberOfArrays = (array.length)/size;
  // console.log(numberOfArrays);
  var newArray=[];
  for (var i = 0; i < numberOfArrays; i++) {
    // console.log(array);
    newArray.push(array.splice(0, size));
    // console.log(array.splice(0, size));
    // console.log(array);
  }
  return newArray;
}

function shuffleChunk(array, size) {
  var shuffled = shuffle(array);
  return chunk(shuffled, size);
}

function test () {
  return "test";
}

//need to export functions
module.exports = {
 shuffle: shuffle,
 chunk: chunk,
 shuffleChunk: shuffleChunk,
 test: test
};
