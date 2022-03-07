var A = document.querySelectorAll('a');
			var con = document.querySelectorAll('.transTOLe .con');
			var startRight=0,startTop=0;
			for(var i = 0;i<A.length;i++){
				A[i].addEventListener('mouseenter',function(){
					var mm = this.querySelector('img');
					mm.src = "img/浮/"+mm.getAttribute("index")+".1.png";
					mm.className = "map"+mm.getAttribute("index")+" sca";
				})
				A[i].addEventListener('mouseleave',function(){
					var mm = this.querySelector('img');
					mm.src = "img/浮/"+mm.getAttribute("index")+".png";
					mm.className = "map"+mm.getAttribute("index");
				})
			}
			for(var i = 0;i<con.length;i++){
				con[i].addEventListener('mouseenter',function(){
					this.style.left=0;
				})
				con[i].addEventListener('mouseleave',function(){
					this.style.left="80px";
				})
			}