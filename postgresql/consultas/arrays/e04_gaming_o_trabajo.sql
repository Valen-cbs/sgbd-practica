-- Unidad 7 - Ejercicio 04
-- Enunciado:
-- Mostrar nombre, precio y tags de los cinco productos mas caros
-- que tengan la etiqueta "gaming" O "trabajo" en tags TEXT[].
-- Ordenar precio descendente.

SELECT nombre, precio, tags
FROM catalogo
WHERE tags @> '{"gaming"}'
   OR tags @> '{"trabajo"}'
ORDER BY precio DESC
LIMIT 5;
