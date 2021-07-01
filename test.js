  /*var sayNode = function() {
    console.log('Node');
  };
 
  var es = 'ES';
 
  const newObject = {
    sayJS() {
      console.log('JS');
    },
    sayNode,
    [es + 5]: 'Fantastic',
  };
  newObject.sayNode(); // Node
  newObject.sayJS(); // JS
  console.log(newObject.ES5); // Fantastic

  
  const add3 = (x, y) => x + y;
  
  const add4 = (x, y) => (x + y);
  
  const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
      this.friends.forEach(tt => {
        console.log(this.name, tt);
      });
    },
  };
  relationship2.logFriends();
    
class Human {
  constructor(type = 'human') {
    this.type = type;
  }

  static isHuman(human) {
    return human instanceof Human;
  }

  breathe() {
    alert('h-a-a-a-m');
  }
}

class Zero extends Human {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    super.breathe();
    alert(`${this.firstName} ${this.lastName}`);
  }
}

const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero); // true 

const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
  } else {
    reject('실패');
  }
});
// 다른 코드가 들어갈 수 있음
promise
  .then((message) => {
    console.log(message); // 성공(resolve)한 경우 실행
  })
  .catch((error) => {
    console.error(error); // 실패(reject)한 경우 실행
  })
  .finally(() => { // 끝나고 무조건 실행
    console.log('무조건');
  });*/

  const url = require('url');

  const { URL } = url;
  const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
  console.log('new URL():', myURL);
  console.log('url.format():', url.format(myURL));
  console.log('------------------------------');
  const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
  console.log('url.parse():', parsedUrl);
  console.log('url.format():', url.format(parsedUrl));