-- Unidad 7 - Ejercicio 07 (practica adaptada)
-- Enunciado:
-- Obtener notebooks cuya propiedad JSONB "gpu" sea "RTX 5070".
-- Mostrar solo nombre, precio y gpu (extraida desde atributos).
--
-- Las DOS consultas siguientes fueron propuestas por el alumno
-- y son correctas. Se conservan las dos formas.

-- FORMA 1: extraccion de texto con ->>
SELECT nombre, precio, atributos ->> 'gpu' AS gpu
FROM catalogo
WHERE categoria = 'notebook'
  AND atributos ->> 'gpu' = 'RTX 5070';

-- FORMA 2: contencion JSONB con @>
SELECT nombre, precio, atributos ->> 'gpu' AS gpu
FROM catalogo
WHERE categoria = 'notebook'
  AND atributos @> '{"gpu": "RTX 5070"}'::jsonb;
