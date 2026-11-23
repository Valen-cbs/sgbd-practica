// Simulacro 02 - Ejercicio 04
// Enunciado:
// Buscar videojuegos de genero "Aventura" O "Estrategia" disponibles
// en "PC", con precio entre 25 y 55 inclusive.
// Mostrar titulo, genero y precio, sin _id.
// Ordenar por precio ascendente y devolver solo los cinco mas baratos.

db.juegos.find(
    {
        plataformas: "PC",
        $or: [
            { genero: "Aventura" },
            { genero: "Estrategia" }
        ],
        $and: [
            { precio: { $gte: 25 } },
            { precio: { $lte: 55 } }
        ]
    },
    {
        _id: 0,
        titulo: 1,
        genero: 1,
        precio: 1
    }
).sort({ precio: 1 }).limit(5);
