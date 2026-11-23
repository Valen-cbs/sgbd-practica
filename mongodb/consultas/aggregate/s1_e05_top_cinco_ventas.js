// Simulacro 01 - Ejercicio 05 - Top 5 ventas (aggregate)
// CONSIGNA:
// Obtener los cinco juegos con mayor cantidad de ventas.
// Ordenar ventas de mayor a menor; mostrar titulo y ventas, sin _id.
//
// FORMA ALTERNATIVA: aggregate() (la otra version usa find()).

db.juegos.aggregate([
    {
        $sort: { ventas: -1 }
    },
    {
        $limit: 5
    },
    {
        $project: {
            titulo: 1,
            ventas: 1,
            _id: 0
        }
    }
]);
