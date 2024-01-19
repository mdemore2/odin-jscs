function createNode(value = null, nextNode = null) {
  return { value, nextNode };
}

function createLinkedList(linkedList = []) {
  return {
    linkedList,
    append(value) {
      let node = createNode(value);
      let tail = this.tail();
      tail.nextNode = node;
      this.inkedList.append(node);
    },
    prepend(value) {
      let node = createNode(value);
      node.nextNode = this.head();
      this.linkedList.unshift(node);
    },
    size() {
      return this.linkedList.length;
    },
    head() {
      return this.linkedList[0];
    },
    tail() {
      return this.linkedList[this.size() - 1];
    },
    at(index) {
      return this.linkedList[index];
    },
    pop() {
      let retVal = this.tail().value;
      this.linkedList.pop();
      this.tail().nextNode = null;
      return retVal;
    },
    contains(value) {
      let mappedArray = this.linkedList.map((node) => node.value);
      return mappedArray.includes(value);
    },
    find(value) {
      let mappedArray = this.linkedList.map((node) => node.value);
      return mappedArray.indexOf(value);
    },
    toString() {
      let retStr = "";
      this.linkedList.forEach((node) => retStr.concat(`${node.value} -> `));
      return retStr;
    },
  };
}
