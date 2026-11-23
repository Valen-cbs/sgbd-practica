-- Laboratorio independiente; no modifica sgbd_u7_practica ni sus tablas.
-- ATENCION: el reinicio BORRA la tabla de ESTE laboratorio.
BEGIN;
CREATE SCHEMA IF NOT EXISTS sgbd_parcial_peliculas;
DROP TABLE IF EXISTS sgbd_parcial_peliculas.peliculas;
CREATE TABLE sgbd_parcial_peliculas.peliculas (
    id INTEGER PRIMARY KEY,
    doc JSONB NOT NULL CHECK (jsonb_typeof(doc) = 'object')
);
COMMIT;
