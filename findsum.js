��һ���Ѿ���������õ����飬����������Ƿ���ڶ����������ǵĺ�����Ϊx ��
//5.33 �ݹ�ʵ��
//AΪ[1..n]�Ѿ��ź��������
//xΪҪ���Եĺ�
//������ڶ������ĺ�Ϊx���򷵻�true�����򷵻�false
function sumX(A, i, j, x) {
  if (i >= j) {
    return false;
  }
  if (A[i] + A[j] == x) {
    return true;
  }
  else if (A[i] + A[j] < x) {
    //i����
    return sumX(A, i + 1, j, x);
  }
  else {
    //jǰ��
    return sumX(A, i, j - 1, x);
  }
}
var A = [1, 2, 3, 4, 5, 6, 7, 8];
var test1 = sumX(A,0,A.length-1,9);
alert(test1); //����true
