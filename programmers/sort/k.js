function solution(array, commands) {
  const answer = [];
  commands.forEach((item) => {
    const list = array.slice(item[0] - 1, item[1]).sort((a, b) => a - b);
    answer.push(list[item[2] - 1]);
  });
  return answer;
}

const rst = solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);

console.log(rst);
