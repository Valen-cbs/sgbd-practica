-- SGBD / Unidad 7 / PostgreSQL / Multipass
-- Laboratorio de practica creado a partir de la actividad real de U7.
-- Primeros 20 productos: datos del U7_catalogo_multimodelo.jsonl de la catedra.
-- Productos 21..60 y peliculas: datos adicionales simulados para practicar.
-- ATENCION: vuelve a crear SOLO el esquema sgbd_u7_practica, borrando sus tablas previas.
-- Ejecutar con psql -v ON_ERROR_STOP=1 -d postgres -f 01_crear_y_cargar.sql
-- No creamos indices GIN de entrada para permitir EXPLAIN antes/despues.

BEGIN;
DROP SCHEMA IF EXISTS sgbd_u7_practica CASCADE;
CREATE SCHEMA sgbd_u7_practica;
SET search_path TO sgbd_u7_practica, public;

-- PARTE 1: DEFINICION DE ESQUEMA (DDL)
CREATE TABLE catalogo (
    id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    precio NUMERIC(12,2) NOT NULL,
    stock INT NOT NULL,
    atributos JSONB,
    tags TEXT[]
);

-- Tabla adicional en el estilo de las preguntas JSON del parcial 2025:
-- Cada pelicula se representa como un documento JSONB completo.
CREATE TABLE peliculas (
    id INT PRIMARY KEY,
    doc JSONB NOT NULL
);

-- PARTE 2: CARGA DE DATOS (DML)
-- 60 productos: 20 de la catedra + 40 adicionales simulados.
INSERT INTO catalogo (id, nombre, categoria, precio, stock, atributos, tags) VALUES
(1, 'Notebook Atlas 14', 'notebook', 1250000, 12, '{"ram_gb":16,"ssd_gb":512,"cpu":"Ryzen 7","gpu":"integrada"}'::jsonb, ARRAY['portable','trabajo','wifi6']::text[]),
(2, 'Notebook Titan 16', 'notebook', 2100000, 5, '{"ram_gb":32,"ssd_gb":1024,"cpu":"Core Ultra 9","gpu":"RTX 5070"}'::jsonb, ARRAY['gaming','gpu','alta-gama']::text[]),
(3, 'Ultrabook Air 13', 'notebook', 1450000, 8, '{"ram_gb":16,"ssd_gb":512,"peso_kg":1.1,"pantalla":"13.3"}'::jsonb, ARRAY['portable','liviana','viaje']::text[]),
(4, 'Heladera Polar 420', 'heladera', 980000, 4, '{"litros":420,"no_frost":true,"puertas":2,"eficiencia":"A"}'::jsonb, ARRAY['hogar','no-frost']::text[]),
(5, 'Heladera Compact 280', 'heladera', 690000, 9, '{"litros":280,"no_frost":false,"puertas":2,"eficiencia":"A+"}'::jsonb, ARRAY['hogar','compacta']::text[]),
(6, 'Freezer Arctic 300', 'freezer', 760000, 3, '{"litros":300,"tipo":"horizontal","temperatura_min":-24}'::jsonb, ARRAY['frio','comercial']::text[]),
(7, 'Zapatilla Run X', 'calzado', 145000, 35, '{"talles":[39,40,41,42,43],"material":"mesh","uso":"running"}'::jsonb, ARRAY['deporte','running','liviana']::text[]),
(8, 'Bota Trek Pro', 'calzado', 230000, 18, '{"talles":[40,41,42,43,44],"material":"cuero","impermeable":true}'::jsonb, ARRAY['trekking','outdoor','impermeable']::text[]),
(9, 'Sandalia Urban', 'calzado', 89000, 26, '{"talles":[36,37,38,39,40],"material":"sintetico"}'::jsonb, ARRAY['verano','urbano']::text[]),
(10, 'Taladro Pro 18V', 'herramienta', 310000, 14, '{"voltaje":18,"bateria_ah":4,"rpm":1800,"percutor":true}'::jsonb, ARRAY['taller','inalambrico','profesional']::text[]),
(11, 'Amoladora 900W', 'herramienta', 165000, 11, '{"potencia_w":900,"disco_mm":115,"rpm":11000}'::jsonb, ARRAY['taller','corte']::text[]),
(12, 'Compresor 50L', 'herramienta', 540000, 6, '{"litros":50,"presion_bar":8,"potencia_hp":2}'::jsonb, ARRAY['taller','aire']::text[]),
(13, 'Smart TV Nova 55', 'televisor', 820000, 7, '{"pulgadas":55,"resolucion":"4K","hdr":true,"so":"Google TV"}'::jsonb, ARRAY['hogar','4k','streaming']::text[]),
(14, 'Smart TV Cinema 65', 'televisor', 1350000, 4, '{"pulgadas":65,"resolucion":"4K","panel":"OLED","hdr":true}'::jsonb, ARRAY['hogar','oled','cine']::text[]),
(15, 'Monitor Work 27', 'monitor', 420000, 13, '{"pulgadas":27,"resolucion":"QHD","hz":75,"panel":"IPS"}'::jsonb, ARRAY['trabajo','ips']::text[]),
(16, 'Monitor Game 32', 'monitor', 690000, 8, '{"pulgadas":32,"resolucion":"QHD","hz":165,"panel":"VA"}'::jsonb, ARRAY['gaming','alta-frecuencia']::text[]),
(17, 'Cafetera Barista', 'cafetera', 350000, 10, '{"presion_bar":15,"deposito_l":1.8,"vaporizador":true}'::jsonb, ARRAY['cocina','cafe','espresso']::text[]),
(18, 'Cafetera Filtro 12', 'cafetera', 99000, 22, '{"tazas":12,"programable":true,"filtro":"permanente"}'::jsonb, ARRAY['cocina','cafe']::text[]),
(19, 'Router Mesh AX3000', 'redes', 280000, 16, '{"wifi":"6","puertos_gigabit":3,"mesh":true,"bandas":2}'::jsonb, ARRAY['redes','wifi6','mesh']::text[]),
(20, 'Switch 24G Managed', 'redes', 510000, 5, '{"puertos":24,"gestionable":true,"poe":false,"rack":true}'::jsonb, ARRAY['redes','empresa','rack']::text[]),
(21, 'Notebook Orion 15', 'notebook', 990000, 20, '{"ram_gb":8,"ssd_gb":256,"cpu":"Core i3","gpu":"integrada","pantalla":{"pulgadas":15.6,"tipo":"TN","hz":60}}'::jsonb, ARRAY['estudio','portable']::text[]),
(22, 'Notebook Nova Pro 15', 'notebook', 1780000, 9, '{"ram_gb":24,"ssd_gb":1024,"cpu":"Ryzen 9","gpu":"RTX 4060","pantalla":{"pulgadas":15.6,"tipo":"IPS","hz":144}}'::jsonb, ARRAY['gaming','trabajo','gpu']::text[]),
(23, 'Notebook Office 14', 'notebook', 1190000, 16, '{"ram_gb":16,"ssd_gb":512,"cpu":"Core i5","gpu":"integrada","pantalla":{"pulgadas":14,"tipo":"IPS","hz":60}}'::jsonb, ARRAY['trabajo','portable']::text[]),
(24, 'Notebook Blaze 17', 'notebook', 2390000, 4, '{"ram_gb":32,"ssd_gb":2048,"cpu":"Core i9","gpu":"RTX 5080","pantalla":{"pulgadas":17.3,"tipo":"IPS","hz":240}}'::jsonb, ARRAY['gaming','alta-gama','gpu']::text[]),
(25, 'Notebook Estudio 13', 'notebook', 1350000, 11, '{"ram_gb":16,"ssd_gb":512,"cpu":"Ryzen 5","gpu":"integrada","pantalla":{"pulgadas":13.3,"tipo":"OLED","hz":90}}'::jsonb, ARRAY['estudio','portable']::text[]),
(26, 'Heladera Sur 360', 'heladera', 870000, 7, '{"litros":360,"no_frost":true,"puertas":2,"eficiencia":"A+"}'::jsonb, ARRAY['hogar','no-frost']::text[]),
(27, 'Heladera Mini 180', 'heladera', 460000, 16, '{"litros":180,"no_frost":false,"puertas":1,"eficiencia":"B"}'::jsonb, ARRAY['hogar','compacta']::text[]),
(28, 'Heladera Familiar 530', 'heladera', 1450000, 3, '{"litros":530,"no_frost":true,"puertas":3,"eficiencia":"A"}'::jsonb, ARRAY['hogar','no-frost','alta-gama']::text[]),
(29, 'Heladera Eco 300', 'heladera', 790000, 12, '{"litros":300,"no_frost":false,"puertas":2,"eficiencia":"A++"}'::jsonb, ARRAY['hogar','ahorro']::text[]),
(30, 'Monitor Pixel 24', 'monitor', 230000, 22, '{"pulgadas":24,"resolucion":"Full HD","hz":75,"panel":"IPS","pantalla":{"tipo":"IPS","hz":75}}'::jsonb, ARRAY['trabajo','ips']::text[]),
(31, 'Monitor Pro 27', 'monitor', 515000, 10, '{"pulgadas":27,"resolucion":"QHD","hz":144,"panel":"IPS","pantalla":{"tipo":"IPS","hz":144}}'::jsonb, ARRAY['gaming','trabajo','ips']::text[]),
(32, 'Monitor UltraWide 34', 'monitor', 950000, 6, '{"pulgadas":34,"resolucion":"UWQHD","hz":165,"panel":"VA","pantalla":{"tipo":"VA","hz":165}}'::jsonb, ARRAY['gaming','alta-gama']::text[]),
(33, 'Monitor Studio 32', 'monitor', 810000, 8, '{"pulgadas":32,"resolucion":"4K","hz":60,"panel":"IPS","pantalla":{"tipo":"IPS","hz":60}}'::jsonb, ARRAY['trabajo','diseno']::text[]),
(34, 'Zapatilla Trail Z', 'calzado', 190000, 21, '{"talles":[38,39,40,41,42,43],"material":"mesh","uso":"trail"}'::jsonb, ARRAY['deporte','running','outdoor']::text[]),
(35, 'Botin Futbol City', 'calzado', 175000, 17, '{"talles":[39,40,41,42,43,44],"material":"sintetico","uso":"futbol"}'::jsonb, ARRAY['deporte','futbol']::text[]),
(36, 'Bota Invierno Norte', 'calzado', 280000, 9, '{"talles":[36,37,38,39,40,41],"material":"cuero","impermeable":true}'::jsonb, ARRAY['invierno','outdoor','impermeable']::text[]),
(37, 'Zapato Formal Urban', 'calzado', 160000, 24, '{"talles":[40,41,42,43,44],"material":"cuero","uso":"formal"}'::jsonb, ARRAY['trabajo','urbano']::text[]),
(38, 'Taladro Hogar 12V', 'herramienta', 145000, 18, '{"voltaje":12,"bateria_ah":2,"rpm":1200,"percutor":false}'::jsonb, ARRAY['hogar','inalambrico']::text[]),
(39, 'Sierra Circular 1400W', 'herramienta', 260000, 13, '{"potencia_w":1400,"disco_mm":185,"rpm":5200}'::jsonb, ARRAY['taller','corte']::text[]),
(40, 'Atornillador 20V', 'herramienta', 220000, 20, '{"voltaje":20,"bateria_ah":3,"rpm":1600}'::jsonb, ARRAY['taller','inalambrico']::text[]),
(41, 'Hidrolavadora 1800W', 'herramienta', 430000, 8, '{"potencia_w":1800,"presion_bar":130,"caudal_l_h":400}'::jsonb, ARRAY['hogar','limpieza']::text[]),
(42, 'Router AX5400', 'redes', 395000, 11, '{"wifi":"6","puertos_gigabit":4,"mesh":true,"bandas":2}'::jsonb, ARRAY['redes','wifi6','mesh']::text[]),
(43, 'Switch 8G Basico', 'redes', 95000, 28, '{"puertos":8,"gestionable":false,"poe":false,"rack":false}'::jsonb, ARRAY['redes','hogar']::text[]),
(44, 'Access Point Pro', 'redes', 240000, 16, '{"wifi":"6","poe":true,"mesh":true,"bandas":2}'::jsonb, ARRAY['redes','empresa','wifi6']::text[]),
(45, 'Smart TV Norte 43', 'televisor', 510000, 18, '{"pulgadas":43,"resolucion":"Full HD","hdr":false,"so":"Android TV"}'::jsonb, ARRAY['hogar','streaming']::text[]),
(46, 'Smart TV Brillo 75', 'televisor', 2150000, 3, '{"pulgadas":75,"resolucion":"4K","hdr":true,"panel":"QLED"}'::jsonb, ARRAY['hogar','cine','alta-gama']::text[]),
(47, 'Smart TV Rio 50', 'televisor', 720000, 12, '{"pulgadas":50,"resolucion":"4K","hdr":true,"so":"Google TV"}'::jsonb, ARRAY['hogar','4k','streaming']::text[]),
(48, 'Cafetera Compact Espresso', 'cafetera', 290000, 14, '{"presion_bar":15,"deposito_l":1.2,"vaporizador":true}'::jsonb, ARRAY['cocina','cafe','espresso']::text[]),
(49, 'Cafetera Molino Plus', 'cafetera', 690000, 5, '{"presion_bar":19,"deposito_l":2,"molino":true}'::jsonb, ARRAY['cocina','cafe','alta-gama']::text[]),
(50, 'Cafetera Goteo Mini', 'cafetera', 75000, 26, '{"tazas":6,"programable":false,"filtro":"papel"}'::jsonb, ARRAY['cocina','cafe']::text[]),
(51, 'Smartphone Aurora A1', 'smartphone', 430000, 25, '{"ram_gb":6,"almacenamiento_gb":128,"camara_mp":48,"bateria_mah":5000,"pantalla":{"pulgadas":6.5,"tipo":"LCD","hz":90}}'::jsonb, ARRAY['movil','economico']::text[]),
(52, 'Smartphone Aurora Pro', 'smartphone', 950000, 12, '{"ram_gb":12,"almacenamiento_gb":256,"camara_mp":108,"bateria_mah":4800,"pantalla":{"pulgadas":6.7,"tipo":"AMOLED","hz":120}}'::jsonb, ARRAY['movil','alta-gama','fotografia']::text[]),
(53, 'Smartphone Delta 5G', 'smartphone', 680000, 19, '{"ram_gb":8,"almacenamiento_gb":256,"camara_mp":64,"bateria_mah":5100,"pantalla":{"pulgadas":6.6,"tipo":"OLED","hz":120}}'::jsonb, ARRAY['movil','5g']::text[]),
(54, 'Smartphone Mini S', 'smartphone', 520000, 15, '{"ram_gb":8,"almacenamiento_gb":128,"camara_mp":50,"bateria_mah":4200,"pantalla":{"pulgadas":6.1,"tipo":"OLED","hz":90}}'::jsonb, ARRAY['movil','compacta']::text[]),
(55, 'Impresora EcoTank 310', 'impresora', 530000, 13, '{"tecnologia":"tinta","color":true,"wifi":true,"ppm":15}'::jsonb, ARRAY['trabajo','oficina','wifi']::text[]),
(56, 'Impresora Laser Mono', 'impresora', 360000, 9, '{"tecnologia":"laser","color":false,"wifi":false,"ppm":30}'::jsonb, ARRAY['trabajo','oficina']::text[]),
(57, 'Impresora Foto Pro', 'impresora', 850000, 4, '{"tecnologia":"tinta","color":true,"wifi":true,"ppm":10}'::jsonb, ARRAY['fotografia','alta-gama']::text[]),
(58, 'Teclado Mecanico K1', 'accesorio', 125000, 27, '{"tipo":"teclado","conexion":"usb","switch":"red","rgb":true}'::jsonb, ARRAY['gaming','periferico']::text[]),
(59, 'Mouse Silencioso M2', 'accesorio', 68000, 31, '{"tipo":"mouse","conexion":"bluetooth","dpi":1600,"rgb":false}'::jsonb, ARRAY['trabajo','periferico']::text[]),
(60, 'Auricular Studio H', 'accesorio', 195000, 17, '{"tipo":"auricular","conexion":"bluetooth","cancelacion_ruido":true}'::jsonb, ARRAY['trabajo','audio']::text[]);

-- 24 peliculas simuladas, para ejercicios equivalentes al parcial 2025.
INSERT INTO peliculas (id, doc) VALUES
(1, '{"Title":"Horizonte de Acero","Category":"Action","Description":"Pelicula de practica de la categoria Action, identificador 1.","Length":112,"Special Features":["Behind the Scenes","Commentary"],"Release Year":2011}'::jsonb),
(2, '{"Title":"Guardianes del Valle","Category":"Action","Description":"Pelicula de practica de la categoria Action, identificador 2.","Length":95,"Special Features":["Deleted Scenes"],"Release Year":2012}'::jsonb),
(3, '{"Title":"Ruta de Escape","Category":"Action","Description":"Pelicula de practica de la categoria Action, identificador 3.","Length":124,"Special Features":["Behind the Scenes"],"Release Year":2013}'::jsonb),
(4, '{"Title":"Puente de Fuego","Category":"Action","Description":"Pelicula de practica de la categoria Action, identificador 4.","Length":105,"Special Features":["Trailers"],"Release Year":2014}'::jsonb),
(5, '{"Title":"Eclipse Final","Category":"Action","Description":"Pelicula de practica de la categoria Action, identificador 5.","Length":138,"Special Features":["Behind the Scenes","Deleted Scenes"],"Release Year":2015}'::jsonb),
(6, '{"Title":"Sabores del Sur","Category":"Documentary","Description":"Pelicula de practica de la categoria Documentary, identificador 6.","Length":82,"Special Features":["Interviews"],"Release Year":2016}'::jsonb),
(7, '{"Title":"Vida en el Pantanal","Category":"Documentary","Description":"Pelicula de practica de la categoria Documentary, identificador 7.","Length":94,"Special Features":["Behind the Scenes","Interviews"],"Release Year":2017}'::jsonb),
(8, '{"Title":"Arquitectura Viva","Category":"Documentary","Description":"Pelicula de practica de la categoria Documentary, identificador 8.","Length":77,"Special Features":["Commentary"],"Release Year":2018}'::jsonb),
(9, '{"Title":"Bosques del Tiempo","Category":"Documentary","Description":"Pelicula de practica de la categoria Documentary, identificador 9.","Length":90,"Special Features":["Behind the Scenes"],"Release Year":2019}'::jsonb),
(10, '{"Title":"Una Cita Imposible","Category":"Comedy","Description":"Pelicula de practica de la categoria Comedy, identificador 10.","Length":93,"Special Features":["Trailers"],"Release Year":2020}'::jsonb),
(11, '{"Title":"Departamento 404","Category":"Comedy","Description":"Pelicula de practica de la categoria Comedy, identificador 11.","Length":101,"Special Features":["Behind the Scenes"],"Release Year":2021}'::jsonb),
(12, '{"Title":"La Gran Mudanza","Category":"Comedy","Description":"Pelicula de practica de la categoria Comedy, identificador 12.","Length":88,"Special Features":["Deleted Scenes"],"Release Year":2022}'::jsonb),
(13, '{"Title":"Sombras de Invierno","Category":"Drama","Description":"Pelicula de practica de la categoria Drama, identificador 13.","Length":114,"Special Features":["Behind the Scenes"],"Release Year":2023}'::jsonb),
(14, '{"Title":"La Ultima Carta","Category":"Drama","Description":"Pelicula de practica de la categoria Drama, identificador 14.","Length":109,"Special Features":["Interviews"],"Release Year":2010}'::jsonb),
(15, '{"Title":"Voces del Rio","Category":"Drama","Description":"Pelicula de practica de la categoria Drama, identificador 15.","Length":97,"Special Features":["Deleted Scenes"],"Release Year":2011}'::jsonb),
(16, '{"Title":"Despues del Viento","Category":"Drama","Description":"Pelicula de practica de la categoria Drama, identificador 16.","Length":121,"Special Features":["Commentary"],"Release Year":2012}'::jsonb),
(17, '{"Title":"Robot Azul","Category":"Animation","Description":"Pelicula de practica de la categoria Animation, identificador 17.","Length":85,"Special Features":["Behind the Scenes"],"Release Year":2013}'::jsonb),
(18, '{"Title":"Viaje al Planeta Luz","Category":"Animation","Description":"Pelicula de practica de la categoria Animation, identificador 18.","Length":91,"Special Features":["Trailers"],"Release Year":2014}'::jsonb),
(19, '{"Title":"El Bosque Secreto","Category":"Animation","Description":"Pelicula de practica de la categoria Animation, identificador 19.","Length":78,"Special Features":["Behind the Scenes"],"Release Year":2015}'::jsonb),
(20, '{"Title":"Orbita Nueve","Category":"Sci-Fi","Description":"Pelicula de practica de la categoria Sci-Fi, identificador 20.","Length":132,"Special Features":["Behind the Scenes"],"Release Year":2016}'::jsonb),
(21, '{"Title":"Codigo Estelar","Category":"Sci-Fi","Description":"Pelicula de practica de la categoria Sci-Fi, identificador 21.","Length":119,"Special Features":["Interviews"],"Release Year":2017}'::jsonb),
(22, '{"Title":"Senal Desconocida","Category":"Sci-Fi","Description":"Pelicula de practica de la categoria Sci-Fi, identificador 22.","Length":105,"Special Features":["Deleted Scenes"],"Release Year":2018}'::jsonb),
(23, '{"Title":"Ritmos del Puerto","Category":"Music","Description":"Pelicula de practica de la categoria Music, identificador 23.","Length":89,"Special Features":["Behind the Scenes"],"Release Year":2019}'::jsonb),
(24, '{"Title":"Sinfonia Urbana","Category":"Music","Description":"Pelicula de practica de la categoria Music, identificador 24.","Length":76,"Special Features":["Interviews"],"Release Year":2020}'::jsonb);

COMMIT;

-- Comprobacion de carga (debe mostrar 60 y 24)
SELECT 'catalogo' AS tabla, count(*) AS cantidad FROM sgbd_u7_practica.catalogo
UNION ALL
SELECT 'peliculas', count(*) FROM sgbd_u7_practica.peliculas;
