/* 
* @Author: allan
* @Date:   2015-04-15 10:48:19
* @Last Modified by:   allan
* @Last Modified time: 2015-04-17 14:21:38
*/

$(document).ready(function(){


    

    //1、选择项1
    $('.choise').click(function () {
        if($(this).hasClass('choised')){

            $(this).removeClass('choised');
            if($(this).hasClass('mealed')){
                console.log('1 off');
            }else if($(this).hasClass('theme')){
                console.log('2 off');
            }else if($(this).hasClass('other')){
                console.log('3 off');
            }
        }else{
            $(this).addClass('choised');
            if($(this).hasClass('mealed')){
                console.log('1 on');
            }else if($(this).hasClass('theme')){
                console.log('2 on');
            }else if($(this).hasClass('other')){
                console.log('3 on');
            }
        }
    });

    //2、平滑滚动
    $('html').niceScroll();

    //3、顶部搜索框
    $('#query,.icon').click(function(){
        $('#query').width(200);
        $('#query').css("background-color","#c94e45");
        $('#query').focus();
    });
    $('#query,.icon').blur(function(){
        $('#query').width(0);
        $('#query').css("background-color","#f55b49");
    });

    //4、顶部logo隐藏文字
    $('.toplogo').hover(function() {
        $('.slogan').css('display','block')
        },function(){
        $('.slogan').css('display','none')
    });





});