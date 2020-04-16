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
    if (isDelete == 1){
        window.localStorage.removeItem(name)
        refresh()
    }
    else{
        if (isEdit == 1){
            document.getElementById('mask').style.display=''
            document.getElementById('names').value=name
            document.getElementById('urls').value=url
        }
        else{
            window.open(url,'_self')
        }
    }
}

var isDelete = 0;
var backUpColor = '';
let switchDelete=function(){
    if (document.getElementById('deletemask').style.display == 'none'){
        document.getElementById('deletemask').style.display = '';
        document.getElementById('editmask').style.display = 'none';
        isDelete=1;
        isEdit=0;
        backUpColor = document.getElementById('DEL').style.background;
        document.getElementById('DEL').style.background = '#FFFFFF';
        document.getElementById('EDIT').style.background = backUpColor;
    }
    else{
        document.getElementById('deletemask').style.display = 'none';
        document.getElementById('editmask').style.display = 'none';
        isDelete=0;
        isEdit=0;
        document.getElementById('DEL').style.background = backUpColor;
        document.getElementById('EDIT').style.background = backUpColor;
    }
}
var isEdit = 0;
let switchEdit=function(){
    if (document.getElementById('editmask').style.display == 'none'){
        document.getElementById('editmask').style.display = '';
        document.getElementById('deletemask').style.display = 'none';
        isEdit=1;
        isDelete=0;
        backUpColor = document.getElementById('EDIT').style.background;
        document.getElementById('EDIT').style.background = '#FFFFFF';
        document.getElementById('DEL').style.background = backUpColor;
    }
    else{
        document.getElementById('editmask').style.display = 'none';
        document.getElementById('deletemask').style.display = 'none';
        isEdit=0;
        isDelete=0;
        document.getElementById('DEL').style.background = backUpColor;
        document.getElementById('EDIT').style.background = backUpColor;
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