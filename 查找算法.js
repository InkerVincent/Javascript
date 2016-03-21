//��������(����HelloWorld)
//AΪ���飬xΪҪ������ֵ
function linearSearch(A, x) {
  for (var i = 0; i < A.length; i++) {
    if (A[i] == x) {
      return i;
    }
  }
  return -1;
}
//���ֲ���(�ֳ��۰����) - ���������ź�������Խṹ - ʱ�临�Ӷ�O(logN)
//��������
//AΪ�Ѱ�"��������"�����飬xΪҪ��ѯ��Ԫ��
//����Ŀ��Ԫ�ص��±�
function binarySearch(A, x) {
  var low = 0, high = A.length - 1;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2); //��ȡ��   
    if (x == A[mid]) {
      return mid;
    }
    if (x < A[mid]) {
      high = mid - 1;
    }
    else {
      low = mid + 1;
    }
  }
  return -1;
}
