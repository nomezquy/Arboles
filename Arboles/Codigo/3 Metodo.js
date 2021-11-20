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