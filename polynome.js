������������Ķ���ʽ��ֵ���⣺
����һ��ʵ��An��An-1��...��A1��A0 ��һ��ʵ��X���������ʽPn(x)��ֵ
������Horner��ʽ��
�Ѿ���μ��㣺
��Ȼ�У�
����ֻ��Ҫ N�γ˷�+N�μӷ�
//����ʽ��ֵ
//N�γ˷�+N�μӷ��㶨��ΰ��ĸĽ���
function horner(A, x) {
  var n = A.length - 1
  var p = A[n];
  for (var j = 0; j < n; j++) {
    p = x * p + A[n - j - 1];
  }
  return p;
}
//����: y(2) = 3x^3 + 2x^2 + x -1;
var A = [-1, 1, 2, 3];
var y = horner(A, 2);
alert(y);//33
