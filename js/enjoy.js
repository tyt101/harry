var text = document.querySelector('textarea');
		var btn = document.querySelector('button');
		var ul = document.querySelector('ul');
		var submit = document.getElementById('submit');
		var accountText = document.getElementById('text');
		var Num = document.getElementById('text1');
		text.value="";
		btn.addEventListener('click',function(){
			if(text.value==""){
				alert("文本不能为空");
			}
			else{
				var li = document.createElement('li');
				li.innerHTML = text.value+"<a href='javascript:;'>删除</a>";
				ul.insertBefore(li, ul.children[0]);
				var as = document.querySelectorAll('a');
				for (var i = 0; i < as.length; i++) {
				    as[i].onclick = function() {
				        ul.removeChild(this.parentNode);
				    }
				}
				text.value="";
			}
		})
		submit.addEventListener('click',function(){
			if(submit.value==""||Num.value==""){
				alert("兑换号码或账号为空,请补充");
			}else{
				var li = document.createElement('li');
				li.innerHTML = accountText.value +"已成功兑换";
				ul.insertBefore(li, ul.children[0]);
				accountText.value="";
				Num.value="";
			}
			
		})