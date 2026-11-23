-- Laboratorio de peliculas JSONB - Ejercicio 03
-- Especiales Behind the Scenes (tipo parcial)
-- CONSIGNA:
-- Mostrar Title, Description, Length y Special Features de las peliculas
-- que tengan "Behind the Scenes" en el array Special Features.
-- Usar nombres de salida titulo, descripcion, duracion y caracteristicas.
-- La duracion debe ser numerica. Ordenar alfabeticamente por titulo.
-- El filtro debe comprobar un elemento del array JSONB, no un LIKE textual.

SELECT doc ->> 'Title' AS titulo,
       doc ->> 'Description' AS descripcion,
       (doc ->> 'Length')::integer AS duracion,
       doc ->> 'Special Features' AS caracteristicas
FROM peliculas
WHERE doc @> '{"Special Features": ["Behind the Scenes"]}'
ORDER BY titulo;
