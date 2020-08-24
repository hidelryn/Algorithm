/*
  TODO: 너비 우선 탐색
  그래프를 대상으로 최단경로를 구하는 알고리즘

  그래프란 연결의 집합을 모형화 한 것으로 정점과 간선으로 이루어져 있다
  [hi] -> [delryn] hi, delryn이 정점, ->이 간선

  가까운 정점부터 연결된 간선의 정점까지 찾고 또 다른 가까운 정점부터 시작해서 찾는 검색
  (예로 페이스북에서 특정 사람을 찾을 때 1촌의 한명을 살펴보고 그 1촌의 친구들을 계속 검색)
*/

const graph = {};

graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny'];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

const bfs = () => {
  const queue = graph.you;
  let result;
  const searched = [];
  while (queue.length > 0) {
    const person = queue.shift();
    const personLen = person.length;
    if (person[personLen - 1] === 'm' && searched.indexOf(person) === -1) {
      result = person;
      break;
    } else {
      if (typeof graph[person] !== 'undefined' && graph[person].length > 0) {
        graph[person].forEach((item) => {
          queue.push(item);
        });
      }
      searched.push(person);
    }
  }
  return result;
};

const rst = bfs();

console.log(rst);
