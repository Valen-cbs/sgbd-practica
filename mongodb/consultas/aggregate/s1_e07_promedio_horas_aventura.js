// Simulacro 01 - Ejercicio 07 - Promedio de horas Aventura
// CONSIGNA:
// Calcular con aggregate() el promedio de horasCampania
// de los juegos del genero "Aventura".
// Devolver el genero en _id y el valor promedioHoras, sin redondear.

db.juegos.aggregate([
    {
        $match: {
            genero: "Aventura"
        }
    },
    {
        $group: {
            _id: "$genero",
            promedioHoras: { $avg: "$horasCampania" }
        }
    }
]);
