-- Unidad 7 - Ejercicio 05 - Etiquetas simultaneas
-- CONSIGNA:
-- De catalogo, mostrar solamente nombre y categoria de productos
-- que tengan AMBAS etiquetas "gaming" y "alta-gama" en tags TEXT[].
-- No hace falta ordenar ni limitar.
-- Ambas formas se encuentran en el archivo original del alumno.
-- Correccion para las dos: no seleccionar la columna adicional tags.

-- FORMA 1: dos condiciones de contencion unidas por AND.
SELECT nombre, categoria
FROM catalogo
WHERE tags @> '{"gaming"}'
  AND tags @> '{"alta-gama"}';

-- FORMA 2: una sola contencion que exige ambos elementos.
SELECT nombre, categoria
FROM catalogo
WHERE tags @> ARRAY['gaming', 'alta-gama'];
