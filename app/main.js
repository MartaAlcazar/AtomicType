
let input = "H, H, O";

let separado = input.replace(/[, ]+/g, " ").trim().split(" ");
console.log(separado);
for (let key in elements) {
    for (let i = 0; i < separado.length; i++) {
        if (elements[key].abbreviation === separado[i]) {
            console.log(key);
            console.log(elements[key].valence);
            console.log("encontrado");
        }
    }
}

const txt1 = document.getElementById("tbuser");
const btn1 = document.getElementById("btn1");
const out1 = document.getElementById("output1");

/*
function fun1() {
    out1.innerHTML = txt1.value;
}
*/

//txt1.addEventListener('keypress',fun1);

function checkElement() {
    let trueElement = document.getElementById("true_element").innerHTML;
    let inputElement = document.getElementById("EnterElements").value;
    let showAlert = document.getElementById("alerta_error");

    console.log(trueElement, inputElement);

    if (trueElement == inputElement) {
        addDlig();
    } else {
       
        showAlert.classList.toggle("display_none");
    }
}

function addDlig() {
    var element = document.getElementById("EnterElements_output");
    var activatenxtlvl = document.getElementById("siguiente_elemento");

    element.classList.add("animate__animated", "animate__rubberBand");

    setTimeout(() => {
        element.classList.add("add_dlig");
    }, 350);

    setTimeout(() => {
        activatenxtlvl.classList.remove("display_none");
        activatenxtlvl.classList.add("animate__animated", "animate__fadeInUp");
    }, 750);
}

//  const trueElement = ;
//const trueElement = document.getElementById('true_element');
