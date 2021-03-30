var button = document.getElementById('code');
button.disabled = true;

function validasi(){
  var message = "";
  var kode = document.getElementById("kode").value;
  if(kode == "1700"){
    message = "And the door opens!";
    document.getElementById("error").innerHTML = message;
    button.disabled = false;
  }
  else{
    message = "The door does not open. You and your friends review the conversation and the poster again.";
    document.getElementById("error").innerHTML = message;
    button.disabled = true;
  }
}