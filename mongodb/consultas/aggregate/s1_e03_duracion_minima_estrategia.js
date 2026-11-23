// Simulacro 01 - Ejercicio 03 - Duracion minima Estrategia
// CONSIGNA:
// Usar aggregate() para obtener la menor horasCampania del genero "Estrategia".
// Devolver el genero en _id y el minimo bajo duracionMinima.
//
// FORMA 1: sin $project.

db.juegos.aggregate([
    {
        $match: {
            genero: "Estrategia"
        }
    },
    {
        $group: {
            _id: "$genero",
            duracionMinima: { $min: "$horasCampania" }
        }
    }
]);

// FORMA 2: con $project (como en tu archivo original).
// _id se conserva automaticamente salvo que se excluya.

db.juegos.aggregate([
    {
        $match: { genero: "Estrategia" }
    },
    {
        $group: {
            _id: "$genero",
            duracionMinima: { $min: "$horasCampania" }
        }
    },
    {
        $project: {
            duracionMinima: 1
        }
    }
]);
