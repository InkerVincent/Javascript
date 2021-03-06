//单链表实现
<script type="text/javascript">
  function print(msg) {
    document.write(msg);
  }
  function println(msg) {
    print(msg + "<br/>");
  }
  //节点类
  var Node = function (v) {
    this.data = v; //节点值
    this.next = null; //后继节点
  }
  //单链表
  var SingleLink = function () {
    this.head = new Node(null); //约定头节点仅占位，不存值
    //插入节点
    this.insert = function (v) {
      var p = this.head;
      while (p.next != null) {
        p = p.next;
      }
      p.next = new Node(v);
    }
    //删除指定位置的节点
    this.removeAt = function (n) {
      if (n <= 0) {
        return;
      }
      var preNode = this.getNodeByIndex(n - 1);
      preNode.next = preNode.next.next;
    }
    //取第N个位置的节点(约定头节点为第0个位置)
    //N大于链表元素个数时，返回最后一个元素
    this.getNodeByIndex = function (n) {
      var p = this.head;
      var i = 0;
      while (p.next != null && i < n) {
        p = p.next;
        i++;
      }
      return p;
    }
    //查询值为V的节点，
    //如果链表中有多个相同值的节点，
    //返回第一个找到的
    this.getNodeByValue = function (v) {
      var p = this.head;
      while (p.next != null) {
        p = p.next;
        if (p.data == v) {
          return p;
        }
      }
      return null;
    }
    //打印输出所有节点
    this.print = function () {
      var p = this.head;
      while (p.next != null) {
        p = p.next;
        print(p.data + " ");
      }
      println("");
    }
  }
  //测试单链表L中是否有重复元素
  function hasSameValueNode(singleLink) {
    var i = singleLink.head;
    while (i.next != null) {
      i = i.next;
      var j = i;
      while (j.next != null) {
        j = j.next;
        if (i.data == j.data) {
          return true;
        }
      }
    }
    return false;
  }
  //单链表元素反转
  function reverseSingleLink(singleLink) {
    var arr = new Array();
    var p = singleLink.head;
    //先跑一遍，把所有节点放入数组
    while (p.next != null) {
      p = p.next;
      arr.push(p.data);
    }
    var newLink = new SingleLink();
    //再从后向前遍历数组,加入新链表
    for (var i = arr.length - 1; i >= 0; i--) {
      newLink.insert(arr[i]);
    }
    return newLink;
  }
  var linkTest = new SingleLink();
  linkTest.insert('A');
  linkTest.insert('B');
  linkTest.insert('C');
  linkTest.insert('D');
  linkTest.print();//A B C D
  var newLink = reverseSingleLink(linkTest);
  newLink.print();//D C B A
</script>
