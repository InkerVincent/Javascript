再来看看经典的多项式求值问题：
给定一串实数An，An-1，...，A1，A0 和一个实数X，计算多项式Pn(x)的值
著名的Horner公式：
已经如何计算：
显然有：
这样只需要 N次乘法+N次加法
//多项式求值
//N次乘法+N次加法搞定，伟大的改进！
function horner(A, x) {
  var n = A.length - 1
  var p = A[n];
  for (var j = 0; j < n; j++) {
    p = x * p + A[n - j - 1];
  }
  return p;
}
//计算: y(2) = 3x^3 + 2x^2 + x -1;
var A = [-1, 1, 2, 3];
var y = horner(A, 2);
alert(y);//33
