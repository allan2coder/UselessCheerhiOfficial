/*轮播js*/
window.onload = function(){
	mv.app.toBanner();
};

var mv = {};  //命名空间方式管理js  定义mv为一个object

mv.tools = {};//工具
mv.tools.getByClass = function(oParent,sClass){
	var aEle = oParent.getElementsByTagName('*');
	var arr = [];

	for(var i=0;i<aEle.length;i++){
		if(aEle[i].className == sClass){
			arr.push(aEle[i]);
		}
	}

	return arr;
};

mv.tools.getStyle = function(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

mv.ui = {};//效果
mv.ui.fadeIn = function(obj){

	var iCur = mv.tools.getStyle(obj,'opacity');
	if(iCur==1){return false;}

	var value = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = 5;
		if(value == 100){
			clearInterval(obj.timer);
		}else{
			value+=iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity = '+value+')';
		}
	},30);
};

mv.ui.fadeOut = function(obj){

	var iCur = mv.tools.getStyle(obj,'opacity');
	if(iCur==0){return false;}

	var value = 100;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = -5;
		if(value == 0){
			clearInterval(obj.timer);
		}else{
			value += iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity = '+value+')';
		}
	},30);
};

mv.app = {};	//应用
mv.app.toBanner = function(){

	var oDd = document.getElementById('ad');
	var aLi = oDd.getElementsByTagName('li');

	var iNow = 0;

	var timer = setInterval(auto,4000);

	function auto(){

		if(iNow == aLi.length-1){
			iNow = 0;
		}else{
			iNow++;
 		}
 		//让所有li淡出
		for(var i=0;i<aLi.length;i++){
			mv.ui.fadeOut(aLi[i]);
		}
		mv.ui.fadeIn(aLi[iNow]);

	}
	function autoPrev(){

		if(iNow == 0){
			iNow = aLi.length-1;
		}else{
			iNow--;
 		}
		for(var i=0;i<aLi.length;i++){
			mv.ui.fadeOut(aLi[i]);
		}
		mv.ui.fadeIn(aLi[iNow]);
	}

};