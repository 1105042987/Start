const sInfor = document.getElementById("search");

//isEmpty;
let isEmpty =function (obj)  {
    if (obj === null) return true;
    if (typeof obj === 'undefined') {
      return true;
    }
    if (typeof obj === 'string') {
        let reg = new RegExp("^([ ]+)|([　]+)$");
        //判断有空格，如果有空格，删除左边空格；
        if( reg.test(obj)){
            obj=obj.replace(/(^\s*)/g,"");
        }

      if (obj === "") {
        return true;
      }
    }
    return false;
}
//doAction 搜索跳转方法
/*  
p：搜索网址前段 
n: 搜到网址后段
h: 搜索首页
*/

let clickAction=function(name){
  if (name=="scholar") {
  // if (window.event.ctrlKey == 1&&window.event.shiftKey == 1) {
    p = "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=";
    n = "&btnG=";
    s = 'https://scholar.google.com/';
    doAction(p, n, s);
  }
  else if (name=="google") {
    p = "https://www.google.com/search?q=";
    n = "&gws_rd=cr&nfpr=1&newwindow=1&num=30";
    s = 'https://www.google.com/webhp?gws_rd=cr&nfpr=1&newwindow=1&num=30';
    doAction(p, n, s);
  }
  else if (name=="trans") {
    var reg= /^[A-Za-z]+$/;
    var lang = 'en'
    if (reg.test(sInfor.value[0])){lang='zh-CN'}
    p = 'https://translate.google.cn/#view=home&op=translate&sl=auto&tl='+lang+'&text=';
    n = '';
    s = 'https://translate.google.cn/';
    doAction(p, n, s);
  }
  else{
    p = "https://www.baidu.com/s?wd=";
    doAction(p, '', p);
  }
}

let doAction=function(p,n,s){
    if(isEmpty(sInfor.value)){
		window.open(s, '_self');
    }else{
        window.open(p+sInfor.value+n,'_self');
    }
    
}

//拼接网址
let p='';
let n='';
let s=''

document.onkeydown = function (e) { // 回车提交表单
    // 兼容FF和IE和Opera
  var theEvent = window.event || e;
	var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
	if (document.getElementById('mask').style.display=='none' && code == 13) {
    if (window.event.altKey == 1) {
    // if (window.event.ctrlKey == 1&&window.event.shiftKey == 1) {
      p = "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=";
			n = "&btnG=";
			s = 'https://scholar.google.com/';
			doAction(p, n, s);
    }
    else if (window.event.ctrlKey == 1) {
			p = "https://www.google.com/search?q=";
			n = "&gws_rd=cr&nfpr=1&newwindow=1&num=30";
			s = 'https://www.google.com/webhp?gws_rd=cr&nfpr=1&newwindow=1&num=30';
			doAction(p, n, s);
		}
		else if (window.event.shiftKey == 1) {
      var reg= /^[A-Za-z]+$/;
      var lang = 'en'
      if (reg.test(sInfor.value[0])){lang='zh-CN'}
      p = 'https://translate.google.cn/#view=home&op=translate&sl=auto&tl='+lang+'&text=';
			n = '';
			s = 'https://translate.google.cn/';
			doAction(p, n, s);
		}
		else{
			p = "https://www.baidu.com/s?wd=";
			doAction(p, '', p);
		}
	}
}
