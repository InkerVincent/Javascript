//冒泡排序 时间复杂度O(n^2)
function bubbleSort(A) {
  for (var i = 0; i < A.length; i++) {
    var sorted = true;
  //注意：内循环是倒着来的
    for (var j = A.length - 1; j > i; j--) {
      if (A[j] < A[j - 1]) {
        swap(A, j, j - 1);
        sorted = false;
      }
    }
    if (sorted) {
      return;
    }
  }
}
