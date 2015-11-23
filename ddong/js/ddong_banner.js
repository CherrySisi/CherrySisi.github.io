window.onload=function(){
	
	var oDiv=document.getElementById('banner_bar');
	var aBtn=document.getElementById('imgNum').getElementsByTagName('a');
	//在div取得轮播数字列表
	var oUl=document.getElementById('imgBOx');
	//取得div中取得图片列表
	var now=0;


	for (var i = 0; i < aBtn.length; i++) {

		aBtn[i].index=i;
		aBtn[i].onclick=function(){
			//当点击后显示的是点击的当前页面

			now=this.index;
			tab();
			
		};
	}
	function tab(){
		//图片播放和样式的切换
		for (var i = 0; i < aBtn.length; i++) {
				aBtn[i].className='';
				//把所有的btn的样式设置为空
			}

			aBtn[now].className='active';
			//给当前元素添加active的样式
			// oUl.style.top=-150*this.index+'px';

			startMove(oUl,{left: -810*now});
			//移动-150*个数，实现页面的转换
	}

	function next(){
		//设置自动轮播的样式
		now++;
		if (now==aBtn.length) {
			//当now=btn按钮的长度，那么就给他重新赋值，让他now=0
			now=0;
		} 
		tab();
	}
	var  timer=setInterval(next,2000);
	//设置自动播放
	oDiv.onmouseover=function(){
		clearInterval(timer);
	};
	oDiv.onmouseout=function(){
		timer=setInterval(next, 2000);
	}


};




function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		//
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}

function startMove(obj, json, fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;//假设所有的值已经到了。

		for (var attr in json) {
			var cur=0;
		
			if(attr=='opacity')
				//先判断是不是透明度还是其他，再给他使用方法
			{
				cur=Math.round(parseFloat(getStyle(obj, attr))*100);
				//Math.round表示的是对最后的值进行四舍五入的方式来取整（因为开始的时候用的是parseFloat）
			}
			else
			{
				cur=parseInt(getStyle(obj, attr));
			}
			
			var speed=(json[attr]-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);

			if(cur!=json[attr])
				bStop=false;
		
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
				
				// document.getElementById('txt1').value=obj.style.opacity;
				// 将透明的值打印出来在id=txt的input上
			}
			else
			{
				obj.style[attr]=cur+speed+'px';
			}
			
		}
		if(bStop){
			clearInterval(obj.timer);

			if(fnEnd)fnEnd();
		}
	}, 30);
}























