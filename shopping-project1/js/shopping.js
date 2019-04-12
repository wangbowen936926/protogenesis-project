
;(function(){
	//获取对象
	var TotalPrice = $("#price0");
	var TotalPrices = $("#price1");
	var Quantity = $(".quantity0");
	var Quantitys = $(".quantity1");
	var Costone = $("ul:nth-child(2) li input[name = price]").val();
	var Costtwo = $("ul:last li input[name = price]").val();
	
	//删除事件
	$("p:last-child").click(function(){
		this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
	});
	
    //关闭窗口
    window.onload = function(){
    	$(".logo span").click(function(){
    	    if(confirm("确定要关闭吗！")){
    	    	window.close();
    	    }
        });
    }
    
    //收藏
    $("p:first-child").click(function(){
    	var flag = confirm("移入收藏后，将不在购物车显示，是否继续操作！");
    	if(flag == true){
    		this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    	}
    })
    
    //加
    function pluss(quantity,cost,total){
    	var count = parseInt(quantity.val())+1;
    	if(count > 99){
    		alert("对不起，库存不足！");
    	}else{
    		quantity.attr("value",count);
    		var totalPrice = parseFloat(cost*count);
    		total.text("¥" + totalPrice);
    	}
    	//总商品价
    	totals();
    }
    
    //减
    function minuss(quantity,cost,total){
    	 var count = quantity.val()-1;
    	if(count < 1){
    		alert("不能再减了，已是最底限啦！");
    	}else{
    		quantity.attr("value",count);
    		var totalPrice = parseFloat(cost*count);
    		total.text("¥" + totalPrice);
    	}
    	//总商品价
    	 totals();
    }
    
    //总商品价
    function totals(){
    	var prices = document.getElementsByName("price");
    	var count = document.getElementsByName("amount");
    	var sum = 0;
    	for(var i = 0; i < prices.length; i++){
    		sum+= prices[i].value*count[i].value;
    	}
    	$("#totalPrice span").text("¥" + sum);
    }
    totals();
    
    //结算
    $("ol li:last span").click(function(){
    	var total = $("#totalPrice span").text();
    	if(confirm("总计：" + total)){
    		alert("支付成功！");
    	}
    })
    
    //加
    $(".plusone").click(function(){ 
    	pluss(Quantity,Costone,TotalPrice);	
    })
    //减
    $(".minusone").click(function(){
    	minuss(Quantity,Costone,TotalPrice);
    })
    //加
    $(".plustwo").click(function(){ 
    	pluss(Quantitys,Costtwo,TotalPrices);
    })
    //减
    $(".minustwo").click(function(){
    	minuss(Quantitys,Costtwo,TotalPrices);
    })
    
    	
    
    

	
	
	
	
	
	
	
	
})();
