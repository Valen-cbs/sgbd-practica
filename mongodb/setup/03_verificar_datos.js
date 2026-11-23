const base = db.getSiblingDB('sgbd_practica');
print('juegos: ' + base.juegos.countDocuments({}));
print('jugadores: ' + base.jugadores.countDocuments({}));
