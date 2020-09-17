export default {
  // 'GET /api/v1/trade/1': {
  //   continents: {
  //     0: {
  //       id: 0,
  //       name: '诺伊大陆',
  //       areaIds: [0, 1, 2],
  //     },
  //     1: {
  //       id: 1,
  //       name: '哈里兰大陆',
  //       areaIds: [3, 4, 5],
  //     },
  //   },
  //   areas: {
  //     0: {
  //       id: 0,
  //       name: '双管丘陵',
  //       warArea: false,
  //       packId: 0,
  //     },
  //     1: {
  //       id: 1,
  //       name: '索子里德半岛',
  //       warArea: false,
  //       packId: 1,
  //     },
  //     2: {
  //       id: 2,
  //       name: '十字星平原',
  //       warArea: true,
  //       packId: 2,
  //     },
  //     3: {
  //       id: 3,
  //       name: '黎明半岛',
  //       warArea: false,
  //       packId: 0,
  //     },
  //     4: {
  //       id: 4,
  //       name: '咏唱之地',
  //       warArea: false,
  //       packId: 0,
  //     },
  //     5: {
  //       id: 5,
  //       name: '伊尼斯泰尔',
  //       warArea: true,
  //       packId: 0,
  //     },
  //   },
  //   packs: {
  //     0: [
  //       {
  //         key: '1',
  //         origin: '索子里德半岛',
  //         level: 1,
  //         normal: 15.6296,
  //         glida: 43.9174,
  //         local: 17.1922,
  //         fertilizer: 17.9741,
  //         salve: 25.2607,
  //         cheese: 25.3885,
  //         honey: 25.3371,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '2',
  //         origin: '双管丘陵',
  //         level: 1,
  //         normal: 0,
  //         glida: 0,
  //         local: 0,
  //         fertilizer: 0,
  //         salve: 0,
  //         cheese: 0,
  //         honey: 0,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '3',
  //         origin: '十字星平原',
  //         level: 1,
  //         normal: 12.7855,
  //         glida: 40.905,
  //         local: 15.4658,
  //         fertilizer: 16.169,
  //         salve: 26.4637,
  //         cheese: 26.6773,
  //         honey: 26.6508,
  //         bluesalt: 86.9118,
  //         special: 26.2604,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '4',
  //         origin: '黎利尔丘陵',
  //         level: 2,
  //         normal: 15.9438,
  //         glida: 41.9502,
  //         local: 16.298,
  //         fertilizer: 17.0389,
  //         salve: 23.4337,
  //         cheese: 23.4337,
  //         honey: 23.4809,
  //         bluesalt: 90.4356,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '5',
  //         origin: '碎石平原',
  //         level: 2,
  //         normal: 16.0054,
  //         glida: 39.7531,
  //         local: 17.6058,
  //         fertilizer: 18.4064,
  //         salve: 23.0398,
  //         cheese: 22.8782,
  //         honey: 22.8549,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '6',
  //         origin: '马瑞诺普',
  //         level: 2,
  //         normal: 10.9539,
  //         glida: 37.3701,
  //         local: 12.0492,
  //         fertilizer: 12.5969,
  //         salve: 21.4539,
  //         cheese: 21.3895,
  //         honey: 21.4539,
  //         bluesalt: 88.2557,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '7',
  //         origin: '格威尔森林',
  //         level: 3,
  //         normal: 15.4681,
  //         glida: 40.7836,
  //         local: 16.1088,
  //         fertilizer: 16.8407,
  //         salve: 24.3383,
  //         cheese: 24.3628,
  //         honey: 24.3383,
  //         bluesalt: 96.5346,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '8',
  //         origin: '青铜岩石山',
  //         level: 3,
  //         normal: 15.0386,
  //         glida: 39.887,
  //         local: 15.4102,
  //         fertilizer: 16.1107,
  //         salve: 24.4853,
  //         cheese: 21.6424,
  //         honey: 24.436,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '9',
  //         origin: '太初之地',
  //         level: 3,
  //         normal: 14.6178,
  //         glida: 37.8812,
  //         local: 15.1734,
  //         fertilizer: 15.8631,
  //         salve: 22.4588,
  //         cheese: 16.7913,
  //         honey: 22.3236,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '10',
  //         origin: '白雪森林',
  //         level: 3,
  //         normal: 13.5804,
  //         glida: 35.8749,
  //         local: 14.9386,
  //         fertilizer: 15.6173,
  //         salve: 22.4138,
  //         cheese: 22.5266,
  //         honey: 22.4362,
  //         bluesalt: 90.4353,
  //         special: 0,
  //         antiquities: 10.9919,
  //       },
  //       {
  //         key: '11',
  //         origin: '埋骨之地',
  //         level: 3,
  //         normal: 18.0735,
  //         glida: 39.4727,
  //         local: 19.8812,
  //         fertilizer: 20.7851,
  //         salve: 21.9549,
  //         cheese: 21.9549,
  //         honey: 28.2609,
  //         bluesalt: 0,
  //         special: 38.5782,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '12',
  //         origin: '黄金平原',
  //         level: 4,
  //         normal: 14.8365,
  //         glida: 35.2222,
  //         local: 17.9863,
  //         fertilizer: 18.8038,
  //         salve: 24.9045,
  //         cheese: 24.9546,
  //         honey: 24.9799,
  //         bluesalt: 0,
  //         special: 27.7888,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '13',
  //         origin: '地狱沼泽',
  //         level: 4,
  //         normal: 17.082,
  //         glida: 37.9225,
  //         local: 18.7903,
  //         fertilizer: 19.6444,
  //         salve: 26.8205,
  //         cheese: 26.6587,
  //         honey: 26.8205,
  //         bluesalt: 0,
  //         special: 34.7698,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '14',
  //         origin: '珊瑚海岸',
  //         level: 4,
  //         normal: 16.6336,
  //         glida: 36.5723,
  //         local: 19.408,
  //         fertilizer: 20.29,
  //         salve: 24.8046,
  //         cheese: 24.7548,
  //         honey: 24.8046,
  //         bluesalt: 0,
  //         special: 28.3361,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '15',
  //         origin: '西风脊',
  //         level: 4,
  //         normal: 18.7318,
  //         glida: 40.0568,
  //         local: 20.6049,
  //         fertilizer: 21.5413,
  //         salve: 27.7226,
  //         cheese: 24.919,
  //         honey: 27.7783,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //     ],
  //     1: [
  //       {
  //         key: '1',
  //         origin: '索子里德半岛',
  //         level: 1,
  //         normal: 0,
  //         glida: 0,
  //         local: 0,
  //         fertilizer: 0,
  //         salve: 0,
  //         cheese: 0,
  //         honey: 0,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '2',
  //         origin: '双管丘陵',
  //         level: 1,
  //         normal: 16.2092,
  //         glida: 44.1575,
  //         local: 17.8303,
  //         fertilizer: 18.6404,
  //         salve: 25.4645,
  //         cheese: 25.2866,
  //         honey: 25.4392,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 10.4802,
  //       },
  //       {
  //         key: '3',
  //         origin: '十字星平原',
  //         level: 1,
  //         normal: 13.8333,
  //         glida: 42.3361,
  //         local: 16.6186,
  //         fertilizer: 17.3741,
  //         salve: 26.6505,
  //         cheese: 26.5439,
  //         honey: 26.4906,
  //         bluesalt: 88.3478,
  //         special: 30.3862,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '4',
  //         origin: '黎利尔丘陵',
  //         level: 2,
  //         normal: 11.818,
  //         glida: 37.9122,
  //         local: 13.0002,
  //         fertilizer: 13.5909,
  //         salve: 21.2819,
  //         cheese: 21.4108,
  //         honey: 21.4108,
  //         bluesalt: 93.8565,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '5',
  //         origin: '碎石平原',
  //         level: 2,
  //         normal: 11.8618,
  //         glida: 37.8467,
  //         local: 13.0479,
  //         fertilizer: 13.6408,
  //         salve: 22.3911,
  //         cheese: 22.3235,
  //         honey: 22.4815,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '6',
  //         origin: '马瑞诺普',
  //         level: 2,
  //         normal: 14.8736,
  //         glida: 39.2666,
  //         local: 16.3611,
  //         fertilizer: 17.105,
  //         salve: 22.3462,
  //         cheese: 22.3237,
  //         honey: 22.4138,
  //         bluesalt: 90.4075,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '7',
  //         origin: '格威尔森林',
  //         level: 3,
  //         normal: 15.0998,
  //         glida: 37.0967,
  //         local: 16.61,
  //         fertilizer: 17.3649,
  //         salve: 23.3649,
  //         cheese: 23.3883,
  //         honey: 23.3176,
  //         bluesalt: 91.9539,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '8',
  //         origin: '青铜岩石山',
  //         level: 3,
  //         normal: 16.0137,
  //         glida: 40.4381,
  //         local: 17.3889,
  //         fertilizer: 18.1794,
  //         salve: 26.3646,
  //         cheese: 26.3115,
  //         honey: 26.2056,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '9',
  //         origin: '太初之地',
  //         level: 3,
  //         normal: 15.621,
  //         glida: 38.432,
  //         local: 17.1834,
  //         fertilizer: 17.9646,
  //         salve: 22.3909,
  //         cheese: 22.3459,
  //         honey: 22.5041,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '10',
  //         origin: '白雪森林',
  //         level: 3,
  //         normal: 15.6879,
  //         glida: 38.6282,
  //         local: 17.2565,
  //         fertilizer: 18.0409,
  //         salve: 21.353,
  //         cheese: 21.3744,
  //         honey: 21.4392,
  //         bluesalt: 93.8563,
  //         special: 0,
  //         antiquities: 13.1996,
  //       },
  //       {
  //         key: '11',
  //         origin: '埋骨之地',
  //         level: 3,
  //         normal: 19.8123,
  //         glida: 41.948,
  //         local: 21.7935,
  //         fertilizer: 22.7842,
  //         salve: 32.0291,
  //         cheese: 32.2561,
  //         honey: 32.2236,
  //         bluesalt: 0,
  //         special: 50.1488,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '12',
  //         origin: '黄金平原',
  //         level: 4,
  //         normal: 16.7304,
  //         glida: 37.5557,
  //         local: 18.4031,
  //         fertilizer: 19.2399,
  //         salve: 29.6044,
  //         cheese: 29.694,
  //         honey: 29.6644,
  //         bluesalt: 0,
  //         special: 42.0862,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '13',
  //         origin: '地狱沼泽',
  //         level: 4,
  //         normal: 20.1292,
  //         glida: 43.1457,
  //         local: 21.5868,
  //         fertilizer: 22.568,
  //         salve: 30.6209,
  //         cheese: 30.5598,
  //         honey: 30.5598,
  //         bluesalt: 0,
  //         special: 59.6674,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '14',
  //         origin: '珊瑚海岸',
  //         level: 4,
  //         normal: 17.7294,
  //         glida: 38.6836,
  //         local: 19.5026,
  //         fertilizer: 20.3891,
  //         salve: 28.8226,
  //         cheese: 28.6785,
  //         honey: 28.7361,
  //         bluesalt: 0,
  //         special: 38.4007,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '15',
  //         origin: '西风脊',
  //         level: 4,
  //         normal: 20.6341,
  //         glida: 41.1199,
  //         local: 22.6979,
  //         fertilizer: 23.7294,
  //         salve: 35.2275,
  //         cheese: 35.3347,
  //         honey: 35.5122,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //     ],
  //     2: [
  //       {
  //         key: '1',
  //         origin: '索子里德半岛',
  //         level: 1,
  //         normal: 13.8334,
  //         glida: 42.3361,
  //         local: 16.6188,
  //         fertilizer: 17.3741,
  //         salve: 30.133,
  //         cheese: 30.0421,
  //         honey: 30.1635,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '2',
  //         origin: '双管丘陵',
  //         level: 1,
  //         normal: 12.7855,
  //         glida: 40.905,
  //         local: 15.466,
  //         fertilizer: 16.169,
  //         salve: 27.7502,
  //         cheese: 27.7225,
  //         honey: 27.7225,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 9.74,
  //       },
  //       {
  //         key: '3',
  //         origin: '十字星平原',
  //         level: 1,
  //         normal: 0,
  //         glida: 0,
  //         local: 0,
  //         fertilizer: 0,
  //         salve: 0,
  //         cheese: 0,
  //         honey: 0,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '4',
  //         origin: '黎利尔丘陵',
  //         level: 2,
  //         normal: 17.598,
  //         glida: 43.6359,
  //         local: 19.3578,
  //         fertilizer: 20.238,
  //         salve: 25.6674,
  //         cheese: 25.6928,
  //         honey: 25.5384,
  //         bluesalt: 92.3472,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '5',
  //         origin: '碎石平原',
  //         level: 2,
  //         normal: 16.8696,
  //         glida: 41.4385,
  //         local: 18.5565,
  //         fertilizer: 19.3998,
  //         salve: 24.5484,
  //         cheese: 24.5733,
  //         honey: 24.672,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '6',
  //         origin: '马瑞诺普',
  //         level: 2,
  //         normal: 15.4664,
  //         glida: 39.0549,
  //         local: 18.2531,
  //         fertilizer: 19.0829,
  //         salve: 23.5047,
  //         cheese: 23.5282,
  //         honey: 23.5047,
  //         bluesalt: 90.1674,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '7',
  //         origin: '格威尔森林',
  //         level: 3,
  //         normal: 16.6356,
  //         glida: 42.3221,
  //         local: 18.2992,
  //         fertilizer: 19.1308,
  //         salve: 24.3871,
  //         cheese: 24.3139,
  //         honey: 24.2893,
  //         bluesalt: 98.4466,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '8',
  //         origin: '青铜岩石山',
  //         level: 3,
  //         normal: 16.4491,
  //         glida: 41.426,
  //         local: 18.0938,
  //         fertilizer: 18.9164,
  //         salve: 28.346,
  //         cheese: 29.0369,
  //         honey: 28.1757,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '9',
  //         origin: '太初之地',
  //         level: 3,
  //         normal: 15.931,
  //         glida: 39.4195,
  //         local: 17.5243,
  //         fertilizer: 18.3211,
  //         salve: 26.365,
  //         cheese: 23.2414,
  //         honey: 26.3383,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '10',
  //         origin: '白雪森林',
  //         level: 3,
  //         normal: 15.2375,
  //         glida: 37.4135,
  //         local: 16.761,
  //         fertilizer: 17.5231,
  //         salve: 23.2943,
  //         cheese: 23.3881,
  //         honey: 23.3177,
  //         bluesalt: 92.3471,
  //         special: 0,
  //         antiquities: 12.7275,
  //       },
  //       {
  //         key: '11',
  //         origin: '埋骨之地',
  //         level: 3,
  //         normal: 21.1536,
  //         glida: 41.0116,
  //         local: 22.115,
  //         fertilizer: 28.1757,
  //         salve: 28.5207,
  //         cheese: 28.5207,
  //         honey: 32.2235,
  //         bluesalt: 0,
  //         special: 45.7717,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '12',
  //         origin: '黄金平原',
  //         level: 4,
  //         normal: 16.3493,
  //         glida: 36.7317,
  //         local: 18.5394,
  //         fertilizer: 19.3822,
  //         salve: 24.9299,
  //         cheese: 24.8795,
  //         honey: 24.8546,
  //         bluesalt: 0,
  //         special: 29.096,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '13',
  //         origin: '地狱沼泽',
  //         level: 4,
  //         normal: 18.2482,
  //         glida: 39.4316,
  //         local: 20.0729,
  //         fertilizer: 20.9855,
  //         salve: 28.7071,
  //         cheese: 28.8227,
  //         honey: 28.8227,
  //         bluesalt: 0,
  //         special: 41.9634,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '14',
  //         origin: '珊瑚海岸',
  //         level: 4,
  //         normal: 18.6815,
  //         glida: 38.0819,
  //         local: 22.2159,
  //         fertilizer: 23.2255,
  //         salve: 24.9046,
  //         cheese: 24.9546,
  //         honey: 24.8298,
  //         bluesalt: 0,
  //         special: 35.5297,
  //         antiquities: 0,
  //       },
  //       {
  //         key: '15',
  //         origin: '西风脊',
  //         level: 4,
  //         normal: 19.7355,
  //         glida: 41.5662,
  //         local: 21.709,
  //         fertilizer: 22.6962,
  //         salve: 32.6332,
  //         cheese: 31.3139,
  //         honey: 32.4695,
  //         bluesalt: 0,
  //         special: 0,
  //         antiquities: 0,
  //       },
  //     ],
  //   },
  //   profitLevel: {
  //     1: {
  //       0: { 0: 0.3, 1: 0.1, 2: -0.1, 3: -0.15, 4: -0.35 },
  //       1: { 0: 0.3, 1: 0.1, 2: -0.1, 3: -0.15, 4: -0.35 },
  //     },
  //     2: {
  //       0: { 0: 0.15, 1: 0.05, 2: -0.07, 3: -0.12, 4: -0.35 },
  //       1: { 0: 0.15, 1: 0.05, 2: -0.07, 3: -0.12, 4: -0.35 },
  //     },
  //     3: {
  //       0: { 0: 0.05, 1: 0.02, 2: -0.05, 3: -0.1, 4: -0.35 },
  //       1: { 0: 0.05, 1: 0.02, 2: -0.05, 3: -0.1, 4: -0.35 },
  //     },
  //     4: {
  //       0: { 0: 0.03, 1: 0.01, 2: -0.04, 3: -0.08, 4: -0.35 },
  //       1: { 0: 0.03, 1: 0.01, 2: -0.04, 3: -0.08, 4: -0.35 },
  //     },
  //   },
  // },
  // server cn sea aau
  // 'GET /api/v1/schedule/1': {
  //   activities: [
  //     {
  //       id: 1,
  //       title: '副本',
  //       titleBackgroundColor: '#f5222d',
  //       inProgressBackgroundColor: '#ffccc7',
  //       icon: 'http://localhost:3001/instance.png',
  //       events: [
  //         {
  //           id: 1,
  //           name: '悉拉玛卡的末日',
  //           icon: 'http://localhost:3001/fall_of_hiram.png',
  //           times: [
  //             {
  //               id: 1,
  //               day: 7,
  //               hours: 2,
  //               minutes: 0,
  //               seconds: 0,
  //               last: 120
  //             },
  //             {
  //               id: 2,
  //               day: 7,
  //               hours: 10,
  //               minutes: 0,
  //               seconds: 0,
  //               last: 360,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           name: '黄金平原战争',
  //           icon: 'http://localhost:3001/gold_plain.png',
  //           times: [
  //             {
  //               id: 3,
  //               day: 7,
  //               hours: 6,
  //               minutes: 30,
  //               seconds: 0,
  //               last: 45,
  //             },
  //             {
  //               id: 4,
  //               day: 7,
  //               hours: 12,
  //               minutes: 30,
  //               seconds: 0,
  //               last: 45,
  //             },
  //             {
  //               id: 5,
  //               day: 7,
  //               hours: 17,
  //               minutes: 30,
  //               seconds: 0,
  //               last: 30,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           name: '红龙副本',
  //           icon: 'http://localhost:3001/dragon_red.png',
  //           times: [
  //             {
  //               id: 6,
  //               day: 1,
  //               hours: 7,
  //               minutes: 15,
  //               seconds: 0,
  //               last: 45,
  //             },
  //             {
  //               id: 7,
  //               day: 1,
  //               hours: 13,
  //               minutes: 15,
  //               seconds: 0,
  //               last: 45,
  //             },
  //             {
  //               id: 8,
  //               day: 0,
  //               hours: 18,
  //               minutes: 0,
  //               seconds: 0,
  //               last: 30,
  //             },
  //             {
  //               id: 9,
  //               day: 3,
  //               hours: 7,
  //               minutes: 15,
  //               seconds: 0,
  //               last: 45,
  //             },
  //             {
  //               id: 10,
  //               day: 3,
  //               hours: 13,
  //               minutes: 15,
  //               seconds: 0,
  //               last: 45,
  //             },
  //             {
  //               id: 11,
  //               day: 2,
  //               hours: 18,
  //               minutes: 0,
  //               seconds: 0,
  //               last: 30,
  //             },
  //             {
  //               id: 12,
  //               day: 5,
  //               hours: 7,
  //               minutes: 15,
  //               seconds: 0,
  //               last: 45,
  //             },
  //             {
  //               id: 13,
  //               day: 5,
  //               hours: 13,
  //               minutes: 15,
  //               seconds: 0,
  //               last: 45,
  //             },
  //             {
  //               id: 14,
  //               day: 4,
  //               hours: 18,
  //               minutes: 0,
  //               seconds: 0,
  //               last: 30,
  //             },
  //             {
  //               id: 15,
  //               day: 0,
  //               hours: 7,
  //               minutes: 15,
  //               seconds: 0,
  //               last: 45,
  //             },
  //             {
  //               id: 16,
  //               day: 0,
  //               hours: 13,
  //               minutes: 15,
  //               seconds: 0,
  //               last: 45,
  //             },
  //             {
  //               id: 17,
  //               day: 6,
  //               hours: 18,
  //               minutes: 0,
  //               seconds: 0,
  //               last: 30,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: '2',
  //       title: '日常',
  //       titleBackgroundColor: '#a0d911',
  //       inProgressBackgroundColor: '#f4ffb8',
  //       icon: 'http://localhost:3001/daily.png',

  //       events: [
  //         {
  //           id: 4,
  //           name: '征兆之痕',
  //           icon: 'http://localhost:3001/crimson_rift.png',
  //           times: [
  //             {
  //               id: 18,
  //               day: 7,
  //               hours: 0,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 19,
  //               day: 7,
  //               hours: 4,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 20,
  //               day: 7,
  //               hours: 8,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 21,
  //               day: 7,
  //               hours: 12,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 22,
  //               day: 7,
  //               hours: 16,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 23,
  //               day: 7,
  //               hours: 20,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //           ],
  //         },
  //         {
  //           id: 5,
  //           name: '噩梦之痕',
  //           icon: 'http://localhost:3001/grimghast_rift.png',
  //           times: [
  //             {
  //               id: 24,
  //               day: 7,
  //               hours: 2,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 25,
  //               day: 7,
  //               hours: 6,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 26,
  //               day: 7,
  //               hours: 10,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 27,
  //               day: 7,
  //               hours: 14,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 28,
  //               day: 7,
  //               hours: 18,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 29,
  //               day: 7,
  //               hours: 22,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: '3',
  //       title: '世界boss',
  //       titleBackgroundColor: '#722ed1',
  //       inProgressBackgroundColor: '#efdbff',
  //       icon: 'http://localhost:3001/boss.png',
  //       events: [
  //         {
  //           id: 6,
  //           name: '美杜莎-梅娜-格兰',
  //           icon: 'http://localhost:3001/boss_monster.png',
  //           times: [
  //             {
  //               id: 30,
  //               day: 7,
  //               hours: 3,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 31,
  //               day: 7,
  //               hours: 7,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 32,
  //               day: 7,
  //               hours: 11,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 33,
  //               day: 7,
  //               hours: 15,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 34,
  //               day: 7,
  //               hours: 19,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 35,
  //               day: 7,
  //               hours: 23,
  //               minutes: 20,
  //               seconds: 0,
  //               last: 10,
  //             },
  //           ],
  //         },
  //         {
  //           id: 7,
  //           name: '德菲娜幽灵船',
  //           icon: 'http://localhost:3001/delphinad_ghost_ships.png',
  //           times: [
  //             {
  //               id: 36,
  //               day: 7,
  //               hours: 13,
  //               minutes: 45,
  //               seconds: 0,
  //               last: 10,
  //             },
  //           ],
  //         },
  //         {
  //           id: 8,
  //           name: '利维坦',
  //           icon: 'http://localhost:3001/leviathan.png',
  //           times: [
  //             {
  //               id: 37,
  //               day: 2,
  //               hours: 13,
  //               minutes: 30,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 38,
  //               day: 4,
  //               hours: 13,
  //               minutes: 30,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 39,
  //               day: 6,
  //               hours: 13,
  //               minutes: 30,
  //               seconds: 0,
  //               last: 10,
  //             },
  //           ],
  //         },
  //         {
  //           id: 9,
  //           name: '德菲娜幽灵船',
  //           icon: 'http://localhost:3001/delphinad_ghost_ships.png',
  //           times: [
  //             {
  //               id: 40,
  //               day: 2,
  //               hours: 13,
  //               minutes: 35,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 41,
  //               day: 4,
  //               hours: 13,
  //               minutes: 35,
  //               seconds: 0,
  //               last: 10,
  //             },
  //             {
  //               id: 42,
  //               day: 6,
  //               hours: 13,
  //               minutes: 35,
  //               seconds: 0,
  //               last: 10,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   position: {
  //     '1': [['2', '1', '3']],
  //     '2': [['1'], ['2', '3']],
  //     '3': [['1'], ['2'], ['3']],
  //   },
  // },
};

