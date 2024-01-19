function createNode(value = null, nextNode = null) {
  return { value, nextNode };
}
function createLinkedList() {
  return {
    linkedList,
    append(value) {},
    prepend(value) {},
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
    pop() {},
    contains(value) {},
    find(value) {},
    toString() {},
  };
}
