let szamolas = function szamol (event) {
    event.preventDefault();

    let sz = document.getElementById('fname').value;

    let k = sz % 2

    let ha = sz % 3

    let o = sz % 5

    let he = sz % 7

    if (k == 0) {
        document.getElementById('megoldas').innerHTML = "Ez a szám prímszám."
    } else {
        if (ha == 0) {
            document.getElementById('megoldas').innerHTML = "Ez a szám prímszám."            
        } else {
            if (o == 0) {
                document.getElementById('megoldas').innerHTML = "Ez a szám prímszám."
            } else {
                if (he == 7) {
                    document.getElementById('megoldas').innerHTML = "Ez a szám prímszám."
                } else {
                    document.getElementById('megoldas').innerHTML = "Ez a szám nem prímszám."
                }
            }
        }
    }

}

document.getElementById('szamol').addEventListener('click', szamolas)


