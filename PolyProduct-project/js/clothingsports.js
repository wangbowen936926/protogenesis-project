;(function (){
	
	/*左部*/
	$(".onsale_link_bg").on("mouseover", function(){
		$(this).css({
			"background": "rgba(100,50,150,.10)"
		})
		$(this).on("mouseout", function(){
		     $(this).css({
			     "background": "rgba(0,0,0,.0)"
		     })
	    })
	})
	
	/*右部*/
	$(".header-date-text").on("mouseover", function(event){
		$(".img-left").css({
			"display": "block",
		})
		$(this).children("li:first-of-type").css({
			"color": "#EE2567",
		})
		$(this).on("mouseout", function(){
			$(this).children("li:first-of-type").css({
			     "color": "darkslategrey",
		    })
		})
	})
	
	/*右部：左右滑动*/
	var setSlip = function(){
		var slip = $(".line");
		var span = $(".header-date-text:first");
		slip.css({
			'width': span.width() + 10,
			'left': parseInt(span.position().left) + 17 + 'px',
		});
		$(".header-date-text").mouseenter(function (){
			//显示滑块
			if(slip.css('display') == 'none'){
				slip.show();
			}
			//移动滑块
		    slip.stop().animate({
			     width: $(this).width() + 10 + 'px',
			     left: parseInt($(this).position().left) + 17 + 'px',
		    },300);
		});
	};
	setSlip();
	
    $(".img-left").on("mouseover", function(event){
    	$(this).css({
		     'background': "url(img/main_icon.png)-578px 2px no-repeat",
     	})
    	$(this).children("div").css({
    		"display": "block",
    	})
    	$(this).on("mouseout", function(event){
			$(this).css({
			     'background': "white",
            })
		    $(this).children("div").css({
			     "display": "none",
		    })
		})
    })
	
	//日期
	function getDates(value){
		var date = new Date();
		//月
		var mouth = date.getMonth() + 1;
		//日
		var nowDate = date.getDate() + value;
		//拼接
		return "0" + mouth + "." + "0" + nowDate;
	}
	$(".date-text-buttom:first").text(getDates(0));
	$(".date").text(getDates(1));
	$(".date-text-buttom:last").text(getDates(2));
	
})();
