//插入排序 -- 时间复杂度O(n^2)
//插入排序
//假定当前元素之前的元素已经排好序，先把自己的位置空出来，
//然后前面比自己大的元素依次向后移，直到空出一个"坑"，
//然后把目标元素插入"坑"中
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
