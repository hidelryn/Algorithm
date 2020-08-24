function solution(priorities, location) {
  let myLocation = location; // 내가 찾는 문서의 위치 저장
  const printList = []; // 출력한 문서 담아두기용
  while (priorities.length > 0) { // 반복문
    const priority = priorities.shift(); // 배열 내의 첫 번째 문서
    const max = Math.max.apply(null, priorities); // 현재 배열에서 우선순위가 제일 높은 문서
    if (myLocation !== 0 && priority >= max) { // 현재 꺼낸 문서가 제일 상위이나 내 문서의 위치가 0이 아니면
      myLocation -= 1; // 1칸 좌로 이동
      printList.push(priority); // 출력한 문서에 추가
    } else if (myLocation === 0 && priority >= max) { // 현재 문서가 제일 우선순위이고, 내 문서의 위치가 0이므로 멈춤
      printList.push(priority);
      break;
    } else if (myLocation === 0 && priority < max) { // 내 문서가 0에 위치 했으나 내 문서보다 우선순위가 아직 남았음
      priorities.push(priority);
      myLocation = priorities.length - 1;
    } else if (priority < max) { // 현재 문서가 우선 순위 문서보다 낮은 경우
      myLocation -= 1;
      priorities.push(priority);
    }
  }
  const answer = printList.length;
  return answer;
}

// const rst = solution([2, 1, 3, 2], 2);

const rst = solution([1, 1, 9, 1, 1, 1], 0);

// const rst = solution([1, 1, 3], 0);

console.log(rst);
