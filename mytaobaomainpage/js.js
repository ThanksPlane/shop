$(function(){
	
	/*中国大陆显示隐藏动画*/
	$(".nav_0,.nav_0>li").hover(function(){
		$(this).children(".nation").show();
	},
	function(){
		$(this).children(".nation").hide();
	});
	/*右侧导航栏显示隐藏动画*/
	$(".nav .right .nav_2, .nav_2>li").hover(function(){
		$(this).children("ul,.site-navigation").show();
	},
	function(){
		$(this).children("ul,.site-navigation").hide();
	});


	// /*搜索框上切换小图标*/
	$(".search .searcher .search-box .btns .bb").click(function(){
		$(this).addClass("bbclick")
		.siblings("span").removeClass("bbclick");
				
	});
 	/*关闭手机淘宝标签*/
	$(".search .qr-code .close").click(function(){
		$(this).parent(".qr-code").hide();
	});
	/*主题市场*/
	function ztsc(){
		var detailsli=$(".contents .detail .details li");
	       detailsli.mouseenter(function(){
		$(this).closest(".detail").next().fadeIn();

		$(this).children("a").css("color","#ff5000");
		$(this).addClass("limousemover");		
	});
	       detailsli.mouseleave(function(){
		$(this).closest(".detail").next().hide();
		$(this).children("a").css("color","#666");
		$(this).removeClass("limousemover");
	}) ;
	$(".hiddens").hover(function(){
        $(this).show();
	},function(){
        $(this).hide();
	});

}	
 	ztsc();
	
 function lunbo(){
	        // 设置一个全局变量控制图片切换
        var index = 1;
        var v_width=$(".main-imgwidth").width();
        var $v_show=$(".main-left-1");
       // 获取图片的个数
        var total =  $('.lb>li').length;
        function move(){
        	if(!$v_show.is(":animated")){
            if(index == total){ 
                $v_show.animate({left:'0px'},"slow");
                index = 1;
            }else{
            	$v_show.animate({left:'-='+v_width},"slow");
                index++;
            }
            // 让圈圈随着图片的切换变色
           $('.main-left .index li').eq((index-1)).css('background-color','#ff5000')
            .siblings().css('background-color','#fff');   
        }
    }
        function premove(){
        	if(!$v_show.is(":animated")){
            if(index == 1){ 
                $v_show.animate({left:'-='+v_width*(total-1)},"slow");
                index=total;
            }else{
            	$v_show.animate({left:'+='+v_width},"slow");
                index--;
            }
            // 让圈圈随着图片的切换变色
           $('.main-left .index li').eq((index-1)).css('background-color','#ff5000')
            .siblings().css('background-color','#fff');   
        }
        
    }
        //定时器
        var timer1 = setInterval(move,3000);

        //鼠标放在图片上停止图片切换,鼠标离开图片上开始图片切换
        $('.main-imgwidth').hover(function(){
        // 清理定时器
            clearInterval(timer1);
            // 显示按钮
            $(this).find('.left-button').show();
            $(this).find('.rigth-button').show();
            },function(){
            // 设置定时器
            timer1 = setInterval(move,3000);
            // 隐藏按钮
            $(this).find('.left-button').hide();
            $(this).find('.rigth-button').hide();
        });
        //制作左右按钮变色
        function myHover(elemNode){
            elemNode.hover(function(){
                $(this).css('background-color','rgba(0,0,0,0.5)');
            },function(){
                $(this).css('background-color','rgba(0,0,0,0.3)');
            });
        }
        var leftButton = $('.main-left .main-imgwidth .left-button');
        var rigthButton = $('.main-left .main-imgwidth .rigth-button');
        myHover(leftButton);
        myHover(rigthButton);

        //制作左右按钮切换图片
        rigthButton.click(function(){
            move();
        });

        leftButton.click(function(){
            premove();
        });
}
	lunbo();
   function lunbotu(){
   		 var index = 1;
        var v_width=$(".main-left-2").width();
        var $v_show=$(".main-left-2 .lbt_0");
       // 获取图片的个数
        var total =  $('.lbt_0>li').length;
        function move(){
        	if(!$v_show.is(":animated")){
            if(index == total){ 
                $v_show.animate({left:'0px'},"slow");
                index = 1;
            }else{
            	$v_show.animate({left:'-='+v_width},"slow");
                index++;

            }
            $(".page-number .numbers").html(index);
            $(".tmall-dh ul li").eq((index-1)).css('background-color','#000')
            .siblings().css('background-color','#ff1648'); 
        }
     }
             var timer2 = setInterval(move,3000);
             $(".main .main-left-2 .lbt_0").hover(function(){
             	clearInterval(timer2);
             },function(){
             	timer2=setInterval(move,3000);

             })
}
		lunbotu();
		/*notice的切换*/
		$(".rights .notice .outside li").hover(function(){
			$(this).addClass("selected")
		.siblings().removeClass("selected");
		$(".rights .notice .notice_text ul").eq($(this).index()).show()
		.siblings().hide();

		});
		/*moneylist的切换*/
		$(".model .model-list .lists-1").hover(function(){
			$(this).children("a").addClass("as");
			$(this).siblings(".lists").children("a").removeClass("as");
			$(".list-1").show().siblings(".phone-money-list").hide();
		});
		$(".model .model-list .lists-2").hover(function(){
			$(this).children("a").addClass("as");
			$(this).siblings(".lists").children("a").removeClass("as");
			$(".list-2").show().siblings(".phone-money-list").hide();
		});
		$(".model .model-list .lists-3").hover(function(){
			$(this).children("a").addClass("as");
			$(this).siblings(".lists").children("a").removeClass("as");
			$(".list-3").show().siblings(".phone-money-list").hide();
		});

		$(".phone-money-list span").click(function(){
			$(this).parent(".phone-money-list").hide();
			$(".model .model-list .lists a").removeClass("as");
		});

		/*淘宝头条的轮播*/

		function headline(){ 
		 	var index=0;	
		  function straightmove(){
		    $(".contents .middle-item .headline ul li").eq(index).slideDown().siblings().hide();
		    index++;
		    if(index==3){
		    	index=0;
		    }
		  }
		   setInterval(straightmove,3000);
		}
		headline();

});

