var isEven = function(number){
  if (number === 0)
    console.log("true");
  else if (number === 1)
    console.log("false");
  else if (number > 0)
    isEven(number-2);
  else{
    isEven(number+2);
  }
};
