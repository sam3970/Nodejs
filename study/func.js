const {odd,even}=require('/root/nodejs/study/var.js');

function checkoe(num)
{
	if(num%2){
		return odd;
	}
	return even;
}

module.exports = checkoe;
