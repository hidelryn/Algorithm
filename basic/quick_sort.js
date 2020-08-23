/*
  TODO: 퀵 정렬

  배열: [5, 7, 1, 8, 2, 6, 3]

  1. 배열의 첫 요소(5)를 피봇(기준점)으로 둔다.
  2. 피봇을 기준으로 작은 요소를 가진 배열, 큰 요소를 가진 배열로 나눈다.
  3. 더 이상 나눌 수 없을 때 까지 재귀를 한다.

  분할 정복 (주어진 문제를 작게 조개서 해결하는 전략)을 이용
*/

const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const low = [];
  const high = [];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] <= pivot) low.push(arr[i]);
    if (arr[i] > pivot) high.push(arr[i]);
  }

  const result = quickSort(low).concat([pivot], quickSort(high));
  return result;
};

console.log(quickSort([5, 7, 1, 8, 2, 5, 6, 3]));
