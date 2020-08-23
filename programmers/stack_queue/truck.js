function solution(bridge_length, weight, truck_weights) {
  let answer = 0;

  const ingTrucks = [];

  const endTrucks = [];

  let ingWeight = 0;

  while (truck_weights.length > 0) {
    const currentWeight = truck_weights.shift(); // 현재 트럭

    ingWeight += currentWeight;

    if (ingWeight <= weight) {
      ingTrucks.push({ weight: currentWeight, run: 1 }); // 진입
    } else { // 무게 초과 시 진입 안 하기 위한 처리
      ingWeight -= currentWeight;
      truck_weights.unshift(currentWeight);
    }

    const removeIndex = [];

    if (ingTrucks.length > 0) { // 진행중인 트럭
      answer += 1;
      for (let i = 0; i < ingTrucks.length; i += 1) {
        const ingTruck = ingTrucks[i];
        ingTruck.run += 1;
        if (ingTruck.run > bridge_length) { // 현재 트럭이 다리를 지나가면
          ingWeight -= ingTruck.weight; // 무게를 빼준다
          removeIndex.push(i);
          endTrucks.push(ingTruck); // 완료한 배열에 추가
        }
      }
      removeIndex.forEach((idx) => { // 지나간 트럭은 진행중인 트럭에서 삭제
        ingTrucks.splice(idx, 1);
      });
    }
  }

  answer += bridge_length;

  return answer;
}

// const rst = solution(2, 10, [7, 4, 5, 6]);

// const rst = solution(100, 100, [10]);

const rst = solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);

console.log(rst);
