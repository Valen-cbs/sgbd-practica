// Simulacro 01 - Ejercicio 04 - Precio y plataforma
// CONSIGNA:
// Buscar juegos con precio entre 35 y 60 (ambos inclusive), disponibles para "PC".
// Mostrar solamente titulo, precio y plataformas, sin _id.

db.juegos.find(
    {
        precio: { $gte: 35, $lte: 60 },
        plataformas: "PC"
    },
    {
        titulo: 1,
        precio: 1,
        plataformas: 1,
        _id: 0
    }
);
