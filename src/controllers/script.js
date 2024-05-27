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
            alert(`Producto encontrado: ${productoEncontrado.NombreProducto}, Cantidad: ${productoEncontrado.cantidad}`);
        } else {
            alert("Producto no encontrado");
        }
    });

            let btnMax = document.getElementById("btn-max");
            btnMax.addEventListener("click", () => {
            let maxProducto = bst.findMax();
            if (maxProducto) {
            alert(`Producto máximo: ${maxProducto.NombreProducto}, cantidad: ${maxProducto.cantidad}$`);
        } else {
            alert("No hay productos en el árbol");
        }
    });

            let btnMin = document.getElementById("btn-min");
            btnMin.addEventListener("click", () => {
            let minProducto = bst.findMin();
            if (minProducto) {
            alert(`Producto mínimo: ${minProducto.NombreProducto}, cantidad: ${minProducto.cantidad}$`);
        } else {
            alert("No hay productos en el árbol");
        }
    });
        
    let btnInOrder = document.getElementById("btn-inorder");
    btnInOrder.addEventListener("click", () => {
        let productos = [];
        bst.inOrderTraversal((producto) => {
            productos.push(`Producto: ${producto.nombreProducto}, Precio: ${producto.precio}$, cantidad: ${producto.cantidad}`);
        });
        if (productos.length > 0) {
            alert("Productos en el árbol:\n" + productos.join("\n"));
        } else {
            alert("No hay productos en el árbol");
        }
    });
        
});

