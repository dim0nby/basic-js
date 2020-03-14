module.exports = function createDreamTeam(arr) {
  var copy = [];
  var result = [];
    
  if (Array.isArray(arr) == true) {
  
  arr.forEach(function(item){
    if (typeof item === 'string') {
        let arr2 = item.split('');
        let a = arr2.find (item => item !== ' ');
        result.push(a);
    
    } 
   })
   result = result.sort();
var name = result.join('').toUpperCase();
var name2 = name.split('').sort().join('');
    return name2;
  } else {
   return false;
  }
};