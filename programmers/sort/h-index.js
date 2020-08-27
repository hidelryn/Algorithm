function solution(citations) {
  let answer = 1;
  while (answer <= citations.length) { // 최대수가 논문 전체 보다 커질 일은 없다.
    const data = [];
    for (let i = 0; i < citations.length; i += 1) {
      if (citations[i] >= answer) data.push(citations[i]); // n번째 회수에 포함하는 논문의 개수 확인
    }
    if (answer > data.length) break; // 회수가 논문의 개수보다 커지면 최대수이므로 멈춤
    answer += 1;
  }
  return answer - 1;
}

const rst = solution([22, 42]);

console.log(rst);
