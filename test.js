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

  /*
  getAll() 키에 해당하는 모든 값들을 가져옴
  get() 키에 해당하는 첫 번째 값만 가져옴
  has() 해당 키가 있는지 없는지를 검사
  keys() searchParams의 모든 키를 반복기 객체로 가져옴
  values() searchParams의 모든 값을 반복기 객체로 가져옴
  append() 해당 키를 추가합니다.

  */

  
  /*const EventEmitter = require('events');

  const myEvent = new EventEmitter();
  myEvent.addListener('event1', () => {
    console.log('이벤트 1');
  });
  myEvent.on('event2', () => {
    console.log('이벤트 2');
  });
  myEvent.on('event2', () => {
    console.log('이벤트 2 추가');
  });
  myEvent.once('event3', () => {
    console.log('이벤트 3');
  }); // 한 번만 실행됨
  
  myEvent.emit('event1'); // 이벤트 호출
  myEvent.emit('event2'); // 이벤트 호출
  
  myEvent.emit('event3');
  myEvent.emit('event3'); // 실행 안 됨
  
  myEvent.on('event4', () => {
    console.log('이벤트 4');
  });
  myEvent.removeAllListeners('event4');
  myEvent.emit('event4'); // 실행 안 됨
  
  const listener = () => {
    console.log('이벤트 5');
  };
  myEvent.on('event5', listener);
  myEvent.removeListener('event5', listener);
  myEvent.emit('event5'); // 실행 안 됨
  
  console.log(myEvent.listenerCount('event2'));*/

  const http = require('http');

  http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
    res.end('Hello Cookie');
  })
    .listen(8083, () => {
      console.log('8083번 포트에서 서버 대기 중입니다!');
    });