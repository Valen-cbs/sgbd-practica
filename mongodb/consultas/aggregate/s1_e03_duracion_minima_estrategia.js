// Simulacro 01 - Ejercicio 03 - Duracion minima Estrategia
// CONSIGNA:
// Usar aggregate() para obtener la menor horasCampania del genero "Estrategia".
// Devolver el genero en _id y el minimo bajo duracionMinima.

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
