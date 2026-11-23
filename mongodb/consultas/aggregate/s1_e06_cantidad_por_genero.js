// Simulacro 01 - Ejercicio 06 - Cantidad de juegos por genero
// CONSIGNA:
// Contar cuantos videojuegos hay de cada genero usando aggregate().
// Mostrar el genero en _id y el conteo como cantidad.
// Ordenar los resultados por cantidad de mayor a menor.

db.juegos.aggregate([
    {
        $group: {
            _id: "$genero",
            cantidad: { $sum: 1 }
        }
    },
    {
        $project: {
            cantidad: 1
        }
    },
    {
        $sort: { cantidad: -1 }
    }
]);
