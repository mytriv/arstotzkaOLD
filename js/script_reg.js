function makeid() {
    
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
        
        return text;

}
function makeYear(){
    var year = "";
    var possible = "23456789";

    for (var i = 0; i < 2; i++)
    year += possible.charAt(Math.floor(Math.random() * possible.length));
        
        return year;
}

document.getElementById('idout1').innerHTML = makeid(5);
document.getElementById('idout2').innerHTML = makeid(5);

show.visible = 'input-form';
show.hidden = 'passport';

function show(){
    show.hidden = show.visible;
    show.visible = (show.visible === 'input-form')?'passport':'input-form';
    document.getElementById(show.visible).style.display = 'block';
    document.getElementById(show.hidden).style.display = 'none';

}

function generate(){
    document.getElementById('name').innerHTML = document.getElementById('name-inp').value;
    document.getElementById('dob').innerHTML = document.getElementById('dob-inp').value;
    document.getElementById('sex').innerHTML = document.getElementById('sex-inp').value;
    document.getElementById('iss').innerHTML = document.getElementById('iss-inp').value;
    document.getElementById('exp').innerHTML = "01.01.20"+ makeYear(2);
}
