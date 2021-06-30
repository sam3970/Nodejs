var sayNode=function()
{
	console.log('NODE');
};
var es='ES';

const newObject = {
	sayJS() {
	console.log('노드');
},
sayNode,
[es+1]: 'fantastic',
};


newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES1);
