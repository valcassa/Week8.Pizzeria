

function calcoloCheckOut() {
    let checkBoxes = document.querySelectorAll("input[type='checkbox']");

    let priceData = document.querySelectorAll("td.prezzo");

    let spesa = 0.0;

    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            spesa += parseInt(priceData[i].innerHTML)
        }
    }

    if (spesa != 0.0)
        localStorage.setItem("conto", spesa);
    else {
        alert("Non hai selezionato nessuna pizza!");
        let goOnLink = document.getElementById("goOn");
        goOnLink.setAttribute("href", "Menu.html");
    }
}


        function mostraSpesa() {
            let spesaPar = document.getElementById("spesa");

            let spesa = localStorage.getItem("conto");

            spesaPar.innerHTML = "Stai per pagare: " + spesa + "&euro;	";
        }


function mostraCarta() {
    let carta = document.getElementById("codiceCarta");

    let sceltacarta = document.querySelector("input[value='1']");
    let sceltacontanti = document.querySelector("input[value='2']");

    if (sceltacarta.checked) {
        carta.style.display = "";
    }
    else if (sceltacontanti.checked) {
        carta.style.display = "none"
    }
}

function richiesta() {
    alert("Richiesta inviata");
}