class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //very similar to shift and unsfhit just a diff name
  //Remember, adding and removing the end is not constant time in the linked list. 
  //Stack is supposed to be constant time, but
  //we are adding and removing from beginnning but calling push and pop bc THIS IS a STACK
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp; //the old beginning
    }

    return ++this.size; //increasing and returning.
  }

  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null; //edge case, when there is only one thing there
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack();
stack.push("first");
stack.push("second");
stack.push("third");
stack.pop()

console.log(stack);
