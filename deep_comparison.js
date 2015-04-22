//I wrote the following, but (a) knew it wouldn't work on any  object but arrays and
// (b) found it difficult to integrate the "for" loop into the if/else statements (I wanted an
// else statement with "true" to come after the for loop had finished -- i.e. if this is the case,
//loop through everything, if none of those hits, then true.)
var deepEqual = function(value1, value2){
  var i;
  if(value1 === value2) return true;
  else if (value1 === null || value2===null){return false;}
  else if (typeof(value1) && typeof(value2) === 'object'){

    if (value1.length != value2.length){return false;}
    for(i=0; i < value1.length; i+=1){
      if (value1[i] != value2[i]){
        return deepEqual(value1[i], value2[i]);
      }
    }return true;
  }else{return false;}
};


var deepEqual = function(value1, value2){
  if (value1 === value2) return true;
  else if (value1 === null || value2===null){return false;}
  var value1cont = 0
}
