var countBs = function(string){
  var total = 0;
  for(var i = 0; i< string.length; ++i){
    if (string.charAt(i) === "B")
      total += 1;
  };
  return(total);
};

var countChar= function(string, letter){
  var total = 0;
  for(var i = 0; i< string.length; ++i){
    if (string.charAt(i) === letter)
      total += 1;
  };
  return(total);
};
