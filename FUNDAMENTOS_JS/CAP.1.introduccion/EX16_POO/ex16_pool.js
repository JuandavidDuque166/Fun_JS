/*

pilares de la programacion orientada a objetos

Los paradigmas principalmente que dan paso a la POO son imperativo y el Decalarativo

Abstraccion: Oculta detalles internos y muestra las carateristicas RELEVANTES.

Encapsulamiento: protege los datos de un objeto para evitar accesos indebidos, promoviendo el uso de metodos publicos para interactuar con ellos.

Hrencia: permite que na clase reutilice los atributos y metodos de otra, promoviendo la extension y personalizacion.

polimorfismo: Habilidad de un metodo o funcion para comportarse de diferentes maneras segun el objeto o los argumentos con los que interactua

*/

class vehiculo {

    constructor (marca , modelo, color, año){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.año = año;
        this. encendido = false;
    }
    encender(){
        this. encendido = true;
        console.log(
            '${this.marca} ${this.modelo} esta encendido.' );
    }
    apagar(){
        this.encendido = false;
        console.log('${this.marca} ${this.modelo} esta apagado.' );
    }
    tocarBocina(){
        this.encendido = false;
        console.log('${this.marca} ${this.modelo} esta tocando la bocina.');

    }
mostrarInfo(){
    console.log('vehiculo: ${this.marca} ${this.modelo} ($this.año}) - color: ${this.color}')
}

}

//crear instancia
const miAuto = new vehiculo("toyota", "corolla", "rojo", 202);

//probar los metodos 
miAuto.mostrarInfo();
miAuto.encender();
miAuto.tocarBocina();
miAuto.apagar();

//clase animal
class animal {
    constructor(nombre, especie, sonido){
        this.nombre = nombre;
        this.especie = especie;
        this.sonido = sonido;
    }

hacersonido(){
    console.log('$(this.nombre} dice ${this.sonido}),guagua');
}
describir(){
    console.log('$(this.nombre} es un ${this.especie}),perro');
}
hacersonido(){
    console.log('$(this.nombre} dice ${this.sonido}),miau');
}
describir(){
    console.log('$(this.nombre} es un ${this.especie}),gato');
}






}
//crear intancia 
const miperro = new animal("bobby", "perro", "guau");
const migato = new animal("karin ", "gato", "miauw");

     //probar los metodos 
     miperro.hacersonido();
     miperro.describir();

     migato.describir();
     migato.hacersonido();

     const auto = new vehiculo("ford", "mustang", "azul", "2023");
     auto.mostrarInfo();
     auto.encender();
     auto.tocarBocina();

     const perro = new animal("rex", "perro", "guau");
     perro.hacersonido();
     perro.describir();

     const gato = new animal("michi", "gato", "miau");
     gato.hacersonido();
     gato.describir();


