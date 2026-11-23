# Consultas resueltas — acceso directo

Este indice permite encontrar cada archivo que **ya contiene codigo**. Las consultas se conservan por ejercicio, con su enunciado como comentario arriba del codigo.

## MongoDB — Simulacro 02 (codigo del alumno, formateado y corregido)

| Ejercicio | Tipo | Archivo | Estado |
|---|---|---|---|
| 01 | find | [RPG en PC, precio y stock](mongodb/consultas/find/s2_e01_rpg_pc_precio_stock.js) | Resuelto |
| 02 | aggregate | [Accion PC, promedio](mongodb/consultas/aggregate/s2_e02_accion_pc_precio_promedio.js) | Resuelto |
| 03 | find | [NEBULA QUEST, jugadores activos](mongodb/consultas/find/s2_e03_nebula_quest_activos.js) | Resuelto |
| 04 | find | [Aventura/Estrategia y rango de precio](mongodb/consultas/find/s2_e04_aventura_estrategia_precios.js) | Resuelto |
| 05 | aggregate | [Duraciones RPG/Estrategia](mongodb/consultas/aggregate/s2_e05_rpg_estrategia_duraciones.js) | Corregido: agregado $sort |

El ejercicio 06 del segundo simulacro esta pendiente de recibir codigo; los ejercicios 07-10 todavia no se hicieron.

## PostgreSQL — Unidad 7

| Ejercicio | Tipo | Archivo | Estado |
|---|---|---|---|
| 01 | JSONB | [Notebooks con RAM >=16](postgresql/consultas/jsonb/e01_notebooks_ram_16.sql) | Resuelto |
| 02 | JSONB | [Heladeras No Frost](postgresql/consultas/jsonb/e02_heladeras_no_frost.sql) | Corregido |
| 03 | JSONB | [Calzado talle 42](postgresql/consultas/jsonb/e03_calzado_talle_42.sql) | Corregido |
| 04 | TEXT[] | [Gaming o trabajo](postgresql/consultas/arrays/e04_gaming_o_trabajo.sql) | Resuelto |
| 05 | TEXT[] | [Gaming y alta-gama](postgresql/consultas/arrays/e05_gaming_y_alta_gama.sql) | Corregido |
| 06 | SQL general | [Resumen por categoria](postgresql/consultas/sql_general/e06_resumen_por_categoria.sql) | **Solucion guiada del asistente** |
| 07 | JSONB | [GPU RTX 5070: dos formas](postgresql/consultas/jsonb/e07_notebooks_gpu_rtx.sql) | **Dos soluciones del alumno** |
| 08 | JSONB | [Pantalla Hz >=120](postgresql/consultas/jsonb/e08_notebooks_pantalla_hz.sql) | Corregido |

PostgreSQL, ejercicio 09 y siguientes: sin codigo del alumno.

## Por que todavia hay archivos vacios

En **MongoDB > consultas > find** y **aggregate** tambien hay archivos del **simulacro 01**. Estos siguen vacios porque las respuestas exactas escritas por el alumno no estan disponibles en la conversacion recuperable; solo esta el archivo con los enunciados. No se inventaron consultas para atribuirselas al alumno. Para completarlos preservando su estilo original, hace falta recibir el archivo de VS Code o las consultas anteriores.

## Datos de prueba

- [MongoDB juegos.json](mongodb/datos/juegos.json): 36 juegos.
- [MongoDB jugadores.json](mongodb/datos/jugadores.json): 18 jugadores.
- [MongoDB insertMany](mongodb/setup/02_insert_many.js): carga completa.
- [PostgreSQL SQL de creacion y carga](postgresql/setup/01_crear_y_cargar.sql): 60 productos y 24 peliculas.
