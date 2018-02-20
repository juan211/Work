function Passsword() {
  var passwd = '';
  var keyWord =document.getElementById('key').value;
var number= document.getElementById('Digits').value;
  for (i=1; i<=number; i++) {
	 var length = keyWord.length;
    var c = Math.floor(Math.random()*length);
    passwd += keyWord.charAt(c)
  }
	return passwd;
}
var submit = document.getElementById('submit');

submit.onclick= function(){
	var userName= document.getElementById('user');
	result.innerText="User Name: "+userName.value+"\n"+"password: " +Passsword();
}