# Ejercicios — resueltos y pendientes

Todas las consignas están **dentro de cada archivo .js o .sql** (como comentarios). No existe una carpeta separada de enunciados.

## MongoDB — Simulacro 01 (todos los ejercicios 01–10 con solución)

| Ejercicio | Archivo | Estado |
|---|---|---|
| 01 | [Buscar jugadores por NEBULA QUEST](mongodb/consultas/find/s1_e01_jugadores_nebula_quest.js) | **Resuelto (corregido)** |
| 02 | [Duración máxima RPG](mongodb/consultas/aggregate/s1_e02_duracion_maxima_rpg.js) | **Resuelto** |
| 03 | [Duración mínima Estrategia](mongodb/consultas/aggregate/s1_e03_duracion_minima_estrategia.js) | **Resuelto** |
| 04 | [Precio y plataforma](mongodb/consultas/find/s1_e04_juegos_pc_precio_rango.js) | **Resuelto** |
| 05 (find) | [Top 5 ventas (find)](mongodb/consultas/find/s1_e05_top_cinco_ventas.js) | **Resuelto** |
| 05 (aggregate) | [Top 5 ventas (aggregate)](mongodb/consultas/aggregate/s1_e05_top_cinco_ventas.js) | **Resuelto (segunda forma)** |
| 06 | [Cantidad por género](mongodb/consultas/aggregate/s1_e06_cantidad_por_genero.js) | **Resuelto** |
| 07 | [Promedio horas Aventura](mongodb/consultas/aggregate/s1_e07_promedio_horas_aventura.js) | **Resuelto** |
| 08 | [SOLAR RAID 40 horas](mongodb/consultas/find/s1_e08_solar_raid_40_horas.js) | **Resuelto** |
| 09 | [Jugadores argentinos y SOLAR RAID](mongodb/consultas/find/s1_e09_jugadores_argentina_solar_raid.js) | **Resuelto** |
| 10 | [Estadísticas de Acción en PC](mongodb/consultas/aggregate/s1_e10_estadisticas_accion_pc.js) | **Resuelto** |

**Versiones alternativas:** el ejercicio 05 está tanto en `find/` como en `aggregate/`. Los ejercicios 02, 03 y 04 incluyen dos formas correctas dentro de sus archivos.

## MongoDB — Simulacro 02

| Ejercicio | Archivo | Estado |
|---|---|---|
| 01 | [RPG PC, precio y stock](mongodb/consultas/find/s2_e01_rpg_pc_precio_stock.js) | Resuelto |
| 02 | [Acción PC, promedio](mongodb/consultas/aggregate/s2_e02_accion_pc_precio_promedio.js) | Resuelto |
| 03 | [NEBULA QUEST, activos](mongodb/consultas/find/s2_e03_nebula_quest_activos.js) | Resuelto |
| 04 | [Aventura/Estrategia y precios](mongodb/consultas/find/s2_e04_aventura_estrategia_precios.js) | Resuelto |
| 05 | [Duraciones RPG/Estrategia](mongodb/consultas/aggregate/s2_e05_rpg_estrategia_duraciones.js) | Resuelto (corregido) |
| 06 | [Ventas totales por género](mongodb/consultas/aggregate/s2_e06_ventas_totales_genero.js) | Consigna + TODO |

Los ejercicios 07-10 de este simulacro aún no tienen consigna asignada; se incorporarán cuando se definan.

## PostgreSQL — Unidad 7

| Ejercicio | Archivo | Estado |
|---|---|---|
| 01 | [Notebooks RAM](postgresql/consultas/jsonb/e01_notebooks_ram_16.sql) | Resuelto |
| 02 | [Heladeras No Frost](postgresql/consultas/jsonb/e02_heladeras_no_frost.sql) | Corregido |
| 03 | [Calzado talle 42](postgresql/consultas/jsonb/e03_calzado_talle_42.sql) | Corregido |
| 04 | [Gaming o trabajo](postgresql/consultas/arrays/e04_gaming_o_trabajo.sql) | Resuelto |
| 05 | [Gaming y alta gama](postgresql/consultas/arrays/e05_gaming_y_alta_gama.sql) | **Dos soluciones correctas** |
| 06 | [Resumen por categoría](postgresql/consultas/sql_general/e06_resumen_por_categoria.sql) | Solución guiada |
| 07 | [Notebooks GPU](postgresql/consultas/jsonb/e07_notebooks_gpu_rtx.sql) | Resuelto de dos formas |
| 08 | [Pantalla Hz](postgresql/consultas/jsonb/e08_notebooks_pantalla_hz.sql) | Corregido |
| 09 | [Películas documentales](postgresql/consultas/jsonb/e09_peliculas_documentales.sql) | Consigna + TODO |
| 10 | [Categoría menos frecuente](postgresql/consultas/jsonb/e10_categoria_menos_frecuente.sql) | Consigna + TODO |
| 11 | [Behind the Scenes](postgresql/consultas/jsonb/e11_peliculas_behind_the_scenes.sql) | Consigna + TODO |
| 12 | [Estadísticas de películas](postgresql/consultas/jsonb/e12_estadisticas_peliculas.sql) | Consigna + TODO |
| 13 | [Comparar GIN](postgresql/consultas/opcionales/e13_indices_gin.sql) | Consigna + TODO |
| 14 | [GIN arrays](postgresql/consultas/opcionales/e14_explain_analyze.sql) | Consigna + TODO |
| 15 | [Integrador final](postgresql/consultas/jsonb/e15_integrador_final.sql) | Consigna + TODO |

## Prácticas extra de actualización

Estas consignas provienen de otra tanda de ejercicios, **no** de los ejercicios 09 y 10 del archivo resuelto:

- [Actualizar un jugador (`updateOne`)](mongodb/consultas/update/extra_e01_actualizar_rayo_sur.js) — pendiente.
- [Incrementar stock (`updateMany`)](mongodb/consultas/update/extra_e02_incrementar_stock_accion.js) — pendiente.

## Datos originales

- [36 juegos](mongodb/datos/juegos.json) y [18 jugadores](mongodb/datos/jugadores.json)
- [SQL de creación y carga: 60 productos y 24 películas](postgresql/setup/01_crear_y_cargar.sql)
