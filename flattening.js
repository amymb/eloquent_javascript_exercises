var arrays = [[1, 2, 3], [4, 5], [6]];

// var flatten = function(array){
//   var new_array = []
//   array.reduce(function(){
//     for(var i=1; i < array.length; i++){
//       if (typeof array[i] === 'object'){
//         return flatten(array[i]);
//       }else{
//       new_array = array[0].push(array[i]);
//       }
//     }
//   });
//   return new_array
// };


var flattenIt = function(array){
  return array.reduce(function(new_array, b){return new_array.concat(b);}, [])
};
