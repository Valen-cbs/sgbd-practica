# MongoDB - Practicas de SGBD

## Datos

Los archivos `datos/juegos.json` y `datos/jugadores.json` contienen exactamente 36 juegos y 18 jugadores, respectivamente.

## Carga en mongosh

Ejecutar desde un entorno de practica limpio:

```javascript
load("mongodb/setup/01_crear_colecciones.js");
load("mongodb/setup/02_insert_many.js");
load("mongodb/setup/03_verificar_datos.js");
use sgbd_practica
```

El script de carga controla que las colecciones esten vacias y utiliza `insertMany()` con los datos originales.

## Consultas

- `consultas/find/` almacena cada ejercicio de `find()`.
- `consultas/aggregate/` almacena cada ejercicio de `aggregate()`.

Los archivos del **segundo simulacro, ejercicios 01-05**, contienen el enunciado y el codigo entregado por el alumno, corregido cuando fue necesario. El resto se mantiene pendiente cuando no se dispone del codigo original.
