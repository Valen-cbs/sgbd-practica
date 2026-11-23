-- Unidad 7 - Ejercicio 03
-- Enunciado:
-- Mostrar nombre y precio de productos de categoria "calzado"
-- cuyo array JSONB atributos.talles contenga el numero 42.
-- Correccion: el talle pedido es 42 y se requiere filtrar categoria.

SELECT nombre, precio
FROM catalogo
WHERE categoria = 'calzado'
  AND atributos @> '{"talles": [42]}'::jsonb;
