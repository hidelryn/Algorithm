/*
  TODO: 버블 정렬

  배열: [4, 2, 7, 1, 3]

  1. 4, 2를 비교 한다. 4는 2보다 크기 때문에 교환을 해야 한다.
  2. 4, 2와 자리 교환을 한다. 그럼 [2, 4, 7, 1, 3]
  3. 4와 7을 비교 한다. 4는 7보다 작기 때문에 교환을 하지 않아도 된다.
  4. 7과 1을 비교 한다. 7은 1보다 크기 때문에 때문에 교환을 해야 한다.
  5. 7과 1을 교환 한다. 그럼 [2, 4, 1, 7, 3]
  6. 7과 3을 비교 한다. 7은 3보다 크기 때문에 교환을 해야 한다.
  7. 7과 3을 교환 한다. 그럼 [2, 4, 1, 3, 7]

  배열을 순회 하면서 인접한 두 원소를 검사하여 제일 큰 수를 가능한 제일 오른쪽에 배치 시키는 것,
  더 이상 변경이 없을 때까지 과정을 반복 하여 정렬을 하는 방법.

  시간 복잡도는 O(N의 제곱)
*/

const bubbleSort = (arr) => {
  const list = arr;
  let len = arr.length - 1;
  while (len > 0) {
    for (let i = 0; i < len; i += 1) {
      const currentValue = list[i]; // 현재 원소
      const nextValue = list[i + 1]; // 다음 원소

      if (currentValue > nextValue) {
        list[i] = nextValue; // 원소 교환
        list[i + 1] = currentValue;
      }
    }
    len -= 1;
  }
  return list;
};

const rst = bubbleSort([4, 2, 7, 1, 3]);

console.log('rst', rst); // [ 1, 2, 3, 4, 7 ]
