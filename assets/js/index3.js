var button = document.getElementById('code3');
button.disabled = true;

function validasi3(){
  var message = "";
  var kode3 = document.getElementById("kode3").value;
  var kode4 = document.getElementById("kode4").value;
  var kode5 = document.getElementById("kode5").value;
  var kode6 = document.getElementById("kode6").value;
  if((kode3 == "right" || kode3 == "Right") && (kode4 == "up" || kode4 == "Up") && (kode5 == "up" || kode5 == "Up") && (kode6 == "down" || kode6 == "Down")){
    message = "You pull down on the lock and it opens!";
    document.getElementById("error").innerHTML = message;
    button.disabled = false;
  }
  else{
    message = "Nothing happens. Your friends and you decide to reinspect the two papers you found.";
    document.getElementById("error").innerHTML = message;
    button.disabled = true;
  }
}