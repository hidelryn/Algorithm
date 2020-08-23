/*
  TODO: 이진 탐색

  배열: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  위치: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

  1회 -> 중간값이 있는 위치를 구한다 (0 + 9) / 2 는 4.5이므로 버림으로 정수 4
        4번째 위치의 값은 5, 7은 5보다 크므로 4번째 위치 이하의 값들은 무시.

  2회 -> 중간값 위치 시작은 5번째 부터 끝은 9번째, 중간값이 있는 위치는 (5 + 9) / 2 = 7
        7번째 위치에 있는 값은 8, 8은 7보다 크므로 7번째 위치 이상의 값들은 무시.

  3회 -> 중간값 위치 시작은 5번째 부터 끝은 6번째, 중간값이 있는 위치는 (5 + 6) / 2 = 5
        5번쨰 위치에 있는 값은 6, 6은 7보다 작으므로 5번째 위치 이하의 값들은 무시.

  4회 -> 중간값 위치 시작은 6번째 부터 끝은 6번째, 중간값이 있는 위치는 (6 + 6) / 2 = 6
        6번째 위치에 있는 값은 7 이므로 종료.

  오름차순으로 정렬된 배열에서 중간 값을 구하여 찾는 값보다 작거나 큰 값인지 비교를 하여
  범위를 좁히면서 (벗어 난 값 이상은 무시 -> 반 씩 버리게 됨) 빠르게 검색 하는 방법

  시간 복잡도는 O(logN)
*/
const binarySearch = (arr, val) => {
  const result = {
    count: 0,
    index: null,
  };
  if (arr.indexOf(val) === -1 || arr.length === 0) return result;
  let startIdx = 0;
  let endIdx = arr.length - 1;
  while (startIdx <= endIdx) {
    const midIdx = Math.floor((startIdx + endIdx) / 2); // 중간 값 위치
    result.count += 1;
    if (arr[midIdx] === val) {
      result.index = midIdx;
      break;
    } else if (arr[midIdx] < val) { // 작은 경우
      startIdx = midIdx + 1;
    } else { // 나머지 큰 경우
      endIdx = midIdx - 1;
    }
  }
  return result;
};

const rst = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7);
console.log('rst', rst); // { count: 4, index: 6 }
