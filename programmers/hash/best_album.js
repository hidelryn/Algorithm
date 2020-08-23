function solution(genres, plays) {
  const answer = [];
  const totalCountObj = {};
  genres.forEach((element, idx) => { // 1. 장르 별 총 재생 수 부터 모은다.
    if (!totalCountObj[element]) {
      totalCountObj[element] = plays[idx];
    } else if (totalCountObj[element]) {
      totalCountObj[element] += plays[idx];
    }
  });
  // 2. 총 재생 수가 높은 순으로 장르 정렬
  const highGenObj = Object.keys(totalCountObj).sort((a, b) => totalCountObj[b] - totalCountObj[a]);
  highGenObj.forEach((gen) => { // NOTE: 3. 재생 수가 높은 장르부터 다시 순회
    const data = {};
    genres.forEach((item, idx) => { // NOTE: 4. 같은 장르의 플레이 수를 모은다.
      if (gen === item) {
        data[idx] = plays[idx];
      }
    });
    // 5. 플레이 수가 높은 대로 정렬
    const sortData = Object.keys(data).sort((a, b) => data[b] - data[a]);
    for (let i = 0; i < 2; i += 1) { // 6. 2곡만 뽑아서 추가, 빈 데이터는 추가 X
      if (sortData[i]) answer.push(Number(sortData[i]));
    }
  });
  return answer;
}

const result = solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]);
console.log(result);
