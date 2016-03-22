//线性搜索(入门HelloWorld)
//A为数组，x为要搜索的值
function linearSearch(A, x) {
  for (var i = 0; i < A.length; i++) {
    if (A[i] == x) {
      return i;
    }
  }
  return -1;
}
//二分查找(又称折半查找) - 适用于已排好序的线性结构 - 时间复杂度O(logN)
//二分搜索
//A为已按"升序排列"的数组，x为要查询的元素
//返回目标元素的下标
function binarySearch(A, x) {
  var low = 0, high = A.length - 1;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2); //下取整   
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
