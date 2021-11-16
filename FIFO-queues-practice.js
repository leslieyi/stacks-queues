//FIFO, First In First Out
//waiting in line, background tasks, uploading resources, printing process

//Creating a Queue using an ARRAY (Easy way)

//unshift with pop
//popping from the end is better time. No need to index the rest of the array. It makes sense to make sense to create own queue class for performance.

//push with shift

//ENQUEUE add to the end push()
//DEQUEUE removing from the beginning shift()

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode; //edge case for empty queue
    } else {
      this.last.next = newNode;
      this.last = newNode; //moved the pointer to look at the end
    }

    return ++this.size;
  }

  dequeue() {
    //remove from the begininig, to give the first thing added in!
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next; //take the beginning and update to be the next item.
    this.size--;
    return temp.value;
  }
}

let q = new Queue();
q.enqueue("First");
q.enqueue("Second");
q.enqueue("Third");
console.log(q);

console.log(q.dequeue())
