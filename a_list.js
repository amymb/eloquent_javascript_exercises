var arrayToList = function(array){
  var i;
  var list = null;
  for (i = array[array.length-1] ; i >= 0; i--){
    list = {value: (array[i]), rest: list};
  };
  return list;
};

var listToArray = function(list){
  var array = [];
  for (var node = list; node; node = node.rest){
    array.push(node.value);
  };
  return array;
};

var prepend = function(element, list){
  var newList = {value: element, rest: list};
  return newList;
};

var nth = function (list, number){
  if (list ===null) return undefined;
  if (number === 0){
    return (list.value);
  } else{
    number = (number-1);
    list = list.rest;
    return nth(list, number);
  }
};
