// Simulacro 01 - Ejercicio 08 - SOLAR RAID con 40 horas
// CONSIGNA:
// Buscar jugadores con SOLAR RAID y al menos 40 horasJugadas en el MISMO
// elemento de biblioteca (no en dos juegos diferentes).
// Mostrar alias y pais, sin _id. Utilizar find() y $elemMatch.

db.jugadores.find(
    {
        biblioteca: {
            $elemMatch: {
                titulo: "SOLAR RAID",
                horasJugadas: { $gte: 40 }
            }
        }
    },
    {
        alias: 1,
        pais: 1,
        _id: 0
    }
);
