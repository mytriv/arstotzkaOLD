function makeid() {
    
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
        
        return text;

}

console.log(makeid());
document.getElementById('idout1').innerHTML = makeid(5);
document.getElementById('idout2').innerHTML = makeid(5);

