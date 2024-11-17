function getHistory(){
	return document.getElementById("history-value").innerText;
}// 获得历史值 
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}//更新数字
function getOutput(){
	return document.getElementById("output-value").innerText;
}//获取id为"output-value"的元素的值
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}//基于所给数字更新id为"output-value"的元素的值
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}//格式化，三位一断，如9,000,000,000
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}//移除逗号, 将断位后的值变回数字，如9,000,000,000——>9000000000
var operator = document.getElementsByClassName("operator");//创建变量operator,保存所有operator
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){//给operator里的每个元素添加响应器，点击则执行以下函数
		if(this.id=="clear"){
			printHistory("");//清除历史值
			printOutput("");//清除输出结果
		}
		else if(this.id=="backspace"){//若为退格键
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){//若有历史无输入
				if(isNaN(history[history.length-1])){
					history= history(0,history.length-1);
				}
			}
			if(output!="" || history!=""){//若有历史或有结果
				output= output==""?output:reverseNumberFormat(output);//结果非空则转换格式
				history=history+output;//字符串连接
				if(this.id=="="){
					var result=eval(history);//使用eval函数执行运算
					history=history+this.id;
					printHistory(history);
					printOutput(result);
				}
				else if(this.id=="²"){
					result=output*output;
					history=history+this.id;
					printHistory(history);
					printOutput(result);
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");//创建变量number,保存所有数字元素
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){//给数字按键加监听器
		var output=reverseNumberFormat(getOutput());//转变格式
		if(output!==NaN){
			output=output+this.id;
			printOutput(output);
		}
	});
}