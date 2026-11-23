// Dataset ORIGINAL del simulacro de MongoDB. Ejecutar en mongosh.
// Rechaza la carga si ya existen documentos para evitar duplicados.
const sgbdBase = db.getSiblingDB('sgbd_practica');
if (sgbdBase.juegos.countDocuments({}) !== 0 || sgbdBase.jugadores.countDocuments({}) !== 0) {
  throw new Error('Las colecciones no estan vacias; se cancela la carga.');
}
sgbdBase.juegos.insertMany([
  {
    "titulo": "NEBULA QUEST",
    "genero": "RPG",
    "estudio": "Orion Forge",
    "precio": 54,
    "horasCampania": 48,
    "puntaje": 9.2,
    "plataformas": [
      "PC",
      "PS5"
    ],
    "ventas": 180000,
    "stock": 13,
    "lanzamiento": 2024,
    "etiquetas": [
      "espacial",
      "historia"
    ],
    "multijugador": false
  },
  {
    "titulo": "DRAGON ARCHIVE",
    "genero": "RPG",
    "estudio": "Silver Fox",
    "precio": 49,
    "horasCampania": 62,
    "puntaje": 8.7,
    "plataformas": [
      "PC",
      "Xbox"
    ],
    "ventas": 132000,
    "stock": 7,
    "lanzamiento": 2023,
    "etiquetas": [
      "fantasia",
      "historia"
    ],
    "multijugador": false
  },
  {
    "titulo": "CRYSTAL LEGENDS",
    "genero": "RPG",
    "estudio": "Moss Studio",
    "precio": 39,
    "horasCampania": 36,
    "puntaje": 8.3,
    "plataformas": [
      "PC",
      "Switch"
    ],
    "ventas": 92000,
    "stock": 11,
    "lanzamiento": 2022,
    "etiquetas": [
      "fantasia",
      "exploracion"
    ],
    "multijugador": false
  },
  {
    "titulo": "DUSK KINGDOM",
    "genero": "RPG",
    "estudio": "Moon Harbor",
    "precio": 65,
    "horasCampania": 75,
    "puntaje": 9.5,
    "plataformas": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "ventas": 241000,
    "stock": 5,
    "lanzamiento": 2025,
    "etiquetas": [
      "fantasia",
      "desafiante"
    ],
    "multijugador": false
  },
  {
    "titulo": "ECHOES OF TERRA",
    "genero": "RPG",
    "estudio": "Orion Forge",
    "precio": 35,
    "horasCampania": 29,
    "puntaje": 7.9,
    "plataformas": [
      "PC",
      "PS5"
    ],
    "ventas": 85000,
    "stock": 18,
    "lanzamiento": 2021,
    "etiquetas": [
      "espacial",
      "exploracion"
    ],
    "multijugador": false
  },
  {
    "titulo": "IRON CHRONICLES",
    "genero": "RPG",
    "estudio": "Silver Fox",
    "precio": 45,
    "horasCampania": 55,
    "puntaje": 8.8,
    "plataformas": [
      "PC"
    ],
    "ventas": 119000,
    "stock": 12,
    "lanzamiento": 2024,
    "etiquetas": [
      "historia",
      "estrategia"
    ],
    "multijugador": false
  },
  {
    "titulo": "SOLAR RAID",
    "genero": "Accion",
    "estudio": "Red Comet",
    "precio": 59,
    "horasCampania": 14,
    "puntaje": 9.1,
    "plataformas": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "ventas": 320000,
    "stock": 8,
    "lanzamiento": 2025,
    "etiquetas": [
      "espacial",
      "cooperativo"
    ],
    "multijugador": true
  },
  {
    "titulo": "NIGHT SHIFT",
    "genero": "Accion",
    "estudio": "Red Comet",
    "precio": 29,
    "horasCampania": 9,
    "puntaje": 7.5,
    "plataformas": [
      "PC",
      "Switch"
    ],
    "ventas": 74000,
    "stock": 3,
    "lanzamiento": 2022,
    "etiquetas": [
      "sigilo",
      "urbano"
    ],
    "multijugador": false
  },
  {
    "titulo": "TITAN STRIKE",
    "genero": "Accion",
    "estudio": "Glacier Works",
    "precio": 69,
    "horasCampania": 22,
    "puntaje": 9,
    "plataformas": [
      "PS5",
      "Xbox"
    ],
    "ventas": 288000,
    "stock": 6,
    "lanzamiento": 2026,
    "etiquetas": [
      "multijugador",
      "combate"
    ],
    "multijugador": true
  },
  {
    "titulo": "PIXEL RUSH",
    "genero": "Accion",
    "estudio": "Indie Lift",
    "precio": 19,
    "horasCampania": 6,
    "puntaje": 8.2,
    "plataformas": [
      "PC",
      "Switch"
    ],
    "ventas": 125000,
    "stock": 25,
    "lanzamiento": 2020,
    "etiquetas": [
      "retro",
      "rapido"
    ],
    "multijugador": false
  },
  {
    "titulo": "VOID RUNNER",
    "genero": "Accion",
    "estudio": "Moon Harbor",
    "precio": 42,
    "horasCampania": 18,
    "puntaje": 8.5,
    "plataformas": [
      "PC",
      "PS5"
    ],
    "ventas": 156000,
    "stock": 9,
    "lanzamiento": 2023,
    "etiquetas": [
      "espacial",
      "sigilo"
    ],
    "multijugador": false
  },
  {
    "titulo": "STORM REBELLION",
    "genero": "Accion",
    "estudio": "Glacier Works",
    "precio": 55,
    "horasCampania": 25,
    "puntaje": 8.9,
    "plataformas": [
      "PC",
      "Xbox"
    ],
    "ventas": 202000,
    "stock": 15,
    "lanzamiento": 2024,
    "etiquetas": [
      "cooperativo",
      "combate"
    ],
    "multijugador": true
  },
  {
    "titulo": "CITADEL COMMAND",
    "genero": "Estrategia",
    "estudio": "North Grid",
    "precio": 44,
    "horasCampania": 40,
    "puntaje": 8.6,
    "plataformas": [
      "PC"
    ],
    "ventas": 110000,
    "stock": 12,
    "lanzamiento": 2023,
    "etiquetas": [
      "tactico",
      "historico"
    ],
    "multijugador": false
  },
  {
    "titulo": "QUANTUM CHESS",
    "genero": "Estrategia",
    "estudio": "Indie Lift",
    "precio": 15,
    "horasCampania": 8,
    "puntaje": 7.8,
    "plataformas": [
      "PC",
      "Mobile"
    ],
    "ventas": 87000,
    "stock": 21,
    "lanzamiento": 2022,
    "etiquetas": [
      "puzzle",
      "tactico"
    ],
    "multijugador": false
  },
  {
    "titulo": "EMPIRE FRONTIER",
    "genero": "Estrategia",
    "estudio": "North Grid",
    "precio": 58,
    "horasCampania": 65,
    "puntaje": 9,
    "plataformas": [
      "PC",
      "Xbox"
    ],
    "ventas": 173000,
    "stock": 4,
    "lanzamiento": 2025,
    "etiquetas": [
      "historico",
      "gestion"
    ],
    "multijugador": true
  },
  {
    "titulo": "DEEP TACTICS",
    "genero": "Estrategia",
    "estudio": "Moss Studio",
    "precio": 32,
    "horasCampania": 27,
    "puntaje": 8.1,
    "plataformas": [
      "PC",
      "Switch"
    ],
    "ventas": 96000,
    "stock": 10,
    "lanzamiento": 2021,
    "etiquetas": [
      "tactico",
      "por turnos"
    ],
    "multijugador": false
  },
  {
    "titulo": "STAR COLONY WARS",
    "genero": "Estrategia",
    "estudio": "Orion Forge",
    "precio": 51,
    "horasCampania": 52,
    "puntaje": 8.8,
    "plataformas": [
      "PC"
    ],
    "ventas": 141000,
    "stock": 7,
    "lanzamiento": 2024,
    "etiquetas": [
      "espacial",
      "gestion"
    ],
    "multijugador": true
  },
  {
    "titulo": "BATTLE MAPS",
    "genero": "Estrategia",
    "estudio": "Indie Lift",
    "precio": 22,
    "horasCampania": 12,
    "puntaje": 7.7,
    "plataformas": [
      "PC",
      "Mobile"
    ],
    "ventas": 68000,
    "stock": 19,
    "lanzamiento": 2020,
    "etiquetas": [
      "puzzle",
      "por turnos"
    ],
    "multijugador": false
  },
  {
    "titulo": "FOREST WHISPERS",
    "genero": "Aventura",
    "estudio": "Moss Studio",
    "precio": 38,
    "horasCampania": 19,
    "puntaje": 8.4,
    "plataformas": [
      "PC",
      "Switch"
    ],
    "ventas": 101000,
    "stock": 17,
    "lanzamiento": 2023,
    "etiquetas": [
      "naturaleza",
      "historia"
    ],
    "multijugador": false
  },
  {
    "titulo": "LOST LIGHTHOUSE",
    "genero": "Aventura",
    "estudio": "Moon Harbor",
    "precio": 33,
    "horasCampania": 13,
    "puntaje": 8,
    "plataformas": [
      "PC",
      "PS5"
    ],
    "ventas": 89000,
    "stock": 6,
    "lanzamiento": 2021,
    "etiquetas": [
      "misterio",
      "historia"
    ],
    "multijugador": false
  },
  {
    "titulo": "SKYBOUND ISLANDS",
    "genero": "Aventura",
    "estudio": "Silver Fox",
    "precio": 57,
    "horasCampania": 31,
    "puntaje": 9.1,
    "plataformas": [
      "PC",
      "PS5",
      "Switch"
    ],
    "ventas": 190000,
    "stock": 14,
    "lanzamiento": 2025,
    "etiquetas": [
      "exploracion",
      "historia"
    ],
    "multijugador": false
  },
  {
    "titulo": "THE CLOCKWORK PATH",
    "genero": "Aventura",
    "estudio": "Indie Lift",
    "precio": 24,
    "horasCampania": 11,
    "puntaje": 8.2,
    "plataformas": [
      "PC",
      "Switch"
    ],
    "ventas": 118000,
    "stock": 20,
    "lanzamiento": 2022,
    "etiquetas": [
      "puzzle",
      "misterio"
    ],
    "multijugador": false
  },
  {
    "titulo": "OCEAN MEMORY",
    "genero": "Aventura",
    "estudio": "Red Comet",
    "precio": 41,
    "horasCampania": 23,
    "puntaje": 8.6,
    "plataformas": [
      "PC",
      "Xbox"
    ],
    "ventas": 121000,
    "stock": 8,
    "lanzamiento": 2024,
    "etiquetas": [
      "exploracion",
      "misterio"
    ],
    "multijugador": false
  },
  {
    "titulo": "SANDSTONE TRAIL",
    "genero": "Aventura",
    "estudio": "Glacier Works",
    "precio": 48,
    "horasCampania": 28,
    "puntaje": 8.7,
    "plataformas": [
      "PS5",
      "Xbox"
    ],
    "ventas": 137000,
    "stock": 13,
    "lanzamiento": 2026,
    "etiquetas": [
      "exploracion",
      "historia"
    ],
    "multijugador": false
  },
  {
    "titulo": "CITY ARCHITECT",
    "genero": "Simulacion",
    "estudio": "North Grid",
    "precio": 46,
    "horasCampania": 45,
    "puntaje": 8.8,
    "plataformas": [
      "PC"
    ],
    "ventas": 148000,
    "stock": 9,
    "lanzamiento": 2023,
    "etiquetas": [
      "construccion",
      "gestion"
    ],
    "multijugador": false
  },
  {
    "titulo": "FARM NOVA",
    "genero": "Simulacion",
    "estudio": "Moss Studio",
    "precio": 25,
    "horasCampania": 70,
    "puntaje": 8.1,
    "plataformas": [
      "PC",
      "Switch"
    ],
    "ventas": 230000,
    "stock": 30,
    "lanzamiento": 2022,
    "etiquetas": [
      "granja",
      "relajante"
    ],
    "multijugador": false
  },
  {
    "titulo": "TRAIN DEPOT",
    "genero": "Simulacion",
    "estudio": "North Grid",
    "precio": 37,
    "horasCampania": 34,
    "puntaje": 8.3,
    "plataformas": [
      "PC"
    ],
    "ventas": 98000,
    "stock": 13,
    "lanzamiento": 2024,
    "etiquetas": [
      "transporte",
      "gestion"
    ],
    "multijugador": false
  },
  {
    "titulo": "COFFEE PLANET",
    "genero": "Simulacion",
    "estudio": "Indie Lift",
    "precio": 18,
    "horasCampania": 16,
    "puntaje": 7.6,
    "plataformas": [
      "PC",
      "Mobile"
    ],
    "ventas": 112000,
    "stock": 17,
    "lanzamiento": 2021,
    "etiquetas": [
      "gestion",
      "relajante"
    ],
    "multijugador": false
  },
  {
    "titulo": "DEEP SEA LAB",
    "genero": "Simulacion",
    "estudio": "Orion Forge",
    "precio": 62,
    "horasCampania": 55,
    "puntaje": 9,
    "plataformas": [
      "PC",
      "PS5"
    ],
    "ventas": 167000,
    "stock": 7,
    "lanzamiento": 2025,
    "etiquetas": [
      "ciencia",
      "gestion"
    ],
    "multijugador": false
  },
  {
    "titulo": "AIRPORT SHIFT",
    "genero": "Simulacion",
    "estudio": "Silver Fox",
    "precio": 43,
    "horasCampania": 39,
    "puntaje": 8,
    "plataformas": [
      "PC",
      "Xbox"
    ],
    "ventas": 88000,
    "stock": 6,
    "lanzamiento": 2024,
    "etiquetas": [
      "transporte",
      "gestion"
    ],
    "multijugador": false
  },
  {
    "titulo": "FINAL LAP",
    "genero": "Deportes",
    "estudio": "Red Comet",
    "precio": 52,
    "horasCampania": 10,
    "puntaje": 8.5,
    "plataformas": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "ventas": 271000,
    "stock": 22,
    "lanzamiento": 2025,
    "etiquetas": [
      "carreras",
      "multijugador"
    ],
    "multijugador": true
  },
  {
    "titulo": "STREET LEAGUE",
    "genero": "Deportes",
    "estudio": "Glacier Works",
    "precio": 59,
    "horasCampania": 8,
    "puntaje": 8.2,
    "plataformas": [
      "PS5",
      "Xbox"
    ],
    "ventas": 215000,
    "stock": 11,
    "lanzamiento": 2024,
    "etiquetas": [
      "futbol",
      "multijugador"
    ],
    "multijugador": true
  },
  {
    "titulo": "SNOW PEAK",
    "genero": "Deportes",
    "estudio": "Silver Fox",
    "precio": 34,
    "horasCampania": 12,
    "puntaje": 7.9,
    "plataformas": [
      "PC",
      "Switch"
    ],
    "ventas": 105000,
    "stock": 15,
    "lanzamiento": 2022,
    "etiquetas": [
      "invierno",
      "carreras"
    ],
    "multijugador": true
  },
  {
    "titulo": "COURT HEROES",
    "genero": "Deportes",
    "estudio": "Indie Lift",
    "precio": 28,
    "horasCampania": 7,
    "puntaje": 8.1,
    "plataformas": [
      "PC",
      "Mobile"
    ],
    "ventas": 97000,
    "stock": 18,
    "lanzamiento": 2023,
    "etiquetas": [
      "basquet",
      "multijugador"
    ],
    "multijugador": true
  },
  {
    "titulo": "RALLY SPIRIT",
    "genero": "Deportes",
    "estudio": "Red Comet",
    "precio": 44,
    "horasCampania": 15,
    "puntaje": 8.6,
    "plataformas": [
      "PC",
      "PS5"
    ],
    "ventas": 164000,
    "stock": 9,
    "lanzamiento": 2021,
    "etiquetas": [
      "carreras",
      "simulador"
    ],
    "multijugador": true
  },
  {
    "titulo": "WAVE SURF",
    "genero": "Deportes",
    "estudio": "Moss Studio",
    "precio": 21,
    "horasCampania": 6,
    "puntaje": 7.7,
    "plataformas": [
      "PC",
      "Switch"
    ],
    "ventas": 81000,
    "stock": 19,
    "lanzamiento": 2020,
    "etiquetas": [
      "agua",
      "relajante"
    ],
    "multijugador": false
  }
]);
sgbdBase.jugadores.insertMany([
  {
    "alias": "rayo_sur",
    "pais": "Argentina",
    "nivel": 27,
    "activo": true,
    "biblioteca": [
      {
        "titulo": "NEBULA QUEST",
        "horasJugadas": 56,
        "completado": true
      },
      {
        "titulo": "SOLAR RAID",
        "horasJugadas": 72,
        "completado": false
      },
      {
        "titulo": "CITY ARCHITECT",
        "horasJugadas": 20,
        "completado": false
      },
      {
        "titulo": "DRAGON ARCHIVE",
        "horasJugadas": 4,
        "completado": false
      }
    ]
  },
  {
    "alias": "pixel_fox",
    "pais": "Argentina",
    "nivel": 35,
    "activo": true,
    "biblioteca": [
      {
        "titulo": "NEBULA QUEST",
        "horasJugadas": 12,
        "completado": false
      },
      {
        "titulo": "THE CLOCKWORK PATH",
        "horasJugadas": 26,
        "completado": true
      },
      {
        "titulo": "PIXEL RUSH",
        "horasJugadas": 35,
        "completado": true
      },
      {
        "titulo": "FOREST WHISPERS",
        "horasJugadas": 17,
        "completado": false
      }
    ]
  },
  {
    "alias": "luna_azul",
    "pais": "Chile",
    "nivel": 42,
    "activo": true,
    "biblioteca": [
      {
        "titulo": "DUSK KINGDOM",
        "horasJugadas": 81,
        "completado": true
      },
      {
        "titulo": "SOLAR RAID",
        "horasJugadas": 48,
        "completado": true
      },
      {
        "titulo": "OCEAN MEMORY",
        "horasJugadas": 33,
        "completado": true
      }
    ]
  },
  {
    "alias": "mate_andes",
    "pais": "Argentina",
    "nivel": 19,
    "activo": false,
    "biblioteca": [
      {
        "titulo": "SOLAR RAID",
        "horasJugadas": 9,
        "completado": false
      },
      {
        "titulo": "PIXEL RUSH",
        "horasJugadas": 18,
        "completado": true
      },
      {
        "titulo": "EMPIRE FRONTIER",
        "horasJugadas": 71,
        "completado": true
      }
    ]
  },
  {
    "alias": "astro_nico",
    "pais": "Uruguay",
    "nivel": 51,
    "activo": true,
    "biblioteca": [
      {
        "titulo": "NEBULA QUEST",
        "horasJugadas": 105,
        "completado": true
      },
      {
        "titulo": "STAR COLONY WARS",
        "horasJugadas": 65,
        "completado": true
      },
      {
        "titulo": "SOLAR RAID",
        "horasJugadas": 30,
        "completado": false
      }
    ]
  },
  {
    "alias": "valen_gamer",
    "pais": "Argentina",
    "nivel": 24,
    "activo": true,
    "biblioteca": [
      {
        "titulo": "SKYBOUND ISLANDS",
        "horasJugadas": 43,
        "completado": true
      },
      {
        "titulo": "DRAGON ARCHIVE",
        "horasJugadas": 68,
        "completado": true
      },
      {
        "titulo": "FINAL LAP",
        "horasJugadas": 17,
        "completado": false
      }
    ]
  },
  {
    "alias": "turbo_max",
    "pais": "Paraguay",
    "nivel": 16,
    "activo": true,
    "biblioteca": [
      {
        "titulo": "SOLAR RAID",
        "horasJugadas": 51,
        "completado": false
      },
      {
        "titulo": "FINAL LAP",
        "horasJugadas": 96,
        "completado": true
      },
      {
        "titulo": "STREET LEAGUE",
        "horasJugadas": 41,
        "completado": false
      }
    ]
  },
  {
    "alias": "flor_craft",
    "pais": "Argentina",
    "nivel": 44,
    "activo": true,
    "biblioteca": [
      {
        "titulo": "FARM NOVA",
        "horasJugadas": 120,
        "completado": true
      },
      {
        "titulo": "CITY ARCHITECT",
        "horasJugadas": 75,
        "completado": true
      },
      {
        "titulo": "DEEP SEA LAB",
        "horasJugadas": 34,
        "completado": false
      }
    ]
  },
  {
    "alias": "dani_quest",
    "pais": "Chile",
    "nivel": 31,
    "activo": false,
    "biblioteca": [
      {
        "titulo": "NEBULA QUEST",
        "horasJugadas": 37,
        "completado": false
      },
      {
        "titulo": "LOST LIGHTHOUSE",
        "horasJugadas": 14,
        "completado": true
      },
      {
        "titulo": "CITADEL COMMAND",
        "horasJugadas": 63,
        "completado": true
      }
    ]
  },
  {
    "alias": "cami_bits",
    "pais": "Argentina",
    "nivel": 28,
    "activo": true,
    "biblioteca": [
      {
        "titulo": "SOLAR RAID",
        "horasJugadas": 22,
        "completado": false
      },
      {
        "titulo": "TITAN STRIKE",
        "horasJugadas": 65,
        "completado": false
      },
      {
        "titulo": "NIGHT SHIFT",
        "horasJugadas": 10,
        "completado": true
      }
    ]
  },
  {
    "alias": "otto_arcade",
    "pais": "Brasil",
    "nivel": 33,
    "activo": true,
    "biblioteca": [
      {
        "titulo": "NEBULA QUEST",
        "horasJugadas": 44,
        "completado": true
      },
      {
        "titulo": "RALLY SPIRIT",
        "horasJugadas": 48,
        "completado": true
      },
      {
        "titulo": "QUANTUM CHESS",
        "horasJugadas": 7,
        "completado": false
      }
    ]
  },
  {
    "alias": "star_mica",
    "pais": "Argentina",
    "nivel": 49,
    "activo": true,
    "biblioteca": [
      {
        "titulo": "SOLAR RAID",
        "horasJugadas": 77,
        "completado": true
      },
      {
        "titulo": "NEBULA QUEST",
        "horasJugadas": 70,
        "completado": true
      },
      {
        "titulo": "VOID RUNNER",
        "horasJugadas": 26,
        "completado": true
      }
    ]
  },
  {
    "alias": "mar_plata",
    "pais": "Argentina",
    "nivel": 14,
    "activo": true,
    "biblioteca": [
      {
        "titulo": "OCEAN MEMORY",
        "horasJugadas": 28,
        "completado": true
      },
      {
        "titulo": "WAVE SURF",
        "horasJugadas": 39,
        "completado": true
      },
      {
        "titulo": "COURT HEROES",
        "horasJugadas": 22,
        "completado": false
      }
    ]
  },
  {
    "alias": "gus_strategy",
    "pais": "Uruguay",
    "nivel": 38,
    "activo": false,
    "biblioteca": [
      {
        "titulo": "EMPIRE FRONTIER",
        "horasJugadas": 92,
        "completado": true
      },
      {
        "titulo": "DEEP TACTICS",
        "horasJugadas": 35,
        "completado": true
      },
      {
        "titulo": "BATTLE MAPS",
        "horasJugadas": 12,
        "completado": false
      }
    ]
  },
  {
    "alias": "kira_norte",
    "pais": "Chile",
    "nivel": 47,
    "activo": true,
    "biblioteca": [
      {
        "titulo": "NEBULA QUEST",
        "horasJugadas": 58,
        "completado": true
      },
      {
        "titulo": "CRYSTAL LEGENDS",
        "horasJugadas": 47,
        "completado": true
      },
      {
        "titulo": "TRAIN DEPOT",
        "horasJugadas": 11,
        "completado": false
      }
    ]
  },
  {
    "alias": "jota_play",
    "pais": "Argentina",
    "nivel": 20,
    "activo": true,
    "biblioteca": [
      {
        "titulo": "SOLAR RAID",
        "horasJugadas": 55,
        "completado": true
      },
      {
        "titulo": "STAR COLONY WARS",
        "horasJugadas": 62,
        "completado": true
      },
      {
        "titulo": "FARM NOVA",
        "horasJugadas": 6,
        "completado": false
      }
    ]
  },
  {
    "alias": "tomi_wave",
    "pais": "Uruguay",
    "nivel": 23,
    "activo": true,
    "biblioteca": [
      {
        "titulo": "STREET LEAGUE",
        "horasJugadas": 45,
        "completado": false
      },
      {
        "titulo": "WAVE SURF",
        "horasJugadas": 21,
        "completado": true
      },
      {
        "titulo": "RALLY SPIRIT",
        "horasJugadas": 23,
        "completado": false
      }
    ]
  },
  {
    "alias": "cielo_pixel",
    "pais": "Paraguay",
    "nivel": 37,
    "activo": false,
    "biblioteca": [
      {
        "titulo": "IRON CHRONICLES",
        "horasJugadas": 61,
        "completado": true
      },
      {
        "titulo": "SANDSTONE TRAIL",
        "horasJugadas": 30,
        "completado": true
      },
      {
        "titulo": "AIRPORT SHIFT",
        "horasJugadas": 44,
        "completado": true
      }
    ]
  }
]);
print('Cargados 36 juegos y 18 jugadores.');
