# PostgreSQL - Consultas JSONB y arrays

## Carga de los datos originales

Ejecutar desde la raiz del repositorio:

```bash
psql -d postgres -v ON_ERROR_STOP=1 -f postgresql/setup/01_crear_y_cargar.sql
```

**Advertencia:** este script recrea el esquema `sgbd_u7_practica` y borra sus tablas anteriores.

Carga 60 productos en `catalogo` y 24 documentos de peliculas en `peliculas`.
Los archivos `datos/*.jsonl` son copias auxiliares de los mismos registros.

## Consultas individuales

Antes de ejecutarlas en una sesion `psql`:

```sql
SET search_path TO sgbd_u7_practica, public;
```

Los archivos se dividen en `jsonb/`, `arrays/`, `sql_general/` y `opcionales/`.
Cada archivo completado contiene la consigna como comentario y luego la solucion.
El ejercicio 07 conserva dos soluciones validas.
El ejercicio 06 fue guiado, no una entrega independiente.
