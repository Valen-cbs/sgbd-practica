-- Unidad 7 - Ejercicio 02
-- Enunciado:
-- Mostrar nombre y litros de heladeras con atributos.no_frost = true,
-- filtrando con contencion JSONB. Ordenar litros de mayor a menor.
-- Correccion: litros se convierte a entero para ordenar numericamante.

SELECT nombre, (atributos ->> 'litros')::integer AS litros
FROM catalogo
WHERE categoria = 'heladera'
  AND atributos @> '{"no_frost": true}'::jsonb
ORDER BY litros DESC;
