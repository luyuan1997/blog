window.onload = function(){
	var btn = document.querySelector('input');
	var text = document.querySelector("textarea");
	var list = document.querySelector("#list");
	var colors = ["red","pink"];
	var num = 0;
	btn.onclick = function(){
		if (text.value.trim() == ""){
			alert("难道你就对我如此淡漠，什么都不想和我说嘛？");
			return false;
		}
		var li = document.createElement("li");
		li.innerHTML = "我想轻轻地告诉你："+text.value;
		var a =null;
		li.onmouseover = function(){
			if(a){
				a.style.display="block";
			} else {
				a = document.createElement("a");
				a.href = "javascript:;";
				a.className = "clos";
				a.innerHTML = "删除留言";
				a.onclick = function(){
					list.removeChild(this.parentNode);
				};
				this.appendChild(a);
			}
		};
		li.onmouseout = function(){
			a.style.display = "none";
		};
		list.insertBefore(li,list.children[0]);
		text.value = "";
		num++;
	}
}