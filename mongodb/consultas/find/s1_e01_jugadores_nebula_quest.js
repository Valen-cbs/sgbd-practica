// Simulacro 01 - Ejercicio 01 - Biblioteca de jugadores
// CONSIGNA:
// Buscar todos los jugadores que tengan "NEBULA QUEST" en biblioteca.
// Mostrar solamente alias y pais; excluir _id.
// Utilizar find() y consultar el array biblioteca.

db.jugadores.find(
    {
        "biblioteca.titulo": "NEBULA QUEST"
    },
    {
        alias: 1,
        pais: 1,
        _id: 0
    }
);
