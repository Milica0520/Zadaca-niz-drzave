var countris = [];//ovu je niz gdje idu drzave koje dodajemo 
var tabel = document.getElementById("geography")
var headerRed = tabel.innerHTML;//da li je ovaj tabel.innerHtml ustvari isti kao document.getElementById("geography")?

function read() {
    tabel.innerHTML = headerRed;
    for (var i = 0; i < countris.length; i++) {
        tabel.innerHTML += "<tr><td>" + countris[i] + "</td><td><button onclick ='del(" + i + ")'>Delete</button></td></tr>";  
    }

}

function addCountry() {
    var newCountry = document.getElementById("country").value;/*I da li je var newCountry na kraju isti kao var  headerRed tj, 
    sa document.getElementById("geography")*/
    
    
    countris.push(newCountry);//dodaje zadnju zemlju koju smo unijeli
    countris.sort();//sortira ih po alfabetu
    read();//i ispisuje
}

function del(index){
    countrys.splice(index,1);
    read();
}
