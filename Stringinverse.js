//�ַ�����ת -- ʱ�临�Ӷ�O(logN)
//�ַ�����ת(���磺ABC -> CBA)
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
