/*
  TODO: 큐
  큐는 FIFO(FIRST IN FIRST OUT)으로 스택과 마찬가지로 삽입 시 데이터의 마지막에, 꺼낼 때는 반대로 처음에서부터
*/

class Queue {
  constructor() {
    this.data = [];
  }

  set enqueue(arg) {
    this.data.push(arg);
  }

  get dequeue() {
    return this.data.shift();
  }
}

const queue = new Queue();

queue.enqueue = 19;

queue.enqueue = 88;

queue.enqueue = 11;

queue.enqueue = 23;

const first = queue.dequeue;

console.log(1, first);

const second = queue.dequeue;

console.log(2, second);

console.log('data', queue.data);
