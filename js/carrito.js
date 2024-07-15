window.addEventListener('DOMContentLoaded',function(){
    crearElementosCarrito();
    document.querySelectorAll('.quitar__producto').forEach(function(button,indice){
        button.addEventListener('click',function(){
            const item = this.closest('.item__carrito');
            console.log(item);
            if(item) {
                suma = 0;
                item.remove();
                document.querySelectorAll('.precio').forEach(function(elemento){
                    suma += parseInt(elemento.innerHTML);
                })
                document.getElementById('total_compra').innerHTML = suma;
            }
    
        })
    });
    let suma = 0;
    const preciosProductos = document.querySelectorAll('.precio').forEach(function(elemento){
        suma += parseInt(elemento.innerHTML);
    })
    document.getElementById('total_compra').innerHTML = suma;
    
    
    function loadData() {
        const myData = [];
            const cantidadElementos = localStorage.length;
            for (let index = 0; index < cantidadElementos; index++) {
                const elemento = JSON.parse(localStorage.getItem(localStorage.key(index)));
                myData.push(
                    elemento
                ); 
            }
    
            console.log(myData);
            return myData;
    }
    
    function crearElementosCarrito() {
        const myData = loadData();
    
        
    
        myData.forEach(function(producto){
            const urlImg = "../img/icon/x-lg.svg";
            const itemCarrito = document.createElement('div');
            const descripcion = document.createElement('div');
            const quitarProducto = document.createElement('button');
            const img1 = document.createElement('img');
            const img2 = document.createElement('img');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            const p4 = document.createElement('p');
            const span = document.createElement('span');
        
        
            img2.src = urlImg;
            quitarProducto.type = 'button';
            //Asignamos las clases a los elementos
        
            itemCarrito.className = 'item__carrito';
            descripcion.className = 'descripcion';
            quitarProducto.className = 'quitar__producto';
            span.className = 'precio';
            img1.className = 'img';
            p1.innerHTML = producto.nombre;
            p2.innerHTML = 'Sub total $';
            p3.innerHTML = `Unidades ${producto.cantidad}`;
            p4.innerHTML = `Valor $ ${producto.precio}`;
            span.innerHTML = producto.total;
            img1.alt = producto.nombre;
            img1.src = producto.src;
            img2.alt = 'quitar_producto';
            
            p2.append(span);
            descripcion.append(p1,p4,p3,p2);
            quitarProducto.append(img2)
            itemCarrito.append(img1,descripcion,quitarProducto)
            document.getElementById('carrito__contenedor').append(itemCarrito);
        })
    
    }

    this.document.getElementById('btn__compra').addEventListener('click',function(){
        localStorage.clear();
        window.location.reload();
    })
})



