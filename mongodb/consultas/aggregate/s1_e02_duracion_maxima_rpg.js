// Simulacro 01 - Ejercicio 02 - Duracion maxima RPG
// CONSIGNA:
// Usar aggregate() para obtener la mayor horasCampania de juegos del genero "RPG".
// Devolver el genero en _id y el maximo bajo duracionMaxima.
//
// FORMA 1: sin $project.

db.juegos.aggregate([
    {
        $match: {
            genero: "RPG"
        }
    },
    {
        $group: {
            _id: "$genero",
            duracionMaxima: { $max: "$horasCampania" }
        }
    }
]);

// FORMA 2: con $project (como en tu archivo original).
// _id se conserva automaticamente en $project salvo que se excluya.

db.juegos.aggregate([
    {
        $match: { genero: "RPG" }
    },
    {
        $group: {
            _id: "$genero",
            duracionMaxima: { $max: "$horasCampania" }
        }
    },
    {
        $project: {
            duracionMaxima: 1
        }
    }
]);
