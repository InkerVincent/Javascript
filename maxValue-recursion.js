�ݹ�ĳ���ͨ��������⣬����Ҳ����ʵ�֣�����������С���ӣ�
�������У��ҳ����ֵ
//�������������ֵ(�ݹ�ʵ��)
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
alert(test);//����9
