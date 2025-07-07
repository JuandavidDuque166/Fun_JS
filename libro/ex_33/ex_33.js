/*Acceder a archivos JSON con Fetch*/

let datosJson;

fetch('/ex_32/libros_.json') //Ruta donde se encuentra ubicado el archivo.
    .then(res => res.json()) //La función then son promesas que se van a ejecutar automáticamente una vez que la promesa se haya resuelto exitosamente (200). Es decir, que se ejecutará cuando reciba la respuesta.
    .then((salida) => {
        //Esta función se va a ejecutar una vez que la primera promesa se haya resuelto.
        datosJson = salida; //Se almacena en la variable el objeto JSON parseado para mostrarlo.

        let elementoTexto = document.getElementById('titulo'); //Se obtiene el Id del HTML.
        elementoTexto.textContent = datosJson.biblioteca[0].titulo; //Se muestra lo que se necesita del objeto JSON.
    });
