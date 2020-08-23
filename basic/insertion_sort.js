/*
  TODO: 삽입 정렬

  배열: [4, 2, 7, 1, 3]

  1. 1번째 인덱스(=2)를 뺀 후 임시 변수에 옮겨 놓는다.
  2. 임시 변수에 있는 2와 0번째 원소인 4와 비교를 한다.
  3. 2가 4보다 작으니 4를 오른쪽으로 한 칸 이동 하고 0번째 원소에는 2를 넣는다 [2, 4, 7, 1, 3]
  4. 2번째 인덱스(=7)를 뺀 후 임시 변수에 옮겨 놓는다.
  5. 임시 변수에 있는 7과 1번째 원소인 4와 비교를 한다.
  6. 7은 4보다 크니 이동을 하지 않는다.

  하나의 값을 선정 하여 해당 값이 자신보다 작은 값을 찾을 때 까지
  자리를 옮기면서 정렬 하는 방법

  시간 복잡도는 O(N의 제곱)
*/

const insertionSort = (arr) => {
  const list = arr;
  for (let i = 1; i < list.length; i += 1) {
    const temp = list[i]; // 임시 변수
    for (let j = i - 1; j >= 0; j -= 1) {
      const prevValue = list[j]; // 앞의 원소
      if (prevValue > temp) {
        list[j + 1] = prevValue; // 한 칸씩 이동
        list[j] = temp; // 비어 있는 배열에 추가
      }
    }
  }
  return list;
};

const rst = insertionSort([4, 2, 7, 1, 3]);

console.log('rst', rst);
