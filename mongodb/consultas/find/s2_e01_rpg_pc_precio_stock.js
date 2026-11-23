// Simulacro 02 - Ejercicio 01
// Enunciado:
// Buscar juegos de genero "RPG", disponibles en "PC", con precio menor o
// igual a 50 y stock mayor a 5. Mostrar titulo, precio y stock, sin _id.
// Ordenar por precio de mayor a menor.

db.juegos.find(
    {
        genero: "RPG",
        plataformas: "PC",
        precio: { $lte: 50 },
        stock: { $gt: 5 }
    },
    {
        titulo: 1,
        precio: 1,
        stock: 1,
        _id: 0
    }
).sort({ precio: -1 });
