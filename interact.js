function rno(name){
var rand = Math.floor(Math.random()*1000) + Math.floor(Math.random()*20);
var name = name+rand;
player.alias = name;
interact(name);
}
function interact(name,ach,exp,ur,hearts,money){
var url = "https://ratnodadhi.000webhostapp.com/qcollection.php?name="+name+"&ach="+ach+"&exp="+exp+"&ur="+ur+"&hearts="+hearts+"&money="+money;
var xhr = new XMLHttpRequest();
xhr.open('GET',url, true);
xhr.send();
xhr.addEventListener("readystatechange", processRequest, false);
}
