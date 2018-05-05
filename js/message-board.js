window.onload = function(){
	var btn = document.getElementById('mess-button');
	var text = document.querySelector("#mess-text");
	var list = document.querySelector("#mess-list");
	var colors = ["red","pink"];
	var num = 0;
	btn.onclick = function(){
		alert("难道你就对我如此淡漠，什么都不想和我说嘛？");
		// if (text.value.trim() == ""){
		// 	alert("难道你就对我如此淡漠，什么都不想和我说嘛？");
		// 	return false;
		// }
		// var li = document.createElement("li");
		// li.innerHTML = "我想轻轻地告诉你："+text.value;
		// if(list.children[0]&&list.children[0].className == "red"){
		// 	li.className = "pink";
		// } else {
		// 	li.className = "red";
		// };
		// var a =null;
		// li.onmouseover = function(){
		// 	if(a){
		// 		a.style.display="block";
		// 	} else {
		// 		a = document.createElement("a");
		// 		a.href = "javascript:;";
		// 		a.className = "clos";
		// 		a.innerHTML = "删除留言";
		// 		a.onclick = function(){
		// 			list.removeChild(this.parentNode);
		// 		};
		// 		this.appendChild(a);
		// 	}
		// };
		// li.onmouseout = function(){
		// 	a.style.display = "none";
		// };
		// list.insertBefore(li,list.children[0]);
		// text.value = "";
		// num++;
	}
}