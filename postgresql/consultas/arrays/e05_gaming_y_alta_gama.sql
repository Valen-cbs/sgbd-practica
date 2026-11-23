-- Unidad 7 - Ejercicio 05
-- Enunciado:
-- Mostrar solamente nombre y categoria de productos que tengan
-- AMBAS etiquetas "gaming" y "alta-gama" en tags TEXT[].
-- Correccion: se quita la columna tags de la proyeccion.

SELECT nombre, categoria
FROM catalogo
WHERE tags @> ARRAY['gaming', 'alta-gama'];
