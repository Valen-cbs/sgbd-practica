# SGBD - Practicas de MongoDB y PostgreSQL

## [📚 Abrir indice de ejercicios (resueltos y pendientes)](CONSULTAS_RESUELTAS.md)

Repositorio de ejercicios de Sistemas de Gestion de Bases de Datos. **Cada ejercicio tiene su consigna como comentario dentro del mismo archivo de codigo**. Debajo aparece la consulta (si ya fue recuperada) o un marcador `TODO` (si esta pendiente). **No hay carpetas `enunciados/`.**

## Estructura
- `mongodb/datos/`: `juegos.json` (36 documentos) y `jugadores.json` (18).
- `mongodb/setup/`: creacion de colecciones, carga con `insertMany()` y verificaciones.
- `mongodb/consultas/find/`: busquedas con `find()`.
- `mongodb/consultas/aggregate/`: pipelines con `aggregate()`.
- `mongodb/consultas/update/`: ejercicios de `updateOne()` y `updateMany()`.
- `postgresql/datos/`: catalogo y peliculas JSONL (60 y 24 registros).
- `postgresql/setup/01_crear_y_cargar.sql`: script original de carga.
- `postgresql/consultas/jsonb/`, `arrays/`, `sql_general/` y `opcionales/`.

## Como ejecutar

**MongoDB:** seleccionar `use sgbd_practica` en mongosh. Para cargar desde cero,
ejecutar `mongodb/setup/01_crear_colecciones.js` y luego `mongodb/setup/02_insert_many.js`.
La carga no duplica documentos si ya hay datos.

**PostgreSQL:** ejecutar `postgresql/setup/01_crear_y_cargar.sql` en psql.
**Cuidado:** recrea el esquema `sgbd_u7_practica` y borra sus tablas anteriores.
Antes de las consultas, usar `SET search_path TO sgbd_u7_practica, public;`.

## Estado
- **MongoDB simulacro 01:** todos los ejercicios tienen la consigna dentro del archivo. El codigo original del alumno falta recuperar, por lo que estan marcados como pendientes; el 05 tiene plantillas para ambas formas.
- **MongoDB simulacro 02:** ejercicios 01-05 con codigo corregido; el 06 con consigna y pendiente; 07-10 aun sin consigna asignada.
- **PostgreSQL:** ejercicios 01-08 con codigo (06: solucion guiada; 07: dos formas); 09-15 con consigna y `TODO`.
- Los archivos de datos y de carga no se modificaron.
