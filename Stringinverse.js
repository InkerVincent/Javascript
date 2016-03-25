//字符串反转 -- 时间复杂度O(logN)
//字符串反转(比如：ABC -> CBA)
function inverse(s) {
  var arr = s.split('');
  var i = 0, j = arr.length - 1;
  while (i < j) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
    i++;
    j--;
  }
  return arr.join('');
}
