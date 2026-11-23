-- Unidad 7 - Ejercicio 01
-- Enunciado:
-- Mostrar nombre, precio y RAM (alias "ram") de notebooks con
-- atributos.ram_gb >= 16. Comparar numericamente y ordenar por
-- precio ascendente.

SELECT nombre, precio, (atributos ->> 'ram_gb')::numeric AS ram
FROM catalogo
WHERE categoria = 'notebook'
  AND (atributos ->> 'ram_gb')::numeric >= 16
ORDER BY precio;
