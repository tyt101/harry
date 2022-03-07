window.addEventListener('load',function(){
	var num = 0;
	var circle=0;
	var row_L = document.querySelector('.row-L');
	var row_R = document.querySelector('.row-R');
	var lunbo = document.querySelector('.lunbo');
	lunbo.addEventListener('mouseenter',function(){
		row_L.style.display='block';
		row_R.style.display='block';
	})
	lunbo.addEventListener('mouseleave',function(){
		row_L.style.display='none';
		row_R.style.display='none';
	})
	var ul = lunbo.querySelector('ul');
	var ol = lunbo.querySelector('ol');
	for(var i = 0;i<ul.children.length;i++){
		var li = document.createElement('li');
		li.setAttribute('dataIndex',i);
		ol.appendChild(li);
		li.addEventListener('click',function(){
			for(var i = 0;i<ol.children.length;i++){
				ol.children[i].className='';
			}
			this.className='current';
			num = this.getAttribute('dataIndex');
			circle = this.getAttribute('dataIndex');
			anim(ul,-900*num);
		})
	}
	ol.children[0].className='current';
	var first = ul.children[0].cloneNode(true);
	ul.appendChild(first);
	ol.style.width=(ol.children.length)*24-10+'px';
	ol.children[ol.children.length-1].style.margin='4px 0 0 0';
	
	row_R.addEventListener('click',function(){
		
		if(num==ol.children.length)
		{
			ul.style.left=0;
			num=0;
		}
		num++;
		anim(ul,-900*num);
		circle++;
		for(var i = 0;i<ol.children.length;i++){
			ol.children[i].className='';
		}
		if(circle==ol.children.length){
			circle=0;
		}
		ol.children[circle].className='current';
	})
	
	row_L.addEventListener('click',function(){
		
		if(num==0)
		{
			num=ol.children.length;
			ul.style.left=num*(-900)+'px';
			
		}
		num--;
		anim(ul,-900*num);
		circle--;
		for(var i = 0;i<ol.children.length;i++){
			ol.children[i].className='';
		}
		if(circle<0){
			circle=ol.children.length - 1;
		}
		ol.children[circle].className='current';
	})
	var auto;
	auto = setInterval(function(){
		row_R.click();
	},2000)
	lunbo.addEventListener('mouseout',function(){
		auto = setInterval(function(){
			row_R.click();
		},2000)
	})
	lunbo.addEventListener('mouseover',function(){
		clearInterval(auto);
	})
})