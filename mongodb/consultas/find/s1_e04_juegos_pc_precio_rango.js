// Simulacro 01 - Ejercicio 04 - Precio y plataforma
// CONSIGNA:
// Buscar juegos con precio entre 35 y 60 (ambos inclusive), disponibles para "PC".
// Mostrar solamente titulo, precio y plataformas, sin _id.
//
// FORMA 1: filtros directos (version enviada por chat).

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

// FORMA 2: con $and (version del archivo original).

db.juegos.find(
    {
        $and: [
            {
                precio: { $gte: 35, $lte: 60 },
                plataformas: "PC"
            }
        ]
    },
    {
        _id: 0,
        titulo: 1,
        precio: 1,
        plataformas: 1
    }
);
