//Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. Esta función debe aceptar un `entero` que indica cuantas veces 
//el string tiene que repetirse. La función retorna el string repetido el número de veces que indicamos. 
//Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).

String.prototype.repeatify = function(int) {
    if(int == 0) return "";
    if(int >0){
        return (this.repeat(int));
    }

}
console.log('hola'.repeatify(3))


//Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
//* Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle` 
//deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` debe ser `Triangle`.
//* Agregá un nuevo método al prototipo llamado `getPerimeter`.

//Probá tu solución con el siguiente código:

function Shape () {
    this.type,
    this.getType = function(){}
}

const Triangle = new Shape.prototype

//Triangle = function(a,b,c){};

Shape.prototype.getPerimeter;


var t = new Triangle(1, 2, 3);
t instanceof Triangle
// true
Shape.prototype.isPrototypeOf(t);
// true
t.getPerimeter();
// 6
t.getType();
// "Triangle"