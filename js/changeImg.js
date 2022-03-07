var arrA = document.querySelectorAll('.third-w-top img');
var vedio = document.querySelector('.v');
console.log(arrA);
for(var i = 0 ; i <arrA.length ; i++){
	arrA[i].setAttribute('dataIndex',i);
	arrA[i].addEventListener('click',function(){
		
		vedio.src='img/学院/'+this.getAttribute('dataIndex')+'.mp4';
	})
}