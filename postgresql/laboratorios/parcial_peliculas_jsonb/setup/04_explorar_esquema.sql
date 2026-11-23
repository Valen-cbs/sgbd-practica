-- Consultas exploratorias (independientes de los ejercicios evaluables).
-- 1) Ver las columnas reales de la tabla (id y doc).
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_schema = 'sgbd_parcial_peliculas'
  AND table_name = 'peliculas'
ORDER BY ordinal_position;

-- 2) Ver un documento completo para descubrir su estructura interna.
SELECT jsonb_pretty(doc) FROM sgbd_parcial_peliculas.peliculas LIMIT 1;

-- 3) Listar las claves presentes en los documentos JSONB.
SELECT DISTINCT jsonb_object_keys(doc) AS clave
FROM sgbd_parcial_peliculas.peliculas
ORDER BY clave;

-- En psql tambien podes ejecutar:
-- \d sgbd_parcial_peliculas.peliculas
