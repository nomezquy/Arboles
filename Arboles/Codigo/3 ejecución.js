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
 //3

 function punto3(arbol)
{
    let ejecutar = true;
    while(ejecutar)
    {
        console.log("Ingrese el número ó si desea salir, escriba la palabra 'salir' o 'terminar'");
        let ingreso = prompt("ingrese el valor: ")
        if(ingreso == "salir" || ingreso == "terminar")
        {
            ejecutar = false;
        }
        else
        {
            let valor = parseInt(ingreso)
            arbol.agregar(valor);
        }

    }
}
 
let arbol = new ArbolBinario();
punto3(arbol);
arbol.in_order();

