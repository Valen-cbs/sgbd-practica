# SGBD - Practicas de MongoDB y PostgreSQL

## [📚 Abrir indice de ejercicios (resueltos y pendientes)](CONSULTAS_RESUELTAS.md)

Repositorio de ejercicios de Sistemas de Gestion de Bases de Datos. **Cada ejercicio tiene su consigna como comentario dentro del mismo archivo de codigo**. Debajo aparece la consulta (si ya fue recuperada) o un marcador `TODO` (si esta pendiente). **No hay carpetas `enunciados/`.**

## Estructura
- `mongodb/datos/`: `juegos.json` (36 documentos) y `jugadores.json` (18).
- `mongodb/setup/`: creacion de colecciones, carga con `insertMany()` y verificaciones.
- `mongodb/consultas/find/`: busquedas con `find()`.
- `mongodb/consultas/aggregate/`: pipelines con `aggregate()`.
- `mongodb/consultas/update/`: prácticas adicionales pendientes de `updateOne()` y `updateMany()` (no forman parte del simulacro 01 resuelto).
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
- **MongoDB simulacro 01:** **ejercicios 01-10 completos** con el código del archivo original. El 05 incluye `find()` y `aggregate()`; los ejercicios 02, 03 y 04 tienen versiones alternativas válidas. Los ejercicios 09 y 10 son la búsqueda de jugadores de Argentina y las estadísticas de Acción (las actualizaciones están separadas como extra).
- **MongoDB simulacro 02:** ejercicios 01-05 con codigo corregido; el 06 con consigna y pendiente; 07-10 aun sin consigna asignada.
- **PostgreSQL:** ejercicios 01-08 con código (06: solución guiada; 05 y 07: dos formas válidas); 09-15 con consigna y `TODO`.
- Los archivos de datos y de carga no se modificaron.

## Nuevo laboratorio: películas JSONB (tipo parcial)

[**Abrir laboratorio de películas JSONB**](postgresql/laboratorios/parcial_peliculas_jsonb/README.md): 42 películas ficticias,
instalación SQL por lotes, copia JSONL y **16 ejercicios con la consigna
incluida en cada archivo** (12 básicos y 4 desafíos opcionales). Las
soluciones están vacías para practicar. Se carga en el esquema independiente
`sgbd_parcial_peliculas` y no cambia los ejercicios previos.
