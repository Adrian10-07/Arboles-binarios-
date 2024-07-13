import { bst } from "./dependencies.js";
import Producto from "../models/bst/Producto.js";


document.addEventListener("DOMContentLoaded", () => {
            let btn = document.getElementById("btn-add");
            btn.addEventListener("click", () => {
            let nombreProducto = document.getElementById("NombreProducto").value;
            let precio = document.getElementById("Precio").value;
            let cantidad = document.getElementById("Cantidad").value;
            let producto = new Producto(nombreProducto, precio, cantidad);
            console.log(bst);
            if (bst.add(producto)){
            
            alert("Registro exitoso");
            

        
        }else
            alert("Ocurrió un problema en el registro");
    });
            console.log("BST después de agregar:", bst);

            let btnSearch = document.getElementById("btn-search");
            btnSearch.addEventListener("click", () => {
            let nombreProductoBuscar = document.getElementById("NombreProductoBuscar").value;
            let productoEncontrado = bst.search(nombreProductoBuscar);
      
  
            if (productoEncontrado) {
            alert(`Producto encontrado: ${productoEncontrado.nombreProducto}, Cantidad: ${productoEncontrado.cantidad}, Precio: ${productoEncontrado.precio}$`);
        } else {
            alert("Producto no encontrado");
        }
    });


    let btnMax = document.getElementById("btn-max");
    

    btnMax.addEventListener("click", () => {
        let maxProducto = bst.findMax();
        let maxProductContainer = document.getElementById("max-product");
        maxProductContainer.innerHTML = "";

        if (maxProducto) {
            maxProductContainer.textContent = `Producto máximo: ${maxProducto.nombreProducto}, Precio: ${maxProducto.precio}$, Cantidad: ${maxProducto.cantidad}`;
        } else {
            maxProductContainer.textContent = "No hay productos en el árbol";
        }
    });

    let btnMin = document.getElementById("btn-min");

    btnMin.addEventListener("click", () => {
        let minProducto = bst.findMin();
        let minProductContainer = document.getElementById("min-product");
        minProductContainer.innerHTML = "";

        if (minProducto) {
            minProductContainer.textContent = `Producto mínimo: ${minProducto.nombreProducto}, Precio: ${minProducto.precio}$, Cantidad: ${minProducto.cantidad}`;
        } else {
            minProductContainer.textContent = "No hay productos en el árbol";
        }
    });
        
    
        let btnInOrder = document.getElementById("btn-recorrer");
        btnInOrder.addEventListener("click", () => {
            let productos = [];
            bst.inOrderTraversal((node) => {
                productos.push(`Producto: ${node.value.nombreProducto}, Precio: ${node.value.precio}$, Cantidad: ${node.value.cantidad}`);
            });
            
            let productListContainer = document.getElementById("product-list");
            productListContainer.innerHTML = "";
            
            if (productos.length > 0) {
                let ul = document.createElement("ul");
                productos.forEach(producto => {
                    let li = document.createElement("li");
                    li.textContent = producto;
                    ul.appendChild(li);
                });
                productListContainer.appendChild(ul);
            } else {
                productListContainer.textContent = "No hay productos en el árbol";
            }
        });
});