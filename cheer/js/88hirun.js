/* 
* @Author: Allan
* @Date:   2015-04-14 11:37:48
* @Last Modified by:   anchen
* @Last Modified time: 2015-04-17 15:16:35
*/


window.onload = function(){
    mv.app.toRun();
};

var mv = {};  //命名空间方式管理js  定义mv为一个object

mv.tools = {};
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

//写这个方法获取元素淡入淡出透明度
mv.tools.getStyle = function(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}

mv.ui = {};
mv.ui.moveLeft = function(obj,old,now){//元素，当前的值，变化后的值
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){

        var iSpeed = (now - old)/10;
        iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

        if(now==old){
            clearInterval(obj.timer);
        }else{
            old += iSpeed;
            obj.style.left = old*3+'px';
        }

    },10);
};

mv.app = {};

mv.app.toRun = function(){
    var oRun = document.getElementById('run1');
    var oUl = oRun.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');

    var oPrev = mv.tools.getByClass(oRun,'prev')[0];
    var oNext = mv.tools.getByClass(oRun,'next')[0];

    var oPrevBg=mv.tools.getByClass(oRun,'prev_bg')[0];
    var oNextBg=mv.tools.getByClass(oRun,'next_bg')[0];

    var iNow = 0;

    oUl.innerHTML += oUl.innerHTML;
    oUl.style.width = aLi.length*aLi[0].offsetWidth + 'px';;//offsetWidth表示获取宽

    oPrev.onclick = function(){

        if(iNow == 0){
            iNow = 0;
            oUl.style.left = 0;
        }

        mv.ui.moveLeft(oUl,-iNow*aLi[0].offsetWidth,-(iNow-1)*aLi[0].offsetWidth);

        iNow--;
    };

    oNext.onclick = function(){

        if(oUl.style.left=-1161){
            iNow = 0;
            oUl.style.left = 0;
        }

        mv.ui.moveLeft(oUl,-iNow*aLi[0].offsetWidth,-(iNow+1)*aLi[0].offsetWidth);

        iNow++;

    };

    oPrevBg.onmouseover = oPrev.onmouseover = function(){
        oPrev.style.display = 'block';
    };
    oNextBg.onmouseover = oNext.onmouseover = function(){
        oNext.style.display = 'block';
    };
    oPrevBg.onmouseout = oPrev.onmouseout = function(){
        oPrev.style.display = 'none';
    };
    oNextBg.onmouseout = oNext.onmouseout = function(){
        oNext.style.display = 'none';
    };
}