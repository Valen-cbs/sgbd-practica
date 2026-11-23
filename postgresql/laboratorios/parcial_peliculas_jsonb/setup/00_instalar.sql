-- Ejecutar con: psql -d postgres -v ON_ERROR_STOP=1 -f postgresql/laboratorios/parcial_peliculas_jsonb/setup/00_instalar.sql
-- Las rutas \ir son relativas a la ubicacion de este archivo (psql).
\set ON_ERROR_STOP on
\ir 01_esquema.sql
\ir 02_cargar_lotes.sql
\ir 03_verificar_carga.sql
