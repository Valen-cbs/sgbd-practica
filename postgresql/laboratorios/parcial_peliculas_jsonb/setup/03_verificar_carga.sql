-- Ejecutar despues de instalar los datos.
SELECT COUNT(*) AS total_peliculas FROM sgbd_parcial_peliculas.peliculas;
SELECT doc ->> 'Category' AS categoria, COUNT(*) AS cantidad
FROM sgbd_parcial_peliculas.peliculas
GROUP BY doc ->> 'Category'
ORDER BY categoria;
SELECT jsonb_pretty(doc) AS ejemplo
FROM sgbd_parcial_peliculas.peliculas
ORDER BY id
LIMIT 1;

DO $$
BEGIN
    IF (SELECT COUNT(*) FROM sgbd_parcial_peliculas.peliculas) <> 42 THEN
        RAISE EXCEPTION 'Carga incompleta: se esperaban 42 peliculas';
    END IF;
END $$;
