function saludo(){
    swal('¡Hola!');
}




    function saludoPersonalizado(){
    swal('¡Hola!', 'Bienvenido al curso de js', 'success');
    swal({
        title: "¡Hola!",
        text: "Bienvenido al curso de js",
        icon: "success",
        button: "¡enginer!",
    })
}