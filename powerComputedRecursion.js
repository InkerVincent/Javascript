//计算x的m次幂（递归实现）
//时间复杂度O(logn)
function expRec(x, m) {
  if (m == 0) {
    return 1;
  }
  var y = expRec(x, Math.floor(m / 2));
  y = y * y;
  if (m % 2 != 0) {
    y = x * y
  }
  return y;
}
