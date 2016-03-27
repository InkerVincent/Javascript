//选择排序 -- 时间复杂度O(n^2)
//选择排序
//思路：找到最小值的下标记下来，再交换
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
