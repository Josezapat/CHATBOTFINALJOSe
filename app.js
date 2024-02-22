const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const flowSecundario = addKeyword(['0', 'avt']).addAnswer(['🛎️Espera un momento por favor...⏳',
'\nUn asistente en línea 👨🏻‍💻 se comunicará contigo',
'\n*cbt* para regresar al menu principal'])


const flowMenu = addKeyword(['menu', 'menú']).addAnswer('¡Ya casi! Ahora solo escribe *cbt*')
const flowGlobo35 = addKeyword(['Globo'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/30',
  'Adicional s/5',
  '*TOTAL a pagar s/64.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

  const flowGlobo34 = addKeyword(['Globo'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/25',
  'Adicional s/5',
  '*TOTAL a pagar s/59.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

  const flowGlobo33 = addKeyword(['Globo'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/20',
  'Adicional s/5',
  '*TOTAL a pagar s/54.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

  const flowGlobo32 = addKeyword(['Globo'])
  .addAnswer([
    'Sería: ',
    'Ramo de Rosas y Girasol s/29.90',
    'Delivery s/15',
    'Adicional s/5',
    '*TOTAL a pagar s/49.90*',
  ])
  .addAnswer([
    'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
    '💐Métodos de pago:',
    'NO ACEPTAMOS EFECTIVO😓',
    'Yape o plin: 937839135',
    'BCP: 19193751258038',
    'BBVA: 0011-0105-0200432968',
    '*Titular: Lidia Gladys Velez C.* 💐',
  ])
  .addAnswer([
    'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
    'Tu nombre:  ',
    'Tu número:  ',
    'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
    'Fecha exacta de entrega:  ',
    'Turno de entrega:',
    'Turno 1(Mañana 8:30am - 12pm)',
    'Turno 2(Tarde 12:30pm - 4:30pm)',
    'Turno 3(Noche 5pm - 6:30pm)',
    'Distrito de entrega:',
    'Dirección exacta escrita:',
    'Dirección exacta por link de google maps:',
    'Nombre de quien recibe:',
    'Número de quien recibe:',
    'Texto para la Dedicatoria:',
  ])
    .addAnswer([
      '🛎️Espera un momento por favor...⏳',
      'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',
  
    ],null,
    null,
    [flowSecundario,flowMenu]
    );
  
    const flowGlobo31 = addKeyword(['Globo'])
    .addAnswer([
      'Ok entonces sería: ',
      'Ramo de Rosas y Girasol s/29.90',
      'Delivery s/10',
      'Adicional s/5',
      '*TOTAL a pagar s/44.90*',
    ])
    .addAnswer([
      'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
      '💐Métodos de pago:',
      'NO ACEPTAMOS EFECTIVO😓',
      'Yape o plin: 937839135',
      'BCP: 19193751258038',
      'BBVA: 0011-0105-0200432968',
      '*Titular: Lidia Gladys Velez C.* 💐',
    ])
    .addAnswer([
      'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
      'Tu nombre:  ',
      'Tu número:  ',
      'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
      'Fecha exacta de entrega:  ',
      'Turno de entrega:',
      'Turno 1(Mañana 8:30am - 12pm)',
      'Turno 2(Tarde 12:30pm - 4:30pm)',
      'Turno 3(Noche 5pm - 6:30pm)',
      'Distrito de entrega:',
      'Dirección exacta escrita:',
      'Dirección exacta por link de google maps:',
      'Nombre de quien recibe:',
      'Número de quien recibe:',
      'Texto para la Dedicatoria:',
    ])
      .addAnswer([
        '🛎️Espera un momento por favor...⏳',
        'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',
    
      ],null,
      null,
      [flowSecundario,flowMenu]
      );
    
      const flowGlobo25 = addKeyword(['Globo'])
    .addAnswer([
      'Ok entonces sería: ',
      'Ramo de Girasoles s/38.90',
  'Delivery s/30',
  'Adicional s/5',
  '*TOTAL a pagar s/73.90*',
    ])
    .addAnswer([
      'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
      '💐Métodos de pago:',
      'NO ACEPTAMOS EFECTIVO😓',
      'Yape o plin: 937839135',
      'BCP: 19193751258038',
      'BBVA: 0011-0105-0200432968',
      '*Titular: Lidia Gladys Velez C.* 💐',
    ])
    .addAnswer([
      'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
      'Tu nombre:  ',
      'Tu número:  ',
      'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
      'Fecha exacta de entrega:  ',
      'Turno de entrega:',
      'Turno 1(Mañana 8:30am - 12pm)',
      'Turno 2(Tarde 12:30pm - 4:30pm)',
      'Turno 3(Noche 5pm - 6:30pm)',
      'Distrito de entrega:',
      'Dirección exacta escrita:',
      'Dirección exacta por link de google maps:',
      'Nombre de quien recibe:',
      'Número de quien recibe:',
      'Texto para la Dedicatoria:',
    ])
      .addAnswer([
        '🛎️Espera un momento por favor...⏳',
        'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',
    
      ],null,
      null,
      [flowSecundario,flowMenu]
      );

      const flowGlobo24 = addKeyword(['Globo'])
  .addAnswer([
    'Ok entonces Sería: ',
    'Ramo de Girasoles s/38.90',
  'Delivery s/25',
  'Adicional s/5',
  '*TOTAL a pagar s/68.90*',
  ])
  .addAnswer([
    'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
    '💐Métodos de pago:',
    'NO ACEPTAMOS EFECTIVO😓',
    'Yape o plin: 937839135',
    'BCP: 19193751258038',
    'BBVA: 0011-0105-0200432968',
    '*Titular: Lidia Gladys Velez C.* 💐',
  ])
  .addAnswer([
    'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
    'Tu nombre:  ',
    'Tu número:  ',
    'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
    'Fecha exacta de entrega:  ',
    'Turno de entrega:',
    'Turno 1(Mañana 8:30am - 12pm)',
    'Turno 2(Tarde 12:30pm - 4:30pm)',
    'Turno 3(Noche 5pm - 6:30pm)',
    'Distrito de entrega:',
    'Dirección exacta escrita:',
    'Dirección exacta por link de google maps:',
    'Nombre de quien recibe:',
    'Número de quien recibe:',
    'Texto para la Dedicatoria:',
  ])
    .addAnswer([
      '🛎️Espera un momento por favor...⏳',
      'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',
  
    ],null,
    null,
    [flowSecundario,flowMenu]
    );

    const flowGlobo23 = addKeyword(['Globo'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
  'Delivery s/20',
  'Adicional s/5',
  '*TOTAL a pagar s/63.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

  const flowGlobo22 = addKeyword(['Globo'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
  'Delivery s/15',
  'Adicional s/5',
  '*TOTAL a pagar s/58.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

  const flowGlobo21 = addKeyword(['Globo'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
    'Delivery s/10',
    'Adicional s/5',
    '*TOTAL a pagar s/53.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );
  const flowGlobo15 = addKeyword(['Globo'])
.addAnswer([
  'Ok Entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/30',
  'Adicional s/5',
  '*TOTAL a pagar s/84.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

  const flowGlobo14 = addKeyword(['Globo'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/25',
  'Adicional s/5',
  '*TOTAL a pagar s/79.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );
  const flowGlobo13 = addKeyword(['Globo'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/20',
  'Adicional s/5',
  '*TOTAL a pagar s/74.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

  const flowGlobo12 = addKeyword(['Globo'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/15',
  'Adicional s/5',
  '*TOTAL a pagar s/69.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowGlobo11 = addKeyword(['Globo'])
.addAnswer([
  'Ok entonces sería: ',
    'BOX DE ROSAS s/49.90',
    'Delivery s/10',
    'Adicional s/5',
    '*TOTAL a pagar s/64.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );


const flowAdicional35 = addKeyword(['peluche', 'tiara','collar','anillo'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/30',
  'Adicional s/15',
  '*TOTAL a pagar s/74.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowAdicional34 = addKeyword(['peluche', 'tiara','collar','anillo'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/25',
  'Adicional s/15',
  '*TOTAL a pagar s/69.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowAdicional33 = addKeyword(['peluche', 'tiara','collar','anillo'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/20',
  'Adicional s/15',
  '*TOTAL a pagar s/64.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

  const flowAdicional32 = addKeyword(['peluche', 'tiara','collar','anillo'])
  .addAnswer([
    'Sería: ',
    'Ramo de Rosas y Girasol s/29.90',
    'Delivery s/15',
    'Adicional s/15',
    '*TOTAL a pagar s/59.90*',
  ])
  .addAnswer([
    'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
    '💐Métodos de pago:',
    'NO ACEPTAMOS EFECTIVO😓',
    'Yape o plin: 937839135',
    'BCP: 19193751258038',
    'BBVA: 0011-0105-0200432968',
    '*Titular: Lidia Gladys Velez C.* 💐',
  ])
  .addAnswer([
    'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
    'Tu nombre:  ',
    'Tu número:  ',
    'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
    'Fecha exacta de entrega:  ',
    'Turno de entrega:',
    'Turno 1(Mañana 8:30am - 12pm)',
    'Turno 2(Tarde 12:30pm - 4:30pm)',
    'Turno 3(Noche 5pm - 6:30pm)',
    'Distrito de entrega:',
    'Dirección exacta escrita:',
    'Dirección exacta por link de google maps:',
    'Nombre de quien recibe:',
    'Número de quien recibe:',
    'Texto para la Dedicatoria:',
  ])
    .addAnswer([
      '🛎️Espera un momento por favor...⏳',
      'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',
  
    ],null,
    null,
    [flowSecundario,flowMenu]
    );
  
    const flowAdicional31 = addKeyword(['peluche', 'tiara','collar','anillo'])
    .addAnswer([
      'Ok entonces sería: ',
      'Ramo de Rosas y Girasol s/29.90',
      'Delivery s/10',
      'Adicional s/15',
      '*TOTAL a pagar s/54.90*',
    ])
    .addAnswer([
      'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
      '💐Métodos de pago:',
      'NO ACEPTAMOS EFECTIVO😓',
      'Yape o plin: 937839135',
      'BCP: 19193751258038',
      'BBVA: 0011-0105-0200432968',
      '*Titular: Lidia Gladys Velez C.* 💐',
    ])
    .addAnswer([
      'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
      'Tu nombre:  ',
      'Tu número:  ',
      'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
      'Fecha exacta de entrega:  ',
      'Turno de entrega:',
      'Turno 1(Mañana 8:30am - 12pm)',
      'Turno 2(Tarde 12:30pm - 4:30pm)',
      'Turno 3(Noche 5pm - 6:30pm)',
      'Distrito de entrega:',
      'Dirección exacta escrita:',
      'Dirección exacta por link de google maps:',
      'Nombre de quien recibe:',
      'Número de quien recibe:',
      'Texto para la Dedicatoria:',
    ])
      .addAnswer([
        '🛎️Espera un momento por favor...⏳',
        'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',
    
      ],null,
      null,
      [flowSecundario,flowMenu]
      );
    

    const flowAdicional25 = addKeyword(['peluche', 'tiara','collar','anillo'])
    .addAnswer([
      'Ok entonces sería: ',
      'Ramo de Girasoles s/38.90',
  'Delivery s/30',
  'Adicional s/15',
  '*TOTAL a pagar s/83.90*',
    ])
    .addAnswer([
      'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
      '💐Métodos de pago:',
      'NO ACEPTAMOS EFECTIVO😓',
      'Yape o plin: 937839135',
      'BCP: 19193751258038',
      'BBVA: 0011-0105-0200432968',
      '*Titular: Lidia Gladys Velez C.* 💐',
    ])
    .addAnswer([
      'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
      'Tu nombre:  ',
      'Tu número:  ',
      'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
      'Fecha exacta de entrega:  ',
      'Turno de entrega:',
      'Turno 1(Mañana 8:30am - 12pm)',
      'Turno 2(Tarde 12:30pm - 4:30pm)',
      'Turno 3(Noche 5pm - 6:30pm)',
      'Distrito de entrega:',
      'Dirección exacta escrita:',
      'Dirección exacta por link de google maps:',
      'Nombre de quien recibe:',
      'Número de quien recibe:',
      'Texto para la Dedicatoria:',
    ])
      .addAnswer([
        '🛎️Espera un momento por favor...⏳',
        'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',
    
      ],null,
      null,
      [flowSecundario,flowMenu]
      );

  const flowAdicional24 = addKeyword(['peluche', 'tiara','collar','anillo'])
  .addAnswer([
    'Ok entonces Sería: ',
    'Ramo de Girasoles s/38.90',
  'Delivery s/25',
  'Adicional s/15',
  '*TOTAL a pagar s/78.90*',
  ])
  .addAnswer([
    'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
    '💐Métodos de pago:',
    'NO ACEPTAMOS EFECTIVO😓',
    'Yape o plin: 937839135',
    'BCP: 19193751258038',
    'BBVA: 0011-0105-0200432968',
    '*Titular: Lidia Gladys Velez C.* 💐',
  ])
  .addAnswer([
    'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
    'Tu nombre:  ',
    'Tu número:  ',
    'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
    'Fecha exacta de entrega:  ',
    'Turno de entrega:',
    'Turno 1(Mañana 8:30am - 12pm)',
    'Turno 2(Tarde 12:30pm - 4:30pm)',
    'Turno 3(Noche 5pm - 6:30pm)',
    'Distrito de entrega:',
    'Dirección exacta escrita:',
    'Dirección exacta por link de google maps:',
    'Nombre de quien recibe:',
    'Número de quien recibe:',
    'Texto para la Dedicatoria:',
  ])
    .addAnswer([
      '🛎️Espera un momento por favor...⏳',
      'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',
  
    ],null,
    null,
    [flowSecundario,flowMenu]
    );

const flowAdicional23 = addKeyword(['peluche', 'tiara','collar','anillo'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
  'Delivery s/20',
  'Adicional s/15',
  '*TOTAL a pagar s/73.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowAdicional22 = addKeyword(['peluche', 'tiara','collar','anillo'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
  'Delivery s/15',
  'Adicional s/15',
  '*TOTAL a pagar s/68.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowAdicional21 = addKeyword(['peluche', 'tiara','collar','anillo'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
    'Delivery s/10',
    'Adicional s/15',
    '*TOTAL a pagar s/63.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );
const flowAdicional15 = addKeyword(['peluche', 'tiara','collar','anillo'])
.addAnswer([
  'Ok Entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/30',
  'Adicional s/15',
  '*TOTAL a pagar s/94.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowAdicional14 = addKeyword(['peluche', 'tiara','collar','anillo'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/25',
  'Adicional s/15',
  '*TOTAL a pagar s/89.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );
const flowAdicional13 = addKeyword(['peluche', 'tiara','collar','anillo'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/20',
  'Adicional s/15',
  '*TOTAL a pagar s/84.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowAdicional12 = addKeyword(['peluche', 'tiara','collar','anillo'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/15',
  'Adicional s/15',
  '*TOTAL a pagar s/79.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowAdicional11 = addKeyword(['peluche', 'tiara','collar','anillo'])
.addAnswer([
  'Ok entonces sería: ',
    'BOX DE ROSAS s/49.90',
    'Delivery s/10',
    'Adicional s/15',
    '*TOTAL a pagar s/74.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowNoAdicional35 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/30',
  '*TOTAL a pagar s/59.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowNoAdicional34 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/25',
  '*TOTAL a pagar s/54.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowNoAdicional33 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/20',
  '*TOTAL a pagar s/49.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

  const flowNoAdicional32 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
  .addAnswer([
    'Sería: ',
    'Ramo de Rosas y Girasol s/29.90',
    'Delivery s/15',
    '*TOTAL a pagar s/44.90*',
  ])
  .addAnswer([
    'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
    '💐Métodos de pago:',
    'NO ACEPTAMOS EFECTIVO😓',
    'Yape o plin: 937839135',
    'BCP: 19193751258038',
    'BBVA: 0011-0105-0200432968',
    '*Titular: Lidia Gladys Velez C.* 💐',
  ])
  .addAnswer([
    'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
    'Tu nombre:  ',
    'Tu número:  ',
    'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
    'Fecha exacta de entrega:  ',
    'Turno de entrega:',
    'Turno 1(Mañana 8:30am - 12pm)',
    'Turno 2(Tarde 12:30pm - 4:30pm)',
    'Turno 3(Noche 5pm - 6:30pm)',
    'Distrito de entrega:',
    'Dirección exacta escrita:',
    'Dirección exacta por link de google maps:',
    'Nombre de quien recibe:',
    'Número de quien recibe:',
    'Texto para la Dedicatoria:',
  ])
    .addAnswer([
      '🛎️Espera un momento por favor...⏳',
      'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',
  
    ],null,
    null,
    [flowSecundario,flowMenu]
    );
  
    const flowNoAdicional31 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
    .addAnswer([
      'Ok entonces sería: ',
      'Ramo de Rosas y Girasol s/29.90',
      'Delivery s/10',
      '*TOTAL a pagar s/39.90*',
    ])
    .addAnswer([
      'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
      '💐Métodos de pago:',
      'NO ACEPTAMOS EFECTIVO😓',
      'Yape o plin: 937839135',
      'BCP: 19193751258038',
      'BBVA: 0011-0105-0200432968',
      '*Titular: Lidia Gladys Velez C.* 💐',
    ])
    .addAnswer([
      'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
      'Tu nombre:  ',
      'Tu número:  ',
      'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
      'Fecha exacta de entrega:  ',
      'Turno de entrega:',
      'Turno 1(Mañana 8:30am - 12pm)',
      'Turno 2(Tarde 12:30pm - 4:30pm)',
      'Turno 3(Noche 5pm - 6:30pm)',
      'Distrito de entrega:',
      'Dirección exacta escrita:',
      'Dirección exacta por link de google maps:',
      'Nombre de quien recibe:',
      'Número de quien recibe:',
      'Texto para la Dedicatoria:',
    ])
      .addAnswer([
        '🛎️Espera un momento por favor...⏳',
        'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',
    
      ],null,
      null,
      [flowSecundario,flowMenu]
      );
    

    const flowNoAdicional25 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
    .addAnswer([
      'Ok entonces sería: ',
      'Ramo de Girasoles s/38.90',
  'Delivery s/30',
  '*TOTAL a pagar s/68.90*',
    ])
    .addAnswer([
      'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
      '💐Métodos de pago:',
      'NO ACEPTAMOS EFECTIVO😓',
      'Yape o plin: 937839135',
      'BCP: 19193751258038',
      'BBVA: 0011-0105-0200432968',
      '*Titular: Lidia Gladys Velez C.* 💐',
    ])
    .addAnswer([
      'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
      'Tu nombre:  ',
      'Tu número:  ',
      'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
      'Fecha exacta de entrega:  ',
      'Turno de entrega:',
      'Turno 1(Mañana 8:30am - 12pm)',
      'Turno 2(Tarde 12:30pm - 4:30pm)',
      'Turno 3(Noche 5pm - 6:30pm)',
      'Distrito de entrega:',
      'Dirección exacta escrita:',
      'Dirección exacta por link de google maps:',
      'Nombre de quien recibe:',
      'Número de quien recibe:',
      'Texto para la Dedicatoria:',
    ])
      .addAnswer([
        '🛎️Espera un momento por favor...⏳',
        'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',
    
      ],null,
      null,
      [flowSecundario,flowMenu]
      );

  const flowNoAdicional24 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
  .addAnswer([
    'Ok entonces Sería: ',
    'Ramo de Girasoles s/38.90',
  'Delivery s/25',
  '*TOTAL a pagar s/63.90*',
  ])
  .addAnswer([
    'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
    '💐Métodos de pago:',
    'NO ACEPTAMOS EFECTIVO😓',
    'Yape o plin: 937839135',
    'BCP: 19193751258038',
    'BBVA: 0011-0105-0200432968',
    '*Titular: Lidia Gladys Velez C.* 💐',
  ])
  .addAnswer([
    'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
    'Tu nombre:  ',
    'Tu número:  ',
    'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
    'Fecha exacta de entrega:  ',
    'Turno de entrega:',
    'Turno 1(Mañana 8:30am - 12pm)',
    'Turno 2(Tarde 12:30pm - 4:30pm)',
    'Turno 3(Noche 5pm - 6:30pm)',
    'Distrito de entrega:',
    'Dirección exacta escrita:',
    'Dirección exacta por link de google maps:',
    'Nombre de quien recibe:',
    'Número de quien recibe:',
    'Texto para la Dedicatoria:',
  ])
    .addAnswer([
      '🛎️Espera un momento por favor...⏳',
      'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',
  
    ],null,
    null,
    [flowSecundario,flowMenu]
    );

const flowNoAdicional23 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
  'Delivery s/20',
  '*TOTAL a pagar s/58.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowNoAdicional22 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
  'Delivery s/15',
  '*TOTAL a pagar s/53.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowNoAdicional21 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
    'Delivery s/10',
    '*TOTAL a pagar s/48.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );
const flowNoAdicional15 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
.addAnswer([
  'Ok Entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/30',
  '*TOTAL a pagar s/79.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowNoAdicional14 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/25',
  '*TOTAL a pagar s/74.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );
const flowNoAdicional13 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/20',
  '*TOTAL a pagar s/69.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowNoAdicional12 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/15',
  '*TOTAL a pagar s/64.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowNoAdicional11 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
.addAnswer([
  'Ok entonces sería: ',
    'BOX DE ROSAS s/49.90',
    'Delivery s/10',
    '*TOTAL a pagar s/59.90*',
])
.addAnswer([
  'Para agendar el pedido, se deberá realizar el pago de confirmación del 50%, el pago restante lo realizara después de haber sido entregado el producto. ',
  '💐Métodos de pago:',
  'NO ACEPTAMOS EFECTIVO😓',
  'Yape o plin: 937839135',
  'BCP: 19193751258038',
  'BBVA: 0011-0105-0200432968',
  '*Titular: Lidia Gladys Velez C.* 💐',
])
.addAnswer([
  'Bríndenos los datos de entrega para terminar de agendar su pedido:  ',
  'Tu nombre:  ',
  'Tu número:  ',
  'Especifica el ramo que deseas adquirir (con todo lo que esté llevando): ',
  'Fecha exacta de entrega:  ',
  'Turno de entrega:',
  'Turno 1(Mañana 8:30am - 12pm)',
  'Turno 2(Tarde 12:30pm - 4:30pm)',
  'Turno 3(Noche 5pm - 6:30pm)',
  'Distrito de entrega:',
  'Dirección exacta escrita:',
  'Dirección exacta por link de google maps:',
  'Nombre de quien recibe:',
  'Número de quien recibe:',
  'Texto para la Dedicatoria:',
])
  .addAnswer([
    '🛎️Espera un momento por favor...⏳',
    'Un asistente en línea 👨🏻‍💻 se comunicará contigo para finalizar tu compra',

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

const flowDistrito35 = addKeyword(['Ventanilla', 'Villa María del Triunfo','Villa Maria del Triunfo','VMT','V.M.T',  'Villa el Salvador','VES','V.E.S'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/30',
  '*TOTAL a pagar s/59.90*',
])
.addAnswer('¿Deseas agregar algún adicional?')
  .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Adicionales.jpg?alt=media&token=c1663bca-f1d5-4caf-b591-40ff85fe115c'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
    '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional35, flowAdicional35, flowGlobo35]
  );

const flowDistrito34 = addKeyword(['Carabayllo','Puente Piedra', 'San Juan de Miraflores','SJM','S.J.M','Chorrillos'])

.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/25',
  '*TOTAL a pagar s/54.90*',
])
.addAnswer('¿Deseas agregar algún adicional?')
  .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Adicionales.jpg?alt=media&token=c1663bca-f1d5-4caf-b591-40ff85fe115c'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional34, flowAdicional34, flowGlobo34]
  );

const flowDistrito33 = addKeyword(['Santiago de Surco','Surco','Barranco'])

.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/20',
  '*TOTAL a pagar s/49.90*',
])
.addAnswer('¿Deseas agregar algún adicional?')
  .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Adicionales.jpg?alt=media&token=c1663bca-f1d5-4caf-b591-40ff85fe115c'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional33, flowAdicional33, flowGlobo33]
  );



const flowDistrito32 = addKeyword(['Santa Anita', 'Comas', 'Miraflores' ,'Callao' ,'Ate', 'La Molina', 'San Borja', 'Surquillo' ,'San Juan de Lurigancho','SJL','S.J.L',  'San Luis', 'Magdalena', 'San Miguel','SM' ,'San Isidro'])

.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/15',
  '*TOTAL a pagar s/44.90*',
])
.addAnswer('¿Deseas agregar algún adicional?')
  .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Adicionales.jpg?alt=media&token=c1663bca-f1d5-4caf-b591-40ff85fe115c'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
    '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional32, flowAdicional32, flowGlobo32]
  );

  const flowDistrito31 = addKeyword(['SMP','S.M.P','San Martin de porres','San Martín de Porres',  'Los Olivos', 'Independencia',  'Cercado de Lima','Centro de Lima' , 'La Victoria' , 'Breña' , 'El Agustino' ,'Rimac','Rímac',  'Pueblo Libre','PL', 'Jesus Maria','J.M','JM',' Jesús María','Jesús Maria',' Jesus María', 'Lince'])

  .addAnswer([
    'Sería: ',
    'Ramo de Rosas y Girasol s/29.90',
    'Delivery s/10',
    '*TOTAL a pagar s/39.90*',
  ])
  .addAnswer('¿Deseas agregar algún adicional?')
  .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Adicionales.jpg?alt=media&token=c1663bca-f1d5-4caf-b591-40ff85fe115c'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
    .addAnswer([
      '\n*menu* para regresar al menu principal',
      '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
  
    ],null,
    null,
    [flowSecundario,flowMenu, flowNoAdicional31, flowAdicional31, flowGlobo31]
    );
const flowDistrito25 = addKeyword(['Ventanilla', 'Villa María del Triunfo','Villa Maria del Triunfo','VMT','V.M.T',  'Villa el Salvador','VES','V.E.S'])
.addAnswer([
  'Sería: ',
  'Ramo de Girasoles s/38.90',
  'Delivery s/30',
  '*TOTAL a pagar s/68.90*',
])
.addAnswer('¿Deseas agregar algún adicional?')
  .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Adicionales.jpg?alt=media&token=c1663bca-f1d5-4caf-b591-40ff85fe115c'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
    '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional25, flowAdicional25, flowGlobo25]
  );

const flowDistrito24 = addKeyword(['Carabayllo','Puente Piedra', 'San Juan de Miraflores','SJM','S.J.M','Chorrillos'])

.addAnswer([
  'Sería: ',
  'Ramo de Girasoles s/38.90',
  'Delivery s/25',
  '*TOTAL a pagar s/63.90*',
])
.addAnswer('¿Deseas agregar algún adicional?')
  .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Adicionales.jpg?alt=media&token=c1663bca-f1d5-4caf-b591-40ff85fe115c'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional24, flowAdicional24, flowGlobo24]
  );

const flowDistrito23 = addKeyword(['Santiago de Surco','Surco','Barranco'])

.addAnswer([
  'Sería: ',
  'Ramo de Girasoles s/38.90',
  'Delivery s/20',
  '*TOTAL a pagar s/58.90*',
])
.addAnswer('¿Deseas agregar algún adicional?')
  .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Adicionales.jpg?alt=media&token=c1663bca-f1d5-4caf-b591-40ff85fe115c'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional23, flowAdicional23, flowGlobo23]
  );



const flowDistrito22 = addKeyword(['Santa Anita', 'Comas', 'Miraflores' ,'Callao' ,'Ate', 'La Molina', 'San Borja', 'Surquillo' ,'San Juan de Lurigancho','SJL','S.J.L',  'San Luis', 'Magdalena', 'San Miguel','SM' ,'San Isidro'])

.addAnswer([
  'Sería: ',
  'Ramo de Girasoles s/38.90',
  'Delivery s/15',
  '*TOTAL a pagar s/53.90*',
])
.addAnswer('¿Deseas agregar algún adicional?')
  .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Adicionales.jpg?alt=media&token=c1663bca-f1d5-4caf-b591-40ff85fe115c'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional22, flowAdicional22, flowGlobo22]
  );

  const flowDistrito21 = addKeyword(['SMP','S.M.P','San Martin de porres','San Martín de Porres',  'Los Olivos', 'Independencia',  'Cercado de Lima','Centro de Lima' , 'La Victoria' , 'Breña' , 'El Agustino' ,'Rimac','Rímac',  'Pueblo Libre','PL', 'Jesus Maria','J.M','JM',' Jesús María','Jesús Maria',' Jesus María', 'Lince' ])

  .addAnswer([
    'Sería: ',
    'Ramo de Girasoles s/38.90',
    'Delivery s/10',
    '*TOTAL a pagar s/48.90*',
  ])
  .addAnswer('¿Deseas agregar algún adicional?')
  .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Adicionales.jpg?alt=media&token=c1663bca-f1d5-4caf-b591-40ff85fe115c'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
    .addAnswer([
      '\n*menu* para regresar al menu principal',
      '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
  
    ],null,
    null,
    [flowSecundario,flowMenu, flowNoAdicional21, flowAdicional21, flowGlobo21]
    );
const flowDistrito15 = addKeyword(['Ventanilla', 'Villa María del Triunfo','Villa Maria del Triunfo','VMT','V.M.T',  'Villa el Salvador','VES','V.E.S'])
.addAnswer([
  'Sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/30',
  '*TOTAL a pagar s/79.90*',
])
.addAnswer('¿Deseas agregar algún adicional?')
  .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Adicionales.jpg?alt=media&token=c1663bca-f1d5-4caf-b591-40ff85fe115c'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional15, flowAdicional15, flowGlobo15]
  );

const flowDistrito14 = addKeyword(['Carabayllo','Puente Piedra', 'San Juan de Miraflores','SJM','S.J.M','Chorrillos'])

.addAnswer([
  'Sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/25',
  '*TOTAL a pagar s/74.90*',
])
.addAnswer('¿Deseas agregar algún adicional?')
  .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Adicionales.jpg?alt=media&token=c1663bca-f1d5-4caf-b591-40ff85fe115c'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional14, flowAdicional14, flowGlobo14]
  );

const flowDistrito13 = addKeyword(['Santiago de Surco','Surco','Barranco'])

.addAnswer([
  'Sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/20',
  '*TOTAL a pagar s/69.90*',
])
.addAnswer('¿Deseas agregar algún adicional?')
  .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Adicionales.jpg?alt=media&token=c1663bca-f1d5-4caf-b591-40ff85fe115c'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional13, flowAdicional13, flowGlobo13]
  );



const flowDistrito12 = addKeyword(['Santa Anita', 'Comas', 'Miraflores' ,'Callao' ,'Ate', 'La Molina', 'San Borja', 'Surquillo' ,'San Juan de Lurigancho','SJL','S.J.L',  'San Luis', 'Magdalena', 'San Miguel','SM' ,'San Isidro'])

.addAnswer([
  'Sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/15',
  '*TOTAL a pagar s/64.90*',
])
.addAnswer('¿Deseas agregar algún adicional?')
  .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Adicionales.jpg?alt=media&token=c1663bca-f1d5-4caf-b591-40ff85fe115c'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional12, flowAdicional12, flowGlobo12]
  );

  const flowDistrito11 = addKeyword(['SMP','S.M.P','San Martin de porres','San Martín de Porres',  'Los Olivos', 'Independencia',  'Cercado de Lima','Centro de Lima' , 'La Victoria' , 'Breña' , 'El Agustino' ,'Rimac','Rímac',  'Pueblo Libre','PL', 'Jesus Maria','J.M','JM',' Jesús María','Jesús Maria',' Jesus María', 'Lince' ])

  .addAnswer([
    'Sería: ',
    'BOX DE ROSAS s/49.90',
    'Delivery s/10',
    '*TOTAL a pagar s/59.90*',
  ])
  .addAnswer('¿Deseas agregar algún adicional?')
  .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Adicionales.jpg?alt=media&token=c1663bca-f1d5-4caf-b591-40ff85fe115c'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  
    .addAnswer([
      '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
  
    ],null,
    null,
    [flowSecundario,flowMenu, flowNoAdicional11, flowAdicional11, flowGlobo11]
    );





const flowPromo3= addKeyword(['3', 'Promoción 3', 'promoción 3', 'promocion 3', 'Promocion 3','Ramo de Rosas y Girasol s/29.90', 'promo 3', 'Rosas y Girasol'])
.addAnswer('¿Para donde sería el delivery?')
.addAnswer('*Escribe el Distrito de la dirección de envío*',{
  media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Captura%20de%20pantalla%202024-02-19%20143411.png?alt=media&token=b76e2947-f41d-4679-8266-c58043bf8b56'
})

.addAnswer(
    [
        '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'


    ],
    null,
    null,
    [flowSecundario,flowMenu, flowDistrito33, flowDistrito32, flowDistrito31, flowDistrito34, flowDistrito35])


const flowPromo2 = addKeyword(['2', 'Promoción 2', 'promoción 2', 'promocion 2', 'Promocion 2','Ramo de girasoles', 'promo 2', 'girasoles'])
.addAnswer('¿Para donde sería el delivery?')
.addAnswer('*Escribe el Distrito de la dirección de envío*',{
  media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Captura%20de%20pantalla%202024-02-19%20143411.png?alt=media&token=b76e2947-f41d-4679-8266-c58043bf8b56'
})

.addAnswer(
    [
        '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

    ],
    null,
    null,
    [flowSecundario,flowMenu, flowDistrito23, flowDistrito22, flowDistrito21, flowDistrito24, flowDistrito25])
    
const flowPromo1 = addKeyword(['1', 'Promoción 1', 'promoción 1', 'promocion 1', 'Promocion 1', 'Box Vip', 'promo 1', 'box de rosas','rosas'])
.addAnswer('¿Para donde sería el delivery?')
.addAnswer('*Escribe el Distrito de la dirección de envío*',{
  media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Captura%20de%20pantalla%202024-02-19%20143411.png?alt=media&token=b76e2947-f41d-4679-8266-c58043bf8b56'
})

.addAnswer(
    [

        '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

    ],
    null,
    null,
    [flowSecundario,flowMenu, flowDistrito13, flowDistrito12, flowDistrito11, flowDistrito14, flowDistrito15 ]
)








const flowPrincipal = addKeyword(['cbt'
])
  .addAnswer('Hola qué tal, gracias por contactar a Lidia Florería 💐')
  .addAnswer('Tenemos estos 3 productos con el 60% de descuento solo por tiempo limitado, elige tu favorito!!💐')
  .addAnswer('*Promo 1*',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/LIQUIDACION%201.png?alt=media&token=c8433d48-bc36-4566-b0ae-bca82a4f99ef'
  })
  .addAnswer('*Promo 2*',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/LIQUIDACION%202.png?alt=media&token=5495ae4d-281a-485b-a472-42700e01eca9'
  })
  .addAnswer('*Promo 3*',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Rosas%20y%20Girasol.jpg?alt=media&token=e2109070-b692-4c00-85e3-9cc36a29c883'
  })
  .addAnswer(
    [
      '¿Cuál promoción te gustaría comprar? ',
      
      '\n*0* Si quieres comunicarte con un asistente en línea 👨🏻‍💻',
      
      '*(Escribe alguna opción del 0 al 3)*',

      
    ],
    null,
      null,
      [flowSecundario,  flowMenu, flowPromo1, flowPromo2, flowPromo3]
    
  )
  .addAnswer('Mira nuestro catálogo de productos:',{
    media:'file:///C:/Users/Jose/Desktop/Clientes%20DeveloperWebAI/Lidia%20Florer%C3%ADa/CAT%C3%81LOGO%20LIDIA%20-%20FLORERIA%20Y%20REGALOS%20(18).pdf'
  })
  
  



const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)


    createBot( {
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
    

    QRPortalWeb({port:20203})
}

main()