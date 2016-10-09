window.onload=function() {
	var arr=[
	    '出门游玩，访问好友，看书，听音乐，种树',
	    '二月2222222',
	    '三月。。。。。。',
	    '四月，出门看风景，看书，学烹饪',
	    '五月，sjjsbnjcj',
	    '六月，6666666666',
	    '七月。。。。。。',
	    '八月，出门看风景，看书，学烹饪',
	    '九月，sjjsbnjcj',
	    '十月，6666666666',
	    '十一月。。。。。。',
	    '十二月，出门看风景，看书，学烹饪',
	];
	var obox=document.getElementById("box");
	var oli=obox.getElementsByTagName("li");
	var odiv=obox.getElementsByTagName("div")[0];
	for(var i=0;i<oli.length;i++){
		oli[i].index=i;
		oli[i].onmouseover=function(){
			for(var i=0;i<oli.length;i++){
				oli[i].className=" ";
				
			}
			this.className="active";
			odiv.innerHTML="<h3>"+(this.index+1)+"月活动"+"</h3>"+"<p>"
			+arr[this.index]+"</p>"
		}
	}
}
