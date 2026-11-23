# MongoDB - Practicas de SGBD

## Datos originales
`datos/juegos.json`: 36 juegos; `datos/jugadores.json`: 18 jugadores.

## Carga en mongosh
Desde la raiz del repositorio, en una base de practica limpia:

```javascript
load("mongodb/setup/01_crear_colecciones.js");
load("mongodb/setup/02_insert_many.js");
load("mongodb/setup/03_verificar_datos.js");
use sgbd_practica
```

`02_insert_many.js` incluye los mismos registros originales y rechaza
colecciones no vacias para evitar duplicados.

## Consultas por operacion

- `consultas/find/`: consultas `find()`.
- `consultas/aggregate/`: pipelines con `aggregate()`.
- `consultas/update/`: `updateOne()` y `updateMany()` (modifican datos).

**Cada archivo contiene su propia consigna como comentario.** Si la solucion
del alumno todavia no esta disponible, queda marcado `SOLUCION: pendiente`.

En el simulacro 02, ejercicios 01-05, ya estan sus consultas revisadas.
En el simulacro 01, las plantillas contienen las consignas originales,
y se completaran al recibir las consultas del alumno.
Los ejercicios 07-10 del simulacro 02 aun no tienen consigna definida.
