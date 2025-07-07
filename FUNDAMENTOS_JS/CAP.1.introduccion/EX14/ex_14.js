// Ejerciccio de analisis: pedir a un usuario que digite algun tipo de valor 
let  a = 1 ;
let suma = 0;
let valor;

while (a <= 8 ){
    valor = parseInt(prompt("ingrese un valor numerico"));
    suma = suma + valor;
    a++;
    }

    document.writeln("la suma es : ", suma, "<br>");

    // rifa
    let numero;
    do{
        numero = parseInt(prompt("¡Rifa!: dame numero entre 1 y el 15"));

        if(numero !=5){
            document.writeln("usted dio el numero: ", numero, "<br>");
        }else {
            document. writeln ("¡Genial has ganado, el numero correcto era el: ", numero, "relcama tu premio " )
        }
        }while (numero !=5);







    