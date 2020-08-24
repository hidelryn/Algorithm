/*
  TODO: 스택
  스택은 LIFO(Last IN FIRST OUT)으로 데이터를 추가 시 마지막에, 꺼낼 시에 마지막 꺼를 꺼낸다.
*/

class Stack {
  constructor() {
    this.data = [];
  }

  set push(arg) {
    this.data.push(arg);
  }

  get pop() {
    return this.data.pop();
  }
}

const stack = new Stack();

stack.push = 19;

stack.push = 88;

stack.push = 11;

stack.push = 23;

const last = stack.pop;

console.log('1', last);

const last2 = stack.pop;

console.log('2', last2);

console.log('data', stack.data);
