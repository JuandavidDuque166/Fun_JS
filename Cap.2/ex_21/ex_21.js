function Seleccion() {
    let cantidad = 0; //esta cantidad se ira sumando a medida que se escoja o se seleciione un lenguaje de programacion

    if (document.getElementById("check1").checked){
        cantidad ++;
    }
        if (document.getElementById("check2").checked){
        cantidad ++;
    }

    if (document.getElementById("check3").checked){
        cantidad ++;
        }
if (document.getElementById("check4").checked){
        cantidad ++;
        }
        if (document.getElementById("check5").checked){
        cantidad ++;
        }

        if(cantidad == 1){
            swal("conoces ${cantidad} lenguajes de programacion");
            }
    else{
        swal("conoces ${cantidad} lenguajes de programacion");
    }
        }

