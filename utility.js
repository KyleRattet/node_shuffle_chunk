var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


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

console.log(chunk(shuffle(inputArray), 3));
