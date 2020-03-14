module.exports = function countCats(arr) {
  function isItCat(value) {
    return value === "^^";
  }
  
  
  let filtered = arr.flat().filter(isItCat);
  
  return(filtered.length)
};
