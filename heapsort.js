堆排序：
这是一种思路非常巧妙的排序算法，精华在于充分利用了“堆”这种数据结构本身的特点（首元素必然最大），而且每个元素的上移、下调，时间复试度又比较低，仅为O(logN)，空间上，也无需借助额外的存储空间，仅在数组自身内部交换元素即可。
思路：
1、先将首元素(即最大元素)与最末尾的元素对调---目的在于，把最大值沉底，下一轮重就不再管它了
2、经过1后，剩下的元素通常已经不再是一个堆了。这时，只要把新的首元素用siftDown下调，调整完以后，新的最大值元素自然又上升到了首元素的位置
3、反复1、2，大的元素逐一沉底，最后整个数组就有序了。
时间复杂度分析：创建堆需要O(n)的代价，每次siftDown代价为O(logN)，最多调整n-1个元素，所以总代价为 O(N) + (N-1)O(logN)，最终时间复杂度为O(NLogN)

代码：
//堆中的节点下移
//(约定有效元素从下标1开始)
//i为要调整的元素索引
//n为待处理的有效元素下标范围上限值
//时间复杂度O(logN)
function siftDown(H, i, n) {
  if (n >= H.length) {
    n = H.length;
  }
  if (2 * i > n) { //叶子节点，就不用再向下移了
    return;
  }
  for (var j = 2 * i; j < n; j = 2 * j) {
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
//对数组的前n个元素进行创建堆的操作
function makeHeap(A, n) {
  if (n >= A.length) {
    n = A.length;
  }
  for (var i = Math.floor(n / 2); i >= 1; i--) {
    siftDown(A, i, n);
  }
}
//堆排序(非降序排列)
//时间复杂度O(nlogN)
function heapSort(H) {
  //先建堆
  makeHeap(H, H.length);
  for (var j = H.length - 1; j >= 2; j--) {
    //首元素必然是最大的
    //将最大元素与最后一个元素互换，
    //即将最大元素沉底，下一轮不再考虑
    var x = H[1];
    H[1] = H[j];
    H[j] = x;
    //互换后，剩下的元素不再满足堆定义，
    //把新的首元素下调(以便继续维持堆的"形状")
    //调整完后，剩下元素中的最大值必须又浮到了第一位
    //进入下一轮循环
    siftDown(H, 1, j - 1);
  }
  return H;
}
关于建堆，如果明白其中的原理后，也可以逆向思路，反过来做
function makeHeap2(A, n) {
  if (n >= A.length) {
    n = A.length;
  }
  for (var i = Math.floor(n / 2); i <= n; i++) {
    siftUp(A, i);
  }
}
不相交集合查找、合并
//定义节点Node类
var Node = function (v, p) {
    this.value = v; //节点的值
    this.parent = p; //节点的父节点
    this.rank = 0; //节点的秩(默认为0)    
}
//查找包含节点x的树根节点 
var find = function (x) {
    var y = x;
    while (y.parent != null) {
      y = y.parent;
    }
    var root = y;
    y = x;
    //沿x到根进行“路径压缩”
    while (y.parent != null) {
      //先把父节点保存起来，否则下一行调整后，就弄丢了
      var w = y.parent;
      //将目标节点挂到根下
      y.parent = root;
      //再将工作指针，还原到 目标节点原来的父节点上，
      //继续向上逐层压缩
      y = w
    }
    return root;
}
//合并节点x，y对应的两个树
//时间复杂度O(m) - m为待合并的子集合数量
var union = function (x, y) {
    //先找到x所属集合的根
    var u = find(x);
    //再找到y所属集合的根
    var v = find(y);
    //把rank小的集合挂到rank大的集合上
    if (u.rank <= v.rank) {
      u.parent = v;
      if (u.rank == v.rank) {
        //二个集合的rank不分伯仲时
        //给"胜"出方一点奖励，rank+1
        v.rank += 1;
      }
    }
    else {
      v.parent = u;
    }
}
