"use strict"


let calcular = document.querySelector("#calcular");
calcular.addEventListener("click", calcularPrecioProducto);

function calcularPrecioProducto(event){
    event.preventDefault();

    let costo = document.querySelector("#costoProducto");
    let porcentaje = document.querySelector("#porcentajeGanancia"); 
    let precioFinal = document.querySelector("#precioFinal");
    if (costo.value < 0 || porcentaje.value < 0){
        precioFinal.innerHTML = "no se pueden cargar valores negativos";
    }else if(porcentaje.value >= 0 && porcentaje.value <= 100){
        let porcentajeValor = Number(porcentaje.value) / 100;
        let precioTotal = (porcentajeValor + 1) * Number(costo.value);
        
        
        precioFinal.innerHTML = "El precio final es: " + precioTotal + "!";
    }else{
        precioFinal.innerHTML = "el porcentaje no puede ser mayor a 100%";
    }
}





