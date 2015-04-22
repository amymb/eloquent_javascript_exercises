var reverseArray = function(array){
  var i;
  var newArray = [];
  for(i = (array.length-1); i >= 0; i--){
    newArray.push(array[i]);
  };
  return newArray;
};

var reverseArrayInPlace = function(array){
  var i;
  var length = array.length;
  for (i = 1; i < ((length*2)-1); i+=2){
    array.unshift(array[i]);
  };
  return array.slice(0, length);
};
