-- Unidad 7 - Ejercicio 08 (practica adaptada)
-- Enunciado:
-- Obtener notebooks con frecuencia de pantalla.hz >= 120.
-- Mostrar solo nombre y hz como numero, ordenar hz descendente.
-- Correccion: se agregaron el alias "hz" y ORDER BY descendente.

SELECT nombre, (atributos -> 'pantalla' ->> 'hz')::numeric AS hz
FROM catalogo
WHERE categoria = 'notebook'
  AND (atributos -> 'pantalla' ->> 'hz')::numeric >= 120
ORDER BY hz DESC;
