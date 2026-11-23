// Simulacro 01 - Ejercicio 10 - Estadisticas de Accion en PC
// CONSIGNA:
// Considerar juegos del genero "Accion", precio >= 40 y
// disponibles para "PC". Agrupar por genero, devolviendo _id
// y calculando duracionMaxima, duracionMinima y promedioHoras
// sobre el campo horasCampania. No hace falta redondear.

db.juegos.aggregate([
    {
        $match: {
            genero: "Accion",
            precio: { $gte: 40 },
            plataformas: "PC"
        }
    },
    {
        $group: {
            _id: "$genero",
            duracionMaxima: {
                $max: "$horasCampania"
            },
            duracionMinima: {
                $min: "$horasCampania"
            },
            promedioHoras: { $avg: "$horasCampania" }
        }
    }
]);
