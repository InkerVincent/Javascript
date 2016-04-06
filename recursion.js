归纳法：
先来看二个排序的递归实现
//选择排序的递归实现
//调用示例: selectionSort([3,2,1],0)
function selectionSortRec(A, i) {
  var n = A.length - 1;
  if (i < n) {
    var k = i;
    for (var j = i + 1; j <= n; j++) {
      if (A[j] < A[k]) {
        k = j
      }
    }
    if (k != i) {
      var t = A[k];
      A[k] = A[i];
      A[i] = t;
    }
    selectionSortRec(A, i + 1);
  }
}
//插入排序递归实现
//调用示例:insertSortRec([4,3,2,1],3);
function insertSortRec(A, i) {
  if (i > 0) {
    var x = A[i];
    insertSortRec(A, i - 1);
    var j = i - 1;
    while (j >= 0 && A[j] > x) {
      A[j + 1] = A[j];
      j--;
    }
    A[j + 1] = x;
  }
}
