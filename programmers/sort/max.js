function solution(numbers) {
  numbers.sort((a, b) => {
    let aToStr = a.toString();
    let bToStr = b.toString();

    let i = 0;

    let j = 0;

    while (i < 4) {
      aToStr += aToStr;
      i += 1;
    }

    aToStr = aToStr.slice(0, 4); // 4자리로 통일

    while (j < 4) {
      bToStr += bToStr;
      j += 1;
    }

    bToStr = bToStr.slice(0, 4); // 4자리로 통일

    // console.log('aToStr', aToStr, 'bToStr', bToStr, 'a', a, 'b', b);

    let result;

    if (Number(aToStr) > Number(bToStr)) {
      result = -1;
    } else if (Number(aToStr) === Number(bToStr) && a > b) { // 4자리 수가 동일한 경우 기존 값으로
      result = 1;
    } else if (Number(aToStr) === Number(bToStr) && a < b) {
      result = -1;
    } else {
      result = 1;
    }
    return result;
  });

  // console.log(numbers);

  let answer = '';

  numbers.forEach((item) => {
    answer += Number(item);
  });

  const zeroCheck = Number(answer);

  if (zeroCheck === 0) return zeroCheck.toString();

  return answer;
}

// const rst = solution([6, 10, 2]);

// const rst = solution([3, 30, 34, 5, 9]);

// const rst = solution([0, 0, 0]);

const rst = solution([12, 121]);

console.log(rst);
