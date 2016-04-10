//5.33 非递归实现
function sumX2(A, x) {
  var i = 0, j = A.length - 1;
  while (i < j) {
    if (A[i] + A[j] == x) {
      return true;
    }
    else if (A[i] + A[j] < x) {
      //i后移
      i++;
    }
    else {
      //j前移
      j--;
    }
  }
  return false;
}
var A = [1, 2, 3, 4, 5, 6, 7, 8];
var test2 = sumX2(A,9);
alert(test2);//返回true
