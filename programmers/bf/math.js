function solution(answers) {
  const answer = [];

  const students = {
    a: [],
    b: [],
    c: [],
    aScore: 0,
    bScore: 0,
    cScore: 0,
  };

  const aStyle = [1, 2, 3, 4, 5];
  const bStyle = [2, 1, 2, 3, 2, 4, 2, 5];
  const cStyle = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let aIndex = 0;
  let bIndex = 0;
  let cIndex = 0;

  for (let i = 0; i < answers.length; i += 1) { // 문제 수만큼 얘네 패턴 삽입
    students.a.push(aStyle[aIndex]);
    students.b.push(bStyle[bIndex]);
    students.c.push(cStyle[cIndex]);

    aIndex += 1;
    bIndex += 1;
    cIndex += 1;

    if (aIndex >= aStyle.length) aIndex = 0;
    if (bIndex >= bStyle.length) bIndex = 0;
    if (cIndex >= cStyle.length) cIndex = 0;
  }

  for (let j = 0; j < answers.length; j += 1) {
    if (answers[j] === students.a[j]) students.aScore += 1;
    if (answers[j] === students.b[j]) students.bScore += 1;
    if (answers[j] === students.c[j]) students.cScore += 1;
  }

  const total = {
    1: students.aScore,
    2: students.bScore,
    3: students.cScore,
  };

  const max = Math.max(...Object.values(total)); // 제일 높은 숫자 찾음

  Object.keys(total).forEach((key) => {
    if (total[key] >= max) answer.push(Number(key));
  });

  return answer;
}

// const rst = solution([1, 2, 3, 4, 5]);

const rst = solution([1, 3, 2, 4, 2]);

console.log('rst', rst);
