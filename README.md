# SGBD - Practicas de MongoDB y PostgreSQL

Repositorio de ejercicios de Sistemas de Gestion de Bases de Datos (Unidad 7 y simulacros).
Se conserva **una consulta por archivo** con el **enunciado dentro del archivo como comentario**, seguido por la solucion.

## Estructura

- `mongodb/datos/`: `juegos.json` (36 documentos) y `jugadores.json` (18).
- `mongodb/setup/`: creacion de colecciones, carga original con `insertMany()` y verificaciones.
- `mongodb/consultas/find/`: consultas con `find()`, proyeccion, `sort()` y `limit()`.
- `mongodb/consultas/aggregate/`: pipelines con `$match`, `$group`, etc.
- `postgresql/datos/`: copias JSONL del catalogo (60 productos) y peliculas (24).
- `postgresql/setup/01_crear_y_cargar.sql`: script SQL original, con la estructura y registros originales.
- `postgresql/consultas/jsonb/`, `arrays/`, `sql_general/`: consultas SQL organizadas por tema.

## Como ejecutar

**MongoDB:** en `mongosh`, seleccionar `use sgbd_practica`. Para cargar desde cero, ejecutar primero `mongodb/setup/01_crear_colecciones.js` y luego `mongodb/setup/02_insert_many.js`; la carga rechaza colecciones no vacias para evitar duplicados.

**PostgreSQL:** desde `psql`, ejecutar `postgresql/setup/01_crear_y_cargar.sql`. **Cuidado:** este script recrea el esquema `sgbd_u7_practica` y sus tablas. Antes de ejecutar consultas, utilizar `SET search_path TO sgbd_u7_practica, public;`.

## Estado del codigo

- MongoDB, simulacro 02: respuestas originales revisadas de ejercicios **01-05**. El 05 incluye el `$sort` faltante. Los ejercicios 06-10 siguen pendientes.
- PostgreSQL: respuestas revisadas de ejercicios **01-05, 07 y 08**. El 07 contiene **dos soluciones** validas. El 06 fue resuelto conjuntamente con el asistente y esta identificado como tal.
- MongoDB, simulacro 01: los archivos se conservan como plantillas porque en el historial disponible **no esta el codigo original del alumno** de ese simulacro. Para conservar su estilo real, se completaran al aportar el archivo de VS Code o las respuestas originales.
- PostgreSQL, ejercicios 09-15: pendientes de resolver.

No se han modificado los datasets de practica al completar las consultas.
