function solution(participant, completion) {
  let answer = '';
  const participantSort = participant.sort(); // NOTE: 동명이인 때문에 참가 선수 정렬
  const completionSort = completion.sort(); // NOTE: 마찬가지로 완주한 선수 정렬
  for (let i = 0; i < participantSort.length; i += 1) {
    if (participantSort[i] !== completionSort[i]) { // 같지 않으면 완주 안한 선수
      answer = participantSort[i];
      break;
    }
  }
  return answer;
}

const result = solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']);

console.log(result);
