var button2 = document.getElementById('code2');
button2.disabled = true;

function validasi2(){
  var message = "";
  var kode2 = document.getElementById("kode2").value;
  var kode3 = document.getElementById("kode2-2").value;
  if(kode2 == "119" && kode3 == "1044"){
    message = "Go to the next part!";
    document.getElementById("error").innerHTML = message;
    button2.disabled = false;
  }
  else{
    message = "Nothing happens. Your friends and you decide to check your math again.";
    document.getElementById("error").innerHTML = message;
    button2.disabled = true;
  }
}