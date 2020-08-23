/*
  TODO: 해시 테이블

  해시 테이블은 키와 값으로 이뤄진 리스트
  자바스크립트의 경우에는 {}(=Object)가 해시 테이블
  문자를 가져와서 숫자로 변환하는 과정을 해싱이라 부르고
  문자를 특정 숫자로 변환하는데 사용하는 코드를 해시 함수라 부른다 방법은 다양함.
  주의할 점은 동일한 문자열을 해시 함수에 적용할 때마다 항상 동일한 숫자로 변환 되어야 한다.
  시간 복잡도는 O(1)

*/

class HashTable {
  constructor(size) {
    this.len = size || 10;
    this.list = new Array(this.len);
  }

  /**
   * 해싱 함수
   * @param {*} key 변환할 key
   */
  hashing(key) {
    let num = 0;
    const str = key.toString();
    for (let i = 0; i < str.length; i += 1) {
      const v = str[i].charCodeAt();
      num += v;
    }
    return num % this.len;
  }

  /**
   * 삽입
   * @param {*} key 키
   * @param {*} value 값
   */
  add(key, value) {
    if (typeof key === 'undefined' || typeof value === 'undefined') return undefined;
    const hashKey = this.hashing(key);
    if (typeof this.list[hashKey] === 'undefined') { // 존재 하지 않은 키면 바로 삽입
      this.list[hashKey] = [[key, value]];
    } else { // 존재하는 해시 키라면
      let find = false;
      for (let i = 0; i < this.list[hashKey].length; i += 1) {
        if (this.list[hashKey][i][0] === key) { // 같은 키에서 값만 바뀐 경우
          this.list[hashKey][i][1] = value;
          find = true;
          break;
        }
      }
      if (!find) this.list[hashKey].push([key, value]); // 같은 해시 키가 아니면 배열 안에 추가
    }
    return true;
  }

  /**
   * 검색
   * @param {*} key
   */
  search(key) {
    if (typeof key === 'undefined') return undefined;
    const hashKey = this.hashing(key);
    if (typeof this.list[hashKey] === 'undefined') return undefined;
    let value;
    for (let i = 0; i < this.list[hashKey].length; i += 1) {
      if (this.list[hashKey][i][0] === key) {
        const [, val] = this.list[hashKey][i];
        value = val;
        break;
      }
    }
    return value;
  }

  /**
   * 삭제
   * @param {*} key 키
   */
  remove(key) {
    if (typeof key === 'undefined') return undefined;
    const hashKey = this.hashing(key);
    if (typeof this.list[hashKey] === 'undefined') return undefined;
    if (this.list[hashKey].length > 1) {
      for (let i = 0; i < this.list[hashKey].length; i += 1) {
        if (this.list[hashKey][i][0] === key) {
          this.list[hashKey].splice(i, 1);
          break;
        }
      }
    } else {
      this.list.splice(hashKey, 1);
    }
    return true;
  }
}

const hashTable = new HashTable(5);

hashTable.add(1, 'aa');

hashTable.add(17, [1, 2, 3]); // 충돌 나는 데이터 삽입

console.log(hashTable.list); // [ <4 empty items>, [ [ 1, 'aa' ], [ 17, [Array] ] ] ]

console.log(hashTable.search(1)); // aa

hashTable.remove(1);

hashTable.add('z', 1);

console.log(hashTable.list);

/*
[
  <2 empty items>,
  [ [ 'z', 1 ] ],
  <1 empty item>,
  [ [ 17, [Array] ] ]
]
*/

hashTable.remove('z');

console.log(hashTable.list); // [ <3 empty items>, [ [ 17, [Array] ] ] ]
