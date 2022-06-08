let szamolas = function szamol (event) {
    
    event.preventDefault();

    let sz = document.getElementById('fname').value;

    let k = sz % 2

    let ha = sz % 3

    let o = sz % 5

    let he = sz % 7

    if (k == 0) {
       if (k == 2) {
            document.getElementById('megoldas').innerHTML = "Ez a szám prímszám."
       } else{
           document.getElementById('megoldas').innerHTML = "Ez a szám nem prímszám."
       }
    } else {
        if (ha == 0) {
            if (ha == 3) {
                document.getElementById('megoldas').innerHTML = "Ez a szám prímszám."
            } else{
                document.getElementById('megoldas').innerHTML = "Ez a szám nem prímszám."          
            }     
        } else {
            if (o == 0) {
                if (o == 5) {
                    document.getElementById('megoldas').innerHTML = "Ez a szám prímszám."
                } else {
                    document.getElementById('megoldas').innerHTML = "Ez a szám nem prímszám."
                }
            } else {
                if (he == 0) {
                    if (he == 7) {
                        document.getElementById('megoldas').innerHTML = "Ez a szám prímszám."
                    } else {
                        document.getElementById('megoldas').innerHTML = "Ez a szám nem prímszám."
                    }
                } else {
                    document.getElementById('megoldas').innerHTML = "Ez a szám prímszám."
                }
            }
        }
    }

    return false;

}

document.getElementsByClassName('gomb').addEventListener('click', szamolas)


