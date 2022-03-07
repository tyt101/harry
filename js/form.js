var name = location.search.substr(1);
var arr = name.split('=');
var h = document.getElementById('h');
if(!arr[1]){
	arr[1]="轻飘过的你";
}
h.innerHTML = '感谢'+arr[1]+'完成阅读';
