// Simulacro 01 - Ejercicio 09 - Jugadores de Argentina y SOLAR RAID
// CONSIGNA:
// Obtener jugadores de "Argentina", activos (activo: true),
// que tengan "SOLAR RAID" en biblioteca con al menos 40 horasJugadas
// en ESE MISMO juego. Mostrar alias, pais y nivel; excluir _id.

db.jugadores.find(
    {
        $and: [
            { pais: "Argentina" },
            { activo: true },
            {
                biblioteca: {
                    $elemMatch: {
                        titulo: "SOLAR RAID",
                        horasJugadas: { $gte: 40 }
                    }
                }
            }
        ]
    },
    {
        alias: 1,
        pais: 1,
        nivel: 1,
        _id: 0
    }
);
