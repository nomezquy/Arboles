const listaA=[10,5,7,3,2,8,9,11,12,1]
const listaB=[7,4,8,9,10,3,0,2,1]
const listaC=[15,12,13,16,17,11,10,18,19]
const listaD=[5,3,2,4,8,7,12,11,1,0,13]
const listaE=[10,3,2,4,8,7,12,11,1,0,13]

class Nodo {
    constructor(value){
      this.valor = value;
      this.derecha = null;
      this.izquierda = null;
    }
  }
  
  //2. Clase ArbolBinario
  class ArbolBinario {
    constructor(){
      this.cabeza = null;
    }
  
    //3. esta_vacio()
    esta_vacio(){
      return this.cabeza === null;
    }
  
    //4. agregar()
    agregar(value){
      // arbol no tiene elementos
      if(this.esta_vacio()){
        // se le crea la cabeza al arbol
        this.cabeza = new Nodo(value);
        // termina el metodo
        return;
      }
  
      // asignamos a una variable auxiliar para recorrer
      var aux = this.cabeza;
  
      while(aux){
        // SI EL VALOR ES MENOR al valor actual del aux
        // vamos hacia la izquierda
        if (value < aux.valor){
          if (aux.izquierda){
            aux = aux.izquierda
          }else{
            aux.izquierda = new Nodo(value);
            // termina el metodo
            return;
          }
          // SI EL VALOR ES MAYOR al valor actual del aux
        } else { // vamos hacia la derecha
          if (aux.derecha){
            aux = aux.derecha
          }else{
            aux.derecha = new Nodo(value);
            // termina el metodo
            return;
          }
        }
      }
    }
  
    /**
      * Imprime primero la raíz, luego
      * toda la rama izquierda de izquierda al centro.
      * y finalmente recorre la rama derecha,
      * del centro hacia la derecha.
      */
    pre_order(nodo = this.cabeza){
      if (!nodo){
        return;
      }
      console.log(nodo.valor);
      this.pre_order(nodo.izquierda);
      this.pre_order(nodo.derecha);
    }
    /**
      * Recorre el árbol de izquierda hacia el centro.
      * Luego del centro hacia la derecha, y finalmente
      * imprime la raíz.
      */
    post_order(nodo = this.cabeza){
      if (!nodo){
        return;
      }
      this.post_order(nodo.izquierda);
      this.post_order(nodo.derecha);
      console.log(nodo.valor);
    }
  
    /**
      * recorre primero toda la rama izquierda
      * de izquierda al centro.
      * Luego imprime la raíz, y finalmente
      * recorre la rama derecha, del centro hacia
      * la derecha.
      */
    in_order(nodo = this.cabeza){
      if(!nodo){
        return;
      }
      this.in_order(nodo.izquierda);
      console.log(nodo.valor);
      this.in_order(nodo.derecha);
    }
  }
 //2.1
 
let arbol = new ArbolBinario(); 
for(let x = 0;x < listaA.length;x++)
{
    arbol.agregar(listaA[x]);
    console.log("Pos:" + x)
    console.log("Valor: " + listaA[x])
}
console.log("Pre-Order")
arbol.pre_order();
console.log("Pos-Order")
arbol.post_order();
console.log("In-Order")
arbol.in_order()
