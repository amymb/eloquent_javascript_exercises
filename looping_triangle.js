var pound = []
for(i = 0; i < 7; i++){
  pound.push("#");
  console.log(pound.join(''))
}

var pound = []
var i = 0
while (i<7){
  pound.push("#");
  console.log(pound.join(''));
  i+=1
}

var pound = []
var i = 0
do {
  pound.push ("#")
  console.log(pound.join(""))
  i +=1
} while (i < 7);

// the following solutions came after I looked at the eloquent javascript website solution
// I was thinking too much of string concatenation, but the .length thing is better

var pound = "#"
while(pound.length < 8){
 console.log(pound);
 pound += "#";
}

for(pound = "#"; pound.length < 8; pound+= "#")
  console.log(pound);

var pound = "#"
do{
  console.log(pound)
  pound +="#"
} while(pound.length <8);
