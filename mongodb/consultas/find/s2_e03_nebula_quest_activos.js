// Simulacro 02 - Ejercicio 03
// Enunciado:
// Buscar jugadores activos que tengan "NEBULA QUEST" en biblioteca
// y al menos 30 horasJugadas en ESE MISMO elemento del array.
// Mostrar alias y nivel, sin _id. Ordenar por nivel descendente.

db.jugadores.find(
    {
        activo: true,
        biblioteca: {
            $elemMatch: {
                titulo: "NEBULA QUEST",
                horasJugadas: { $gte: 30 }
            }
        }
    },
    {
        alias: 1,
        nivel: 1,
        _id: 0
    }
).sort({ nivel: -1 });
