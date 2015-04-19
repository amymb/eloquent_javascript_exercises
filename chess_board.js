

function chessBoard(size){
  for(var i = 0; i < size; ++i){
    var pound1 = "";
    var pound2 = "";
    if (i%2==0){
      while (pound1.length < size) {
          pound1 += "# ";
      }
      console.log(pound1);
    }else{
      while (pound2.length < size){
        pound2 += " #";
      }
      console.log(pound2);
    }
  }
}

 chessBoard(8)


function chessBoard2(size){
  for(var i = 0; i < size; ++i){
  if (i%2==0){
    for(var pound1 = "# "; pound1.length<size; pound1+="# "){
      pound1
      }
  console.log(pound1)
    }else{
    for(var pound2 = " #"; pound2.length<size; pound2+=" #"){
      pound2
      }
  console.log(pound2)
    }
  }
}

chessBoard2(24)
