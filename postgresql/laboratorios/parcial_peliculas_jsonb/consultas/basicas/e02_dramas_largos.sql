-- Laboratorio de peliculas JSONB - Ejercicio 02
-- Dramas de al menos 120 minutos
-- CONSIGNA:
-- Buscar peliculas cuya Category sea "Drama" y Length >= 120.
-- Mostrar titulo, categoria y duracion (como numero).
-- Ordenar por duracion de mayor a menor.

SELECT doc ->> 'Title' AS titulo,
       doc ->> 'Category' AS categoria,
       (doc ->> 'Length')::integer AS duracion
FROM peliculas
WHERE doc ->> 'Category' = 'Drama'
  AND (doc ->> 'Length')::integer >= 120
ORDER BY duracion DESC;
