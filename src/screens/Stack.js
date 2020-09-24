// LIFO Stack
class Stack {
  constructor() {
    this.top = null
  }

  push(data) {
    let node = new Node(data)
    if(!this.top) {
      this.top = node
    } else {
      node.next = this.top
      this.top = node
    }
  }

  pop() {
    if(!this.top) {
      throw new Error("Cannot pop on a stack with no nodes");
    }

    let topCopy = this.top
    if(this.top.next) {
      this.top = this.top.next
    } else {
      this.top = null
    }
    return topCopy.data
  }

  peek() {
    return this.top
  }

  isEmpty() {
    return !this.top
  }

  printStack() {
    let head = this.top
    while (this.top) {
      console.log(this.top.data)
      this.top = this.top.next
    }
    this.top = head
  }
}


class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}


export default Stack;
