// Simulacro 02 - Ejercicio 02
// Enunciado:
// Considerar los videojuegos del genero "Accion" disponibles en "PC".
// Agrupar por genero y calcular "cantidad" de juegos y "precioPromedio".
// El resultado debe tener _id: "Accion", cantidad y precioPromedio.

db.juegos.aggregate([
    {
        $match: {
            genero: "Accion",
            plataformas: "PC"
        }
    },
    {
        $group: {
            _id: "$genero",
            cantidad: { $sum: 1 },
            precioPromedio: { $avg: "$precio" }
        }
    }
]);
