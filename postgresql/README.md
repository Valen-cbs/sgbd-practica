# PostgreSQL - Consultas JSONB y arrays

## Carga de datos
Desde la raiz del repositorio:
```bash
psql -d postgres -v ON_ERROR_STOP=1 -f postgresql/setup/01_crear_y_cargar.sql
```

**Advertencia:** se recrea el esquema `sgbd_u7_practica`.
Se cargan 60 productos en `catalogo` y 24 peliculas en `peliculas`.
Los archivos `datos/*.jsonl` conservan los registros originales.

Antes de ejecutar las consultas:
```sql
SET search_path TO sgbd_u7_practica, public;
```

## Consultas por tema
`jsonb/`, `arrays/`, `sql_general/` y `opcionales/`.

**Cada archivo tiene la consigna como comentario y debajo la solucion o un TODO.**
Los ejercicios 01-08 tienen codigo; el 06 fue guiado y el 07 conserva
dos versiones validas del alumno. Los ejercicios 09-15 estan pendientes.

## Nuevo laboratorio para practicar el parcial

[**Películas JSONB: 42 documentos, datos y 16 ejercicios**](laboratorios/parcial_peliculas_jsonb/README.md)

Esquema aislado `sgbd_parcial_peliculas.peliculas`, con `id` y `doc JSONB`.
Cada archivo de consulta tiene su consigna y un `TODO` para resolverlo.
El SQL de carga usa cinco lotes de `INSERT`, con respaldo en JSONL.
