# Laboratorio nuevo: películas JSONB (estilo parcial)

Dataset **ficticio** creado para practicar PostgreSQL con la estructura del parcial y algunos campos más complejos.

## Esquema

```sql
CREATE SCHEMA sgbd_parcial_peliculas;
CREATE TABLE sgbd_parcial_peliculas.peliculas (
    id INTEGER PRIMARY KEY,
    doc JSONB NOT NULL
);
```

La tabla real incluye además una restricción para que `doc` sea un objeto JSONB.

**42 películas** (6 por categoría) distribuidas en Documentary, Drama, Comedy, Action, Sci-Fi, Animation y Thriller. Todos los valores del dataset están inventados.

### Ejemplo del contenido JSONB

```json
{
  "Title": "El Archivo de la Lluvia",
  "Description": "Una investigadora reconstruye cien años de tormentas registradas en el litoral.",
  "Length": 72,
  "Special Features": [
    "Behind the Scenes",
    "Deleted Scenes",
    "Director Commentary"
  ],
  "Category": "Documentary",
  "Release Year": 2010,
  "Languages": [
    "Spanish",
    "Portuguese"
  ],
  "Rating": 6.2,
  "Production": {
    "Country": "Argentina",
    "Studio": "Estudio Litoral"
  },
  "Availability": {
    "Streaming": false,
    "Regions": [
      "AR",
      "UY"
    ],
    "Rental Price": 1.99
  },
  "Awards": [
    "Festival del Sur"
  ],
  "Cast": [
    {
      "Name": "Ana Duarte",
      "Role": "Protagonista"
    },
    {
      "Name": "Diego Funes",
      "Role": "Secundario"
    }
  ]
}
```

Claves base: `Title`, `Description`, `Length`, `Special Features`, `Category`, `Release Year`, `Languages`, `Rating`.
Campos anidados: `Production` (Country, Studio) y `Availability` (Streaming, Regions, Rental Price). `Awards` y `Cast` son opcionales.

Las mayúsculas y los espacios de las claves importan: `"Special Features"` es distinto de `"special_features"`.

## Instalación en PostgreSQL

Desde la **raíz del repositorio**, con `psql`:

```bash
psql -d postgres -v ON_ERROR_STOP=1 -f postgresql/laboratorios/parcial_peliculas_jsonb/setup/00_instalar.sql
```

También podés ejecutar, en orden: `01_esquema.sql`, `02_cargar_lotes.sql`, `03_verificar_carga.sql`.

**Advertencia:** `01_esquema.sql` vuelve a crear **solo** `sgbd_parcial_peliculas.peliculas`; no modifica `sgbd_u7_practica` ni los datasets de otros ejercicios. `02_cargar_lotes.sql` realiza 5 sentencias `INSERT INTO ... VALUES (...), (...)`, agrupadas en lotes.

Alternativa de datos de respaldo: `datos/peliculas.jsonl` tiene **los mismos 42 registros**, en formato una línea JSON por documento con `id` y `doc`. Es un respaldo/referencia; **no se carga automáticamente**.

En la sesión `psql`:

```sql
SET search_path TO sgbd_parcial_peliculas, public;
SELECT COUNT(*) FROM peliculas; -- 42
SELECT jsonb_pretty(doc) FROM peliculas LIMIT 1;
```

Para descubrir columnas y claves JSONB sin conocer el esquema, consultá `setup/04_explorar_esquema.sql`. En `psql`, `\\d sgbd_parcial_peliculas.peliculas` muestra la definición de la tabla.

## Consultas para resolver

- **`consultas/basicas/`**: ejercicios 01-12, parecidos al parcial; `SELECT`, filtros y operadores JSONB.
- **`consultas/desafios/`**: ejercicios 13-16, opcionales, un poco más difíciles.

**Cada archivo .sql tiene la consigna como comentario y un TODO debajo**. No incluimos soluciones para que puedas escribirlas y luego corregirlas. Los ejercicios pueden usar `FROM peliculas` una vez definido el `search_path`.

Comenzá por el ejercicio 01 y seguí en orden. El 03 replica el tipo de consulta de `Behind the Scenes` que viste en el parcial.
