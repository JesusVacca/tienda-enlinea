document.getElementById('hamburguesa').addEventListener('click',function(){
    this.classList.toggle('__active');
    document.getElementById('nav').classList.toggle('active__nav');

})
document.getElementById('open__perfil__items').addEventListener('click',function(e){
    this.classList.toggle('open');
    document.getElementById('perfil__items').classList.toggle('open');
})


window.addEventListener('scroll',function(){
    const alturaPagina = this.document.documentElement.scrollHeight;
    const alturaVentana = this.window.innerHeight;
    const porcentajeScroll = (this.window.scrollY / (alturaPagina - alturaVentana )) * 100;
    const arriba = this.document.getElementById('arriba');
    if(porcentajeScroll > 10){
        arriba.style.display = 'grid'
    }else arriba.style.display = 'none'
})



document.querySelectorAll('.btn__add').forEach(function(button,indice){
    const alerta = document.getElementById('alerta');
    button.addEventListener('click',function(){
        alerta.style.display = 'block';
        const codigo = document.querySelectorAll('.codigo__producto')[indice].innerHTML;
        const nombre = document.querySelectorAll('.nombre__producto')[indice].innerHTML;
        const precio = document.querySelectorAll('.precio__producto')[indice].innerHTML;
        const cantidad = document.querySelectorAll('.contador__producto')[indice].innerHTML;
        const img = document.querySelectorAll('.item_img')[indice].src;
        const producto = new Productos(
            codigo,
            nombre,
            parseInt(precio),
            parseInt(cantidad),
            img
        )
        producto.agragarProducto(producto,producto.codigo);
        setTimeout(function(){
            alerta.style.display = 'none';
        },4000);
    })
})

document.querySelectorAll('.btn__derecha').forEach(function(button,indice){
    button.addEventListener('click',function(){
        incrementarContador(indice);
    })
})
document.querySelectorAll('.btn__izquierda').forEach(function(button,indice){
    button.addEventListener('click',function(){
        incrementarContador(indice,false);
    })
})


function incrementarContador(indice,derecha = true) {
    let valorActual = parseInt(document.querySelectorAll('.contador__producto')[indice].innerHTML);
    if(derecha){
        valorActual++;
        document.querySelectorAll('.contador__producto')[indice].innerHTML = valorActual;
    }else{
        valorActual--;
        if(valorActual > 0)document.querySelectorAll('.contador__producto')[indice].innerHTML = valorActual;
    }
}