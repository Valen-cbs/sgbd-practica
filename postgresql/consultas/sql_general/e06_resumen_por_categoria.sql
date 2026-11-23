-- Unidad 7 - Ejercicio 06
-- Enunciado:
-- Obtener categoria, cantidad de productos y precio_promedio
-- redondeado a dos decimales. Mostrar categorias con al menos
-- tres productos; ordenar cantidad descendente y categoria A-Z.
--
-- NOTA DE AUTORIA:
-- Este ejercicio fue resuelto de manera guiada por el asistente,
-- no corresponde a una consulta entregada y evaluada por el alumno.

SELECT categoria,
       COUNT(*) AS cantidad,
       ROUND(AVG(precio), 2) AS precio_promedio
FROM catalogo
GROUP BY categoria
HAVING COUNT(*) >= 3
ORDER BY cantidad DESC, categoria ASC;
