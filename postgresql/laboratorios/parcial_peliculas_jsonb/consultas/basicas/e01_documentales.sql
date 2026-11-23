-- Laboratorio de peliculas JSONB - Ejercicio 01
-- Documentales y orden alfabetico
-- CONSIGNA:
-- Mostrar titulo (Title) y duracion (Length) de peliculas de categoria Documentary.
-- La duracion debe mostrarse como entero. Ordenar alfabeticamente por titulo.
-- Usar SELECT sobre doc JSONB y filtrar por Category.

SELECT doc ->> 'Title' AS titulo,
       (doc ->> 'Length')::integer AS duracion
FROM peliculas
WHERE doc ->> 'Category' = 'Documentary'
ORDER BY titulo;
