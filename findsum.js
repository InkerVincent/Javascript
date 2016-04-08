有一个已经升序排序好的数组，检查数组中是否存在二个数，它们的和正好为x ？
//5.33 递归实现
//A为[1..n]已经排好序的数组
//x为要测试的和
//如果存在二个数的和为x，则返回true，否则返回false
function sumX(A, i, j, x) {
  if (i >= j) {
    return false;
  }
  if (A[i] + A[j] == x) {
    return true;
  }
  else if (A[i] + A[j] < x) {
    //i后移
    return sumX(A, i + 1, j, x);
  }
  else {
    //j前移
    return sumX(A, i, j - 1, x);
  }
}
var A = [1, 2, 3, 4, 5, 6, 7, 8];
var test1 = sumX(A,0,A.length-1,9);
alert(test1); //返回true
