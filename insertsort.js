//�������� -- ʱ�临�Ӷ�O(n^2)
//��������
//�ٶ���ǰԪ��֮ǰ��Ԫ���Ѿ��ź����Ȱ��Լ���λ�ÿճ�����
//Ȼ��ǰ����Լ����Ԫ����������ƣ�ֱ���ճ�һ��"��"��
//Ȼ���Ŀ��Ԫ�ز���"��"��
function insertSort(A) {
  for (var i = 1; i < A.length; i++) {
    var x = A[i];
    for (var j = i - 1; j >= 0 && A[j] > x; j--) {
      A[j + 1] = A[j];
    }
    if (A[j + 1] != x) {
      A[j + 1] = x;
      println(A);
    }
  }
  return A;
}