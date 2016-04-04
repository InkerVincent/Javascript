根据堆的定义，可以用以下代码测试一个数组是否为堆：
//测试数组H是否为堆
//(约定有效元素从下标1开始)
//时间复杂度O(n)
function isHeap(H) {
  if (H.length <= 1) { return false; }
  var half = Math.floor(H.length / 2); //根据堆的性质，循环上限只取一半就够了
  for (var i = 1; i <= half; i++) {
    //如果父节点，比任何一个子节点 小，即违反堆定义
    if (H[i] < H[2 * i] || H[i] < H[2 * i + 1]) {
      return false;
    }
  }
  return true;
}
节点向上调整siftUp
某些情况下，如果堆中的某个元素值改变后(比如 10,8,9,7 变成 10,8,9,20 后，20需要向上调整 )，不再满足堆的定义，需要向上调整时，可以用以下代码实现
//堆中的节点上移
//(约定有效元素从下标1开始)
function siftUp(H, i) {
  if (i <= 1) {
    return;
  }
  for (var j = i; j > 1; j = Math.floor(j / 2)) {
    var k = Math.floor(j / 2);
    //发现 子节点 比 父节点大，则与父节点交换位置
    if (H[j] > H[k]) {
      var t = H[j];
      H[j] = H[k];
      H[k] = t;
    }
    else {
      //说明已经符合堆定义，调整结束，退出
      return;
    }
  }
}
节点向下调整siftDown (既然有向上调整，自然也有向下调整)
//堆中的节点下移
//(约定有效元素从下标1开始)
//时间复杂度O(logN)
function siftDown(H, i) {
  if (2 * i > H.length) { //叶子节点，就不用再向下移了
    return;
  }
  for (var j = 2 * i; j < H.length; j = 2 * j) {
    //将j定位到 二个子节点中较大的那个上(很巧妙的做法)
    if (H[j + 1] > H[j]) {
      j++;
    }
    var k = Math.floor(j / 2);
    if (H[k] < H[j]) {
      var t = H[k];
      H[k] = H[j];
      H[j] = t;
    }
    else {
      return;
    }
  }
}
向堆中添加新元素
//向堆H中添加元素x
//时间复杂度O(logN)
function insert(H, x) {
  //思路：先在数组最后加入目标元素x
  H.push(x);
  //然后向上推
  siftUp(H, H.length - 1);
}
从堆中删除元素
//删除堆H中指定位置i的元素
//时间复杂度O(logN)
function remove(H, i) {
  //思路：先把位置i的元素与最后位置的元素n交换
  //然后数据长度减1(这样就把i位置的元素给干掉了，但是整个堆就被破坏了)
  //需要做一个决定：最后一个元素n需要向上调整，还是向下调整
  //依据：比如比原来该位置的元素大，则向上调整，反之向下调整
  var x = H[i]; //先把原来i位置的元素保护起来
  //把最后一个元素放到i位置
  //同时删除最后一个元素(js语言的优越性体现!)
  H[i] = H.pop();
  var n = H.length - 1;
  if (i == n + 1) {
    //如果去掉的正好是最后二个元素之一，
    //无需再调整
    return ;
  }
  if (H[i] > x) {
    siftUp(H, i);
  }
  else {
    siftDown(H, i);
  }
}
//从堆中删除最大项
//返回最大值
//时间复杂度O(logN)
function deleteMax(H) {
  var x = H[1];
  remove(H, 1);
  return x;
}
