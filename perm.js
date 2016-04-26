全排列
function swap(A, i, j) {
  var t = A[i];
  A[i] = A[j];
  A[j] = t;
}
function println(msg) {
  document.write(msg + "<br/>");
}
//全排列算法
function perm(P, m) {
  var n = P.length - 1;
  if (m == n) {
    //完成一个新排列时，输出
    println(P);
    return;
  }
  for (var j = m; j <= n; j++) {
    //将起始元素与后面的每个元素交换
    swap(P, j, m);
    //在前m个元素已经排好的基础上
    //再加一个元素进行新排列
    perm(P, m + 1);
    //把j与m换回来，恢复递归调用前的“现场"，
    //否则因为递归调用前，swap已经将原顺序破坏了，
    //导致后面生成排序时，可能生成重复
    swap(P, j, m);
  }
}
perm([1, 2, 3], 0);
//1,2,3
//1,3,2
//2,1,3
//2,3,1
//3,2,1
//3,1,2
