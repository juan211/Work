submit.onclick = function () {
  var pizza = document.getElementsByName("Purple");
  var orange = document.getElementsByName("Orange");
  var yellow = document.getElementsByName("yellow");
  var Red = document.getElementsByName("Red");
  var blue= document.getElementsByName("blue");

  
  var message1 = document.getElementById("message1");
  var message2 = document.getElementById("message2");
  var message3 = document.getElementById("message3");
  var message4 = document.getElementById("message4");
  var message5 = document.getElementById("message5");
  var message6 = document.getElementById("message6");
  var totalans = document.getElementById("totalans");

  var count = 0;

    
for (var i=0; i<pizza.length; i++) {
    if(pizza[i].checked) {
        var qz1 = pizza[i].value;
        console.log(qz1);
        break;  
    }
}
for (var i=0; i<orange.length; i++) {
    if(orange[i].checked) {
        var qz2 = orange[i].value;
        console.log(qz2);
        break;  
    }
}
for (var i=0; i<yellow.length; i++) {
    if(yellow[i].checked) {
        var qz3 = yellow[i].value;
        console.log(qz3);
        break;  
    }
}
for (var i=0; i<Red.length; i++) {//*
    if(Red[i].checked) {
        var qz4 = Red[i].value;
        console.log(qz4);
        break;  
    }
}
for (var i=0; i<blue.length; i++) {
    if(blue[i].checked) {
        var qz5 = blue[i].value;
        console.log(qz5);
        break;  
    }

}

if(qz1==="qz1-3") {
    message1.innerHTML = "Fanstastic!";
    count++;
    
}else{
    message1.innerHTML = "Hint:R,B ?";
}
if(qz2==="qz2-1") {
    message2.innerHTML = "correct again!";
    count++;
    
}else{
    message2.innerHTML = "Hint:rhymes with hello.";
}
if(qz3==="qz3-3") {
    message3.innerHTML = "correct";
    count++;
    
}else{
    message3.innerHTML = "Hint:Rhymes with bello ";
}
if(qz4==="qz4-3") {
    message4.innerHTML = "Correct!";
    count++;
    
}else{
    message4.innerHTML = "Hint Like hawaiin punch!";
}
if(qz5==="qz5-1") {
    message5.innerHTML = "Correct!";
    count++;
    
}else{
    message5.innerHTML = "Hint: Like the sky!";
}


if(count==5) {
   totalans.innerHTML = "Someone been studying " + count + " / 5 Score!";    
}else if (count >= 5){
    totalans.innerHTML = " " + count + " /5 Score!";
}else if (count >= 4) {
    totalans.innerHTML = "almost got it" + count + " /5 Score!";
}else if (count <= 3 ){
    totalans.innerHTML = "What are the odds?" + count + " /5 Score!";
}
 
    
    
};