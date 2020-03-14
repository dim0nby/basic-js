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
   result = result.join('').toUpperCase().split('').sort().join('');
    return result;
  } else {
   return false;
  }
};