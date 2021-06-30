const obj ={
outside:{
	inside:{
		key:'value',
		},
	},
};
	

console.time('time');
console.error('err');

console.table([{name : 'sam3970', country : 'seoul',code : '02' }, {name:'test',country:'daegu',code:'053'}]);


console.dir(obj, {colors:true,depth:2});
console.dir(obj, {colors:false,depth:1});
console.dir(obj, {colors:false,depth:0});


//console.time('timestart');

//for(let i=0;i<1000;i++)
//{}

const timeout = setTimeout(() => {
  console.log('1초 후 실행');
  console.log(__filename);
  console.log(__dirname);
	
}, 1000);

const immediate = setImmediate(() => {
  console.log('즉시 실행');
});

setTimeout(() => {
  clearTimeout(timeout);
}, 1500);

//this
console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
  console.log('function', this === exports, this === global);
}
whatIsThis();

//require : 모듈을 불러올 때 사용
console.log('require 위치는 자유');
module.exports = 'exports ex'; //exports 위치 또한 자유

require('/root/nodejs/study/ex2.js'); //이런식으로 경로 지정가능.

console.log('require.cache 임포트');
console.log(require.cache);
console.log('require.main 임포트');
console.log(require.main === module);//첫 모듈
console.log(require.main.filename); //첫 모듈

