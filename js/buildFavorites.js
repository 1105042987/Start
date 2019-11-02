var openFile = function(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function() {
        if(reader.result) {
            //显示文件内容
            json=eval(reader.result);
            for(var i in json){
                window.localStorage[json[i]['name']]=json[i]['url']
            }
            document.getElementById('mask').style.display = 'none'
            refresh()
        }
    };
    reader.readAsText(input.files[0]);
};

let judgeClick = function(name,url){
    if (isDelete == 0){
        window.open(url,'_self')
    }
    else{
        window.localStorage.removeItem(name)
        refresh()
    }
}

var isDelete = 0;
let switchDelete=function(){
    if (document.getElementById('deletemask').style.display == 'none'){
        document.getElementById('deletemask').style.display = '';
        isDelete=1;
    }
    else{
        document.getElementById('deletemask').style.display = 'none';
        isDelete=0;
    }
}

let createChild = function(fa,name,url){
    let subbutton = document.createElement("button");
    subbutton.setAttribute("class","ui button");
    subbutton.setAttribute("onclick","judgeClick('"+name+"','"+url+"')");
    subbutton.style.zIndex=100;
    subbutton.style.position='relative';
    subbutton.innerHTML=name;
    fa.appendChild(subbutton);
}

let createAppend = function(fa){
    let subbutton = document.createElement("button");
    subbutton.setAttribute("class","ui button");
    subbutton.setAttribute("onclick","init()");
    subbutton.innerHTML='+';
    fa.appendChild(subbutton);
}

let init = function(){
    document.getElementById('mask').style.display=''
    document.getElementById('names').value=''
    document.getElementById('urls').value=''
}

let putObj = function() {
    var name = document.getElementById('names').value;
    var url = document.getElementById('urls').value;
    window.localStorage[name]=url;
    document.getElementById('mask').style.display='none';
    refresh()
}

let refresh = function(){
    var fa = document.getElementById("userFavorites");
    fa.innerHTML=''
    for (var i=0;i<window.localStorage.length;i++){
        name = window.localStorage.key(i);
        createChild(fa,name,localStorage.getItem(name))
    }
    createAppend(fa)
}

function Copy(){
	const input = document.createElement('input');
    input.setAttribute('readonly', 'readonly');
    var str = '['
    for (var i=0;i<window.localStorage.length;i++){
        var name = window.localStorage.key(i);
        var url = localStorage.getItem(name)
        if (i!=0) str+=',';
        str += "{\"name\":\""+name+"\",\"url\":\""+url+"\"}"
    }
    str+=']'
    input.setAttribute('value',str);
    document.body.appendChild(input);
    input.setSelectionRange(0, 9999);
    input.select()
	if (document.execCommand('copy')) {
		document.execCommand('copy');
        // console.log(str);
        alert('Copy Successed')
	}
    document.body.removeChild(input);
}

function backUp(){
	var str = '['
    for (var i=0;i<window.localStorage.length;i++){
        var name = window.localStorage.key(i);
        var url = window.localStorage.getItem(name)
        if (i!=0) str+=',';
        str += "{\"name\":\""+name+"\",\"url\":\""+url+"\"}"
    }
    str+=']'
	var y="data:text/plain," + str;
	var dlBn=document.createElement('a');
	dlBn.href=y;
    dlBn.download="user.json";
	dlBn.click();
}