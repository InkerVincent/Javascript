//������ʵ��
<script type="text/javascript">
  function print(msg) {
    document.write(msg);
  }
  function println(msg) {
    print(msg + "<br/>");
  }
  //�ڵ���
  var Node = function (v) {
    this.data = v; //�ڵ�ֵ
    this.next = null; //��̽ڵ�
  }
  //������
  var SingleLink = function () {
    this.head = new Node(null); //Լ��ͷ�ڵ��ռλ������ֵ
    //����ڵ�
    this.insert = function (v) {
      var p = this.head;
      while (p.next != null) {
        p = p.next;
      }
      p.next = new Node(v);
    }
    //ɾ��ָ��λ�õĽڵ�
    this.removeAt = function (n) {
      if (n <= 0) {
        return;
      }
      var preNode = this.getNodeByIndex(n - 1);
      preNode.next = preNode.next.next;
    }
    //ȡ��N��λ�õĽڵ�(Լ��ͷ�ڵ�Ϊ��0��λ��)
    //N��������Ԫ�ظ���ʱ���������һ��Ԫ��
    this.getNodeByIndex = function (n) {
      var p = this.head;
      var i = 0;
      while (p.next != null && i < n) {
        p = p.next;
        i++;
      }
      return p;
    }
    //��ѯֵΪV�Ľڵ㣬
    //����������ж����ֵͬ�Ľڵ㣬
    //���ص�һ���ҵ���
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
    //��ӡ������нڵ�
    this.print = function () {
      var p = this.head;
      while (p.next != null) {
        p = p.next;
        print(p.data + " ");
      }
      println("");
    }
  }
  //���Ե�����L���Ƿ����ظ�Ԫ��
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
  //������Ԫ�ط�ת
  function reverseSingleLink(singleLink) {
    var arr = new Array();
    var p = singleLink.head;
    //����һ�飬�����нڵ��������
    while (p.next != null) {
      p = p.next;
      arr.push(p.data);
    }
    var newLink = new SingleLink();
    //�ٴӺ���ǰ��������,����������
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
