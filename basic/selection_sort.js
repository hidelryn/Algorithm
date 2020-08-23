/*
  TODO: 선택 정렬

  배열: [4, 2, 7, 1, 3]

  1. 현재 최소값(0번째 원소인 4)를 2와 비교를 한다. 4는 2보다 크니 최소값은 2로 변경
  2. 현재 최소값(2)를 다음 원소인 7과 비교 한다. 2는 7보다 작으니 최소값 변경 X
  3. 현재 최소값(2)를 다음 원소인 1과 비교 한다. 2는 1보다 크니 최소값은 1로 변경
  4. 현재 최소값(1)을 다음 원소인 3과 비교 한다. 1은 3보다 작으니 최소값 변경 X

  배열을 순회 하면서 최소 값을 찾은 다음 가능한 제일 왼쪽에 배치 시키는 것,
  더 이상 변경이 없을 때까지 과정을 반복 하여 정렬을 하는 방법.

  시간 복잡도는 O(N의 제곱)
*/

const selectionSort = (arr) => {
  const list = arr;
  for (let i = 0; i < list.length; i += 1) {
    let min = list[i]; // 최소 값
    for (let j = i + 1; j < list.length; j += 1) {
      const prevValue = list[i]; // 이전 값
      const currentValue = list[j];
      if (currentValue < min) {
        min = currentValue; // 최소 값 변경
        list[i] = currentValue; // 순서 교환
        list[j] = prevValue;
      }
    }
  }
  return list;
};

const rst = selectionSort([4, 2, 7, 1, 3]);
console.log('rst', rst); // rst [ 1, 2, 3, 4, 7 ]
