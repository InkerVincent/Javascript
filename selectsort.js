//ѡ������ -- ʱ�临�Ӷ�O(n^2)
//ѡ������
//˼·���ҵ���Сֵ���±���������ٽ���
function selectionSort(A) {
  for (var i = 0; i < A.length - 1; i++) {
    var k = i;
    for (var j = i + 1; j < A.length; j++) {
      if (A[j] < A[k]) {
        k = j;
      }
    }
    if (k != i) {
      var t = A[k];
      A[k] = A[i];
      A[i] = t;
      println(A);
    }
  }
  return A;
}
