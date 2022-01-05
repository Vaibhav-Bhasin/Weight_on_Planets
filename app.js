function run(){
    var w = document.getElementById("weight");
    var p = document.getElementById("planetname");
    var g = document.getElementById("result");
    if (p.value=="Mercury"){
        ans=w.value*3.7/9.8;
    }
    if (p.value=="Venus"){
        ans=w.value*8.87/9.8;
    }
    if (p.value=="Earth"){
        ans=w.value*9.8/9.8;
    }
    if (p.value=="Mars"){
        ans=w.value*3.711/9.8;
    }
    if (p.value=="Jupiter"){
        ans=w.value*24.79/9.8;
    }
    if (p.value=="Saturn"){
        ans=w.value*10.44/9.8;
    }
    if (p.value=="Uranus"){
        ans=w.value*8.69/9.8;
    }
    if (p.value=="Neptune"){
        ans=w.value*11.15/9.8;
    }
    if (p.value=="GANYMEDE"){
        ans=w.value*0.146/9.8;
    }
    if (p.value=="Pluto"){
        ans=w.value*0.059/9.8;
    }
    if (p.value=="IO"){
        ans=w.value*0.183/9.8;
    }
    if (p.value=="EUROPA"){
        ans=w.value*10/9.8;
    }
    if (p.value=="CALLISTO"){
        ans=w.value*0.126/9.8;
    }
    if (p.value=="SUN"){
        ans=w.value*28.02/9.8;
    }
    if (p.value=="A WHITE DRAWF"){
        ans=w.value*68/9.8;
    }
    if (p.value=="A NEUTRON STAR"){
        ans=w.value*200000000000/9.8;
    }
    g.innerHTML="Your Weight on "+p.value+" is "+ ans +"kg.";
    console.log(ans);
}