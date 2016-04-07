递归的程序通常易于理解，代码也容易实现，再来看二个小例子：
从数组中，找出最大值
//在数组中找最大值(递归实现)
function findMax(A, i) {
  if (i == 0) {
    return A[0];
  }
  var y = findMax(A, i - 1);
  var x = A[i - 1];
  return y > x ? y : x;
}
var A = [1,2,3,4,5,6,7,8,9];
var test = findMax(A,A.length);
alert(test);//返回9
