var button = document.getElementById('code4');
button.disabled = true;

function validasi4(){
  var message = "";
  var kode4 = document.getElementById("kode4").value;
  var kode5 = document.getElementById("kode5").value;
  if((kode4 == "SC22" || kode4 == "sc22") && (kode5 == "ID118" || kode5 == "id118")){
    message = "You pull on the lock";
    document.getElementById("error").innerHTML = message;
    button.disabled = false;
  }
  else{
    message = "You and your friends go back to the library to study the message, map, and lists again. You find some extra maps that could help.";
    document.getElementById("error").innerHTML = message;
    button.disabled = true;
  }
}