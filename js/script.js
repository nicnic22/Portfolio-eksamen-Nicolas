if(document.URL.indexOf("index.html") >= 0){ 

    var string = "Velkommen til min portfolio hjemmeside";
    var str = string.split("");
    var el = document.getElementById('str');

    (function animate() {
    str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 90);
    }
    )();

}


if(document.URL.indexOf("portfolio.html") >= 0){ 

    var string2 = "Mine projekter";
    var str2 = string2.split("");
    var el2 = document.getElementById('str2');

    (function animate() {
    str2.length > 0 ? el2.innerHTML += str2.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 90);
    }
    )();

}


if(document.URL.indexOf("tema2.html") >= 0){ 

    var string3 = "Tema 2 - Grundlæggende web";
    var str3 = string3.split("");
    var el3 = document.getElementById('str3');

    (function animate() {
    str3.length > 0 ? el3.innerHTML += str3.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 120);
    }
    )();
    
}


if(document.URL.indexOf("tema3.html") >= 0){ 

    var string3 = "Tema 3 - UX";
    var str3 = string3.split("");
    var el3 = document.getElementById('str3');
    
    (function animate() {
    str3.length > 0 ? el3.innerHTML += str3.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 120);
    }
    )();
    
}


if(document.URL.indexOf("tema4.html") >= 0){ 

    var string3 = "Tema 4 - Animation";
    var str3 = string3.split("");
    var el3 = document.getElementById('str3');
    
    (function animate() {
    str3.length > 0 ? el3.innerHTML += str3.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 120);
    }
    )();
    
}


if(document.URL.indexOf("tema5.html") >= 0){ 

    var string3 = "Tema 5 - Grundlæggende indhold";
    var str3 = string3.split("");
    var el3 = document.getElementById('str3');
    
    (function animate() {
    str3.length > 0 ? el3.innerHTML += str3.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 120);
    }
    )();
    
}


if(document.URL.indexOf("tema6.html") >= 0){ 

    var string3 = "Tema 6 - Portfolio opgave";
    var str3 = string3.split("");
    var el3 = document.getElementById('str3');
    
    (function animate() {
    str3.length > 0 ? el3.innerHTML += str3.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 120);
    }
    )();
    
}


if(document.URL.indexOf("about.html") >= 0){ 

    var string3 = "Om mig";
    var str3 = string3.split("");
    var el3 = document.getElementById('str3');
    
    (function animate() {
    str3.length > 0 ? el3.innerHTML += str3.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 120);
    }
    )();
    
}


function myFunction(imgs) {
    var expandImg = document.getElementById("expanded");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}