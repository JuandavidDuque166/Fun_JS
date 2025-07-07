// mostrar valores de un select en js

function CambiarColor(){
    let seleccion = document.getElementById('select');

    document.getElementById('text1').value = seleccion.selectedIndex;
    document.getElementById('text2').value = seleccion.options[select.selectedIndex].text;
    document.getElementById('text3').value = seleccion.options[select.selectedIndex].value;
}