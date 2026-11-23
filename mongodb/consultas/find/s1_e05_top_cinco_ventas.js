// Simulacro 01 - Ejercicio 05 - Top 5 ventas (find)
// CONSIGNA:
// Obtener los cinco juegos con mayor cantidad de ventas.
// Ordenar ventas de mayor a menor; mostrar titulo y ventas, sin _id.
//
// Version con find(), sort() y limit().

db.juegos.find(
    {},
    {
        titulo: 1,
        ventas: 1,
        _id: 0
    }
).sort({ ventas: -1 }).limit(5);
