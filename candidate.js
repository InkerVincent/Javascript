多数问题：
一个元素个数为n的数组，希望快速找出其中大于出现次数>n/2的元素（该元素也称为多数元素）。通常可用于选票系统，快速判定某个候选人的票数是否过半。最优算法如下：
//找出数组A中“可能存在”的多数元素
function candidate(A, m) {
  var count = 1, c = A[m], n = A.length - 1;
  while (m < n && count > 0) {
    m++;
    if (A[m] == c) {
      count++;
    }
    else {
      count--;
    }
  }
  if (m == n) {
    return c;
  }
  else {
    return candidate(A, m + 1);
  }
}
//寻找多数元素
//时间复杂度O(n)
function majority(A) {
  var c = candidate(A, 0);
  var count = 0;
  //找出的c，可能是多数元素，也可能不是，
  //必须再数一遍，以确保结果正确
  for (var i = 0; i < A.length; i++) {
    if (A[i] == c) {
      count++;
    }
  }
  //如果过半，则确定为多数元素
  if (count > Math.floor(A.length / 2)) {
    return c;
  }
  return null;
}
var m = majority([3, 2, 3, 3, 4, 3]);
alert(m);
