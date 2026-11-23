// Crea las colecciones sin modificar documentos existentes.
const sgbdBase = db.getSiblingDB('sgbd_practica');
for (const nombre of ['juegos', 'jugadores']) {
  if (!sgbdBase.getCollectionNames().includes(nombre)) sgbdBase.createCollection(nombre);
}
print('Colecciones de sgbd_practica listas.');
