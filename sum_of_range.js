var range = function(start, end){
  var array = [];
  var i;
  for(i=start; i<=end; i++){
    array.push(i);
  };
  return array;
};

var sum = function(array){
  var total = 0;
  var i;
  for(i=0; i< array.length; i++){
    total += array[i];
  };
  return total;
};

\\bonus!

var betterRange = function(start, end, step){
  var array = [];
  var i;
  function steps(step){
    if (step === undefined){
      i++;
    }else{
      i+=(step);
    };
  };
  if (step >=0){
    for(i = start; i<=end; steps(step)){
      array.push(i);
    };
  }else{
    for(i = start; i>=end; steps(step)){
      array.push(i);
    };
  }
  return array;
};
