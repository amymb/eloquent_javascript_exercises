

function chessBoard(size){
  for(var i = 0; i < size; ++i){
    var pound1 = "";
    var pound2 = "";
    var combo ="";
    if (i%2==0){
      while (pound1.length < size) {
          pound1 += "# ";
      }
      combo += (pound1);
    }else{
      while (pound2.length < size){
        pound2 += " #";
      }
      combo += (pound2);
    }
    console.log(combo);
  }
}

 chessBoard(8);




function chessBoard2(size){
  var i;
  var pound1;
  var pound2;

  for(i = 0; i < size; ++i){
    if (i%2==0){
      for(pound1 = "# "; pound1.length < size; pound1 += "# "){}
    console.log(pound1);
    }else{
      for(pound2 = " #"; pound2.length < size; pound2 += " #"){}
    console.log(pound2);
    }
  }
}

chessBoard2(24);
