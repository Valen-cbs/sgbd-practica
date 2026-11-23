// Simulacro 01 - Ejercicio 02 - Duracion maxima RPG
// CONSIGNA:
// Usar aggregate() para obtener la mayor horasCampania de juegos del genero "RPG".
// Devolver el genero en _id y el maximo bajo duracionMaxima.

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
