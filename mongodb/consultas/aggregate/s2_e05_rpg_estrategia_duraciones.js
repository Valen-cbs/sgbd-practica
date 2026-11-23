// Simulacro 02 - Ejercicio 05
// Enunciado:
// Considerar juegos del genero "RPG" O "Estrategia" disponibles en "PC".
// Por genero, calcular cantidad de juegos, maxima horasCampania
// (duracionMaxima) y minima horasCampania (duracionMinima).
// Ordenar por duracionMaxima descendente.
// Correccion respecto a la entrega original: se agrego el $sort final.

db.juegos.aggregate([
    {
        $match: {
            $or: [
                { genero: "RPG" },
                { genero: "Estrategia" }
            ],
            plataformas: "PC"
        }
    },
    {
        $group: {
            _id: "$genero",
            cantidad: { $sum: 1 },
            duracionMaxima: { $max: "$horasCampania" },
            duracionMinima: { $min: "$horasCampania" }
        }
    },
    {
        $sort: { duracionMaxima: -1 }
    }
]);
