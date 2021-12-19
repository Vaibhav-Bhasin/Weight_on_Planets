function run(){
    var w = document.getElementById("weight");
    var p = document.getElementById("planetname");
    var g = document.getElementById("result");
    g.innerHTML=w.value+p.value;
    console.log(w.value,p.value);
}
