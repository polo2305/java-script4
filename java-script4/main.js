// ==========================================
// PRE-ENTREGA 4: INTEGRACIÓN DE ARRAYS
// ==========================================

// 1) Colección inicial con nombre semántico (mínimo 5 elementos)
const productosEnStock = ["Zapatillas", "Remera", "Pantalon", "Campera", "Gorra"];

console.log("=== INICIO DEL SIMULADOR DE TIENDA ===");
console.log(`Stock inicial: ${productosEnStock.length} productos.`);

// 2) Manipulación de extremos
// Agregamos un producto al final con push
productosEnStock.push("Medias");
// Agregamos un producto prioritario al principio con unshift
productosEnStock.unshift("Mochila");

// Eliminamos el último elemento y lo guardamos en una variable
const productoAgotado = productosEnStock.pop();
console.log(`⚠️ Se ha eliminado el último elemento por falta de stock: ${productoAgotado}`);

// 3) Búsqueda y validación (usando prompt, includes e indexOf)
let productoBuscado = prompt("¿Qué producto querés buscar en el inventario?");

if (productoBuscado !== null && productoBuscado.trim() !== "") {
    // Normalizamos la búsqueda para que coincida mejor (primera letra en mayúscula)
    productoBuscado = productoBuscado.charAt(0).toUpperCase() + productoBuscado.slice(1).toLowerCase();

    if (productosEnStock.includes(productoBuscado)) {
        let posicion = productosEnStock.indexOf(productoBuscado);
        console.log(`✅ "${productoBuscado}" está disponible en stock, en la posición (índice) ${posicion}.`);
        alert(`¡Encontrado! "${productoBuscado}" está en la posición ${posicion}.`);
    } else {
        console.log(`❌ Lo sentimos, "${productoBuscado}" no se encuentra disponible.`);
        alert(`Lo sentimos, "${productoBuscado}" no está en stock.`);
    }
} else {
    console.log("⚠️ Búsqueda cancelada o vacía.");
}

// 4) Actualización por índice con splice
// Reemplazamos el elemento que se encuentre en el índice 2 por un nuevo producto actualizado
console.log("--- Actualizando inventario (índice 2) ---");
console.log(`Antes del cambio en índice 2: ${productosEnStock[2]}`);
productosEnStock.splice(2, 1, "Pantalon Denim");
console.log(`Después del cambio (índice 2): ${productosEnStock[2]}`);

// 5) Reporte iterativo: Función que recorre el array con for...of
function listarStock(lista) {
    console.log("==================================");
    console.log("📋 REPORTE DE STOCK ACTUALIZADO:");
    console.log("==================================");
    
    for (const producto of lista) {
        console.log(`- Producto: ${producto}`);
    }
    
    console.log("==================================");
    console.log(`Total de productos en inventario: ${lista.length}`);
}

// Invocación de la función final para mostrar el reporte en consola
listarStock(productosEnStock);
