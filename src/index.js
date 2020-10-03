
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix == [] || matrix == null ) {
    return [];
  }
  let arr = [];
  let k =0;
  matrix.forEach(element => {
    k++;
    if (k % 2 ==0){
      element = element.reverse()
    }
    Array.prototype.push.apply(arr,element);
  });
  return arr;
}
