class Productos{
    key = 'item';
    constructor(codigo,nombre,precio,cantidad,src){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.total = precio * cantidad;
        this.src = src;
    }
    agragarProducto(producto){
        localStorage.setItem(this.codigo,JSON.stringify(producto));
    }
    todosLosProductos(){
        const myData = [];
        const cantidadElementos = localStorage.length;
        for (let index = 0; index < cantidadElementos; index++) {
            myData.push(
                localStorage.getItem(localStorage.key(index))
            ); 
        }

        console.log(myData);
        return myData;
    }

}