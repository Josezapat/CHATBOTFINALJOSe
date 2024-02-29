const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const flowSecundario = addKeyword(['0', 'avt']).addAnswer(['🛎️Espera un momento por favor...⏳',
'\nUn asistente en línea 👨🏻‍💻 se comunicará contigo',
'\n*cbt* para regresar al menu principal'])


const flowMenu = addKeyword(['menu', 'menú']).addAnswer('¡Ya casi! Ahora solo escribe *cbt*')

const flowGlobo45 = addKeyword(['Globo','Kises','Kisses'])
.addAnswer([
  'Sería: ',
  'Ramo de Astromelias s/34.90',
  'Delivery s/30',
  'Adicional s/8',
  '*TOTAL a pagar s/72.90*',
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

  const flowGlobo44 = addKeyword(['Globo','Kises','Kisses'])
.addAnswer([
  'Sería: ',
  'Ramo de Astromelias s/34.90',
  'Delivery s/25',
  'Adicional s/8',
  '*TOTAL a pagar s/67.90*',
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

  const flowGlobo43 = addKeyword(['Globo','Kises','Kisses'])
.addAnswer([
  'Sería: ',
  'Ramo de Astromelias s/34.90',
  'Delivery s/20',
  'Adicional s/8',
  '*TOTAL a pagar s/62.90*',
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

  const flowGlobo42 = addKeyword(['Globo','Kises','Kisses'])
  .addAnswer([
    'Sería: ',
    'Ramo de Astromelias s/34.90',
    'Delivery s/15',
    'Adicional s/8',
    '*TOTAL a pagar s/57.90*',
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
  
    const flowGlobo41 = addKeyword(['Globo','Kises','Kisses'])
    .addAnswer([
      'Ok entonces sería: ',
      'Ramo de Astromelias s/34.90',
      'Delivery s/10',
      'Adicional s/8',
      '*TOTAL a pagar s/52.90*',
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

const flowGlobo35 = addKeyword(['Globo','Kises','Kisses'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/30',
  'Adicional s/8',
  '*TOTAL a pagar s/67.90*',
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

  const flowGlobo34 = addKeyword(['Globo','Kises','Kisses'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/25',
  'Adicional s/8',
  '*TOTAL a pagar s/62.90*',
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

  const flowGlobo33 = addKeyword(['Globo','Kises','Kisses'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/20',
  'Adicional s/8',
  '*TOTAL a pagar s/57.90*',
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

  const flowGlobo32 = addKeyword(['Globo','Kises','Kisses'])
  .addAnswer([
    'Sería: ',
    'Ramo de Rosas y Girasol s/29.90',
    'Delivery s/15',
    'Adicional s/8',
    '*TOTAL a pagar s/52.90*',
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
  
    const flowGlobo31 = addKeyword(['Globo','Kises','Kisses'])
    .addAnswer([
      'Ok entonces sería: ',
      'Ramo de Rosas y Girasol s/29.90',
      'Delivery s/10',
      'Adicional s/8',
      '*TOTAL a pagar s/47.90*',
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
    
      const flowGlobo25 = addKeyword(['Globo','Kises','Kisses'])
    .addAnswer([
      'Ok entonces sería: ',
      'Ramo de Girasoles s/38.90',
  'Delivery s/30',
  'Adicional s/8',
  '*TOTAL a pagar s/76.90*',
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

      const flowGlobo24 = addKeyword(['Globo','Kises','Kisses'])
  .addAnswer([
    'Ok entonces Sería: ',
    'Ramo de Girasoles s/38.90',
  'Delivery s/25',
  'Adicional s/8',
  '*TOTAL a pagar s/71.90*',
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

    const flowGlobo23 = addKeyword(['Globo','Kises','Kisses'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
  'Delivery s/20',
  'Adicional s/8',
  '*TOTAL a pagar s/66.90*',
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

  const flowGlobo22 = addKeyword(['Globo','Kises','Kisses'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
  'Delivery s/15',
  'Adicional s/8',
  '*TOTAL a pagar s/61.90*',
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

  const flowGlobo21 = addKeyword(['Globo','Kises','Kisses'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
    'Delivery s/10',
    'Adicional s/8',
    '*TOTAL a pagar s/56.90*',
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
  const flowGlobo15 = addKeyword(['Globo','Kises','Kisses'])
.addAnswer([
  'Ok Entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/30',
  'Adicional s/8',
  '*TOTAL a pagar s/87.90*',
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

  const flowGlobo14 = addKeyword(['Globo','Kises','Kisses'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/25',
  'Adicional s/8',
  '*TOTAL a pagar s/72.90*',
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
  const flowGlobo13 = addKeyword(['Globo','Kises','Kisses'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/20',
  'Adicional s/8',
  '*TOTAL a pagar s/77.90*',
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

  const flowGlobo12 = addKeyword(['Globo','Kises','Kisses'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/15',
  'Adicional s/8',
  '*TOTAL a pagar s/72.90*',
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

const flowGlobo11 = addKeyword(['Globo','Kises','Kisses'])
.addAnswer([
  'Ok entonces sería: ',
    'BOX DE ROSAS s/49.90',
    'Delivery s/10',
    'Adicional s/8',
    '*TOTAL a pagar s/67.90*',
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

  const flowAAdicional45 = addKeyword(['Ferrero Rocher', 'Ferrero'])
  .addAnswer([
    'Sería: ',
    'Ramo de Astromelias s/34.90',
    'Delivery s/30',
    'Adicional s/30',
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
  
  const flowAAdicional44 = addKeyword(['Ferrero Rocher', 'Ferrero'])
  .addAnswer([
    'Sería: ',
    'Ramo de Astromelias s/34.90',
    'Delivery s/25',
    'Adicional s/30',
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
  
  const flowAAdicional43 = addKeyword(['Ferrero Rocher', 'Ferrero'])
  .addAnswer([
    'Sería: ',
    'Ramo de Astromelias s/34.90',
    'Delivery s/20',
    'Adicional s/30',
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
  
    const flowAAdicional42 = addKeyword(['Ferrero Rocher', 'Ferrero'])
    .addAnswer([
      'Sería: ',
      'Ramo de Astromelias s/34.90',
      'Delivery s/15',
      'Adicional s/30',
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
    
      const flowAAdicional41 = addKeyword(['Ferrero Rocher', 'Ferrero'])
      .addAnswer([
        'Ok entonces sería: ',
        'Ramo de Astromelias s/34.90',
        'Delivery s/10',
        'Adicional s/30',
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

const flowAAdicional35 = addKeyword(['Ferrero Rocher', 'Ferrero'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/30',
  'Adicional s/30',
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

const flowAAdicional34 = addKeyword(['Ferrero Rocher', 'Ferrero'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/25',
  'Adicional s/30',
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

const flowAAdicional33 = addKeyword(['Ferrero Rocher', 'Ferrero'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/20',
  'Adicional s/30',
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

  const flowAAdicional32 = addKeyword(['Ferrero Rocher', 'Ferrero'])
  .addAnswer([
    'Sería: ',
    'Ramo de Rosas y Girasol s/29.90',
    'Delivery s/15',
    'Adicional s/30',
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
  
    const flowAAdicional31 = addKeyword(['Ferrero Rocher', 'Ferrero'])
    .addAnswer([
      'Ok entonces sería: ',
      'Ramo de Rosas y Girasol s/29.90',
      'Delivery s/10',
      'Adicional s/30',
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
    

    const flowAAdicional25 = addKeyword(['Ferrero Rocher', 'Ferrero'])
    .addAnswer([
      'Ok entonces sería: ',
      'Ramo de Girasoles s/38.90',
  'Delivery s/30',
  'Adicional s/30',
  '*TOTAL a pagar s/98.90*',
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

  const flowAAdicional24 = addKeyword(['Ferrero Rocher', 'Ferrero'])
  .addAnswer([
    'Ok entonces Sería: ',
    'Ramo de Girasoles s/38.90',
  'Delivery s/25',
  'Adicional s/30',
  '*TOTAL a pagar s/93.90*',
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

const flowAAdicional23 = addKeyword(['Ferrero Rocher', 'Ferrero'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
  'Delivery s/20',
  'Adicional s/30',
  '*TOTAL a pagar s/88.90*',
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

const flowAAdicional22 = addKeyword(['Ferrero Rocher', 'Ferrero'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
  'Delivery s/15',
  'Adicional s/30',
  '*TOTAL a pagar s/93.90*',
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

const flowAAdicional21 = addKeyword(['Ferrero Rocher', 'Ferrero'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
    'Delivery s/10',
    'Adicional s/30',
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
const flowAAdicional15 = addKeyword(['Ferrero Rocher', 'Ferrero'])
.addAnswer([
  'Ok Entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/30',
  'Adicional s/30',
  '*TOTAL a pagar s/109.90*',
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

const flowAAdicional14 = addKeyword(['Ferrero Rocher', 'Ferrero'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/25',
  'Adicional s/30',
  '*TOTAL a pagar s/104.90*',
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
const flowAAdicional13 = addKeyword(['Ferrero Rocher', 'Ferrero'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/20',
  'Adicional s/30',
  '*TOTAL a pagar s/99.90*',
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

const flowAAdicional12 = addKeyword(['Ferrero Rocher', 'Ferrero'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/15',
  'Adicional s/30',
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

const flowAAdicional11 = addKeyword(['Ferrero Rocher', 'Ferrero'])
.addAnswer([
  'Ok entonces sería: ',
    'BOX DE ROSAS s/49.90',
    'Delivery s/10',
    'Adicional s/30',
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

  const flowAdicional45 = addKeyword(['peluche','anillo'])
  .addAnswer([
    'Sería: ',
    'Ramo de Astromelias s/34.90',
    'Delivery s/30',
    'Adicional s/20',
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
  
  const flowAdicional44 = addKeyword(['peluche', 'anillo'])
  .addAnswer([
    'Sería: ',
    'Ramo de Astromelias s/34.90',
    'Delivery s/25',
    'Adicional s/20',
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
  
  const flowAdicional43 = addKeyword(['peluche', 'anillo'])
  .addAnswer([
    'Sería: ',
    'Ramo de Astromelias s/34.90',
    'Delivery s/20',
    'Adicional s/20',
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
  
    const flowAdicional42 = addKeyword(['peluche', 'anillo'])
    .addAnswer([
      'Sería: ',
      'Ramo de Astromelias s/34.90',
      'Delivery s/15',
      'Adicional s/20',
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
    
      const flowAdicional41 = addKeyword(['peluche', 'anillo'])
      .addAnswer([
        'Ok entonces sería: ',
        'Ramo de Astromelias s/34.90',
        'Delivery s/10',
        'Adicional s/20',
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

const flowAdicional35 = addKeyword(['peluche', 'anillo'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/30',
  'Adicional s/20',
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

const flowAdicional34 = addKeyword(['peluche', 'anillo'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/25',
  'Adicional s/20',
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

const flowAdicional33 = addKeyword(['peluche', 'anillo'])
.addAnswer([
  'Sería: ',
  'Ramo de Rosas y Girasol s/29.90',
  'Delivery s/20',
  'Adicional s/20',
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

  const flowAdicional32 = addKeyword(['peluche', 'anillo'])
  .addAnswer([
    'Sería: ',
    'Ramo de Rosas y Girasol s/29.90',
    'Delivery s/15',
    'Adicional s/20',
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
  
    const flowAdicional31 = addKeyword(['peluche', 'anillo'])
    .addAnswer([
      'Ok entonces sería: ',
      'Ramo de Rosas y Girasol s/29.90',
      'Delivery s/10',
      'Adicional s/20',
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
    

    const flowAdicional25 = addKeyword(['peluche','anillo'])
    .addAnswer([
      'Ok entonces sería: ',
      'Ramo de Girasoles s/38.90',
  'Delivery s/30',
  'Adicional s/20',
  '*TOTAL a pagar s/88.90*',
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

  const flowAdicional24 = addKeyword(['peluche', 'anillo'])
  .addAnswer([
    'Ok entonces Sería: ',
    'Ramo de Girasoles s/38.90',
  'Delivery s/25',
  'Adicional s/20',
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

const flowAdicional23 = addKeyword(['peluche', 'anillo'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
  'Delivery s/20',
  'Adicional s/20',
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

const flowAdicional22 = addKeyword(['peluche','anillo'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
  'Delivery s/15',
  'Adicional s/20',
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

const flowAdicional21 = addKeyword(['peluche','anillo'])
.addAnswer([
  'Ok entonces sería: ',
  'Ramo de Girasoles s/38.90',
    'Delivery s/10',
    'Adicional s/20',
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
const flowAdicional15 = addKeyword(['peluche', 'anillo'])
.addAnswer([
  'Ok Entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/30',
  'Adicional s/20',
  '*TOTAL a pagar s/99.90*',
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

const flowAdicional14 = addKeyword(['peluche', 'anillo'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/25',
  'Adicional s/20',
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
const flowAdicional13 = addKeyword(['peluche','anillo'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/20',
  'Adicional s/20',
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

const flowAdicional12 = addKeyword(['peluche','anillo'])
.addAnswer([
  'Ok entonces sería: ',
  'BOX DE ROSAS s/49.90',
  'Delivery s/15',
  'Adicional s/20',
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

const flowAdicional11 = addKeyword(['peluche', 'anillo'])
.addAnswer([
  'Ok entonces sería: ',
    'BOX DE ROSAS s/49.90',
    'Delivery s/10',
    'Adicional s/20',
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

  const flowNoAdicional45 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
  .addAnswer([
    'Sería: ',
    'Ramo de Astromelias s/34.90',
    'Delivery s/30',
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
  
  const flowNoAdicional44 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
  .addAnswer([
    'Sería: ',
    'Ramo de Astromelias s/34.90',
    'Delivery s/25',
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
  
  const flowNoAdicional43 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
  .addAnswer([
    'Sería: ',
    'Ramo de Astromelias s/34.90',
    'Delivery s/20',
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
  
    const flowNoAdicional42 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
    .addAnswer([
      'Sería: ',
      'Ramo de Astromelias s/34.90',
      'Delivery s/15',
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
    
      const flowNoAdicional41 = addKeyword(['no', 'todavia no','no por el momento','por ahora no'])
      .addAnswer([
        'Ok entonces sería: ',
        'Ramo de Astromelias s/34.90',
        'Delivery s/10',
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
  const flowDistrito45 = addKeyword(['Ventanilla', 'Villa María del Triunfo','Villa Maria del Triunfo','VMT','V.M.T',  'Villa el Salvador','VES','V.E.S'])
  .addAnswer([
    'Sería: ',
    'Ramo de Astromelias s/34.90',
    'Delivery s/30',
    '*TOTAL a pagar s/64.90*',
  ])
  .addAnswer('¿Deseas agregar algún adicional?')
    .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
      media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
    })
    .addAnswer('Si no deseas un adicional escribe *no*')
    .addAnswer([
      '\n*menu* para regresar al menu principal',
      '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
  
    ],null,
    null,
    [flowSecundario,flowMenu, flowNoAdicional45, flowAdicional45, flowGlobo45, flowAAdicional45]
    );
  
  const flowDistrito44 = addKeyword(['Carabayllo','Puente Piedra', 'San Juan de Miraflores','SJM','S.J.M','Chorrillos'])
  
  .addAnswer([
    'Sería: ',
    'Ramo de Astromelias s/34.90',
    'Delivery s/25',
    '*TOTAL a pagar s/59.90*',
  ])
  .addAnswer('¿Deseas agregar algún adicional?')
    .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
      media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
    })
    .addAnswer('Si no deseas un adicional escribe *no*')
    .addAnswer([
      '\n*menu* para regresar al menu principal',
          '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
  
    ],null,
    null,
    [flowSecundario,flowMenu, flowNoAdicional44, flowAdicional44, flowGlobo44, flowAAdicional44]
    );
  
  const flowDistrito43 = addKeyword(['Santiago de Surco','Surco','Barranco'])
  
  .addAnswer([
    'Sería: ',
    'Ramo de Astromelias s/34.90',
    'Delivery s/20',
    '*TOTAL a pagar s/54.90*',
  ])
  .addAnswer('¿Deseas agregar algún adicional?')
    .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
      media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
    })
    .addAnswer('Si no deseas un adicional escribe *no*')
    .addAnswer([
      '\n*menu* para regresar al menu principal',
          '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
  
    ],null,
    null,
    [flowSecundario,flowMenu, flowNoAdicional43, flowAdicional43, flowGlobo43, flowAAdicional43]
    );
  
  
  
  const flowDistrito42 = addKeyword(['Santa Anita', 'Comas', 'Miraflores' ,'Callao' ,'Ate', 'La Molina', 'San Borja', 'Surquillo' ,'San Juan de Lurigancho','SJL','S.J.L',  'San Luis', 'Magdalena', 'San Miguel','SM' ,'San Isidro'])
  
  .addAnswer([
    'Sería: ',
    'Ramo de Astromelias s/34.90',
    'Delivery s/15',
    '*TOTAL a pagar s/49.90*',
  ])
  .addAnswer('¿Deseas agregar algún adicional?')
    .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
      media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
    })
    .addAnswer('Si no deseas un adicional escribe *no*')
    .addAnswer([
      '\n*menu* para regresar al menu principal',
      '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
  
    ],null,
    null,
    [flowSecundario,flowMenu, flowNoAdicional42, flowAdicional42, flowGlobo42, flowAAdicional42]
    );
  
    const flowDistrito41 = addKeyword(['SMP','S.M.P','San Martin de porres','San Martín de Porres',  'Los Olivos', 'Independencia',  'Cercado de Lima','Centro de Lima' , 'La Victoria' , 'Breña' , 'El Agustino' ,'Rimac','Rímac',  'Pueblo Libre','PL' ])
  
    .addAnswer([
      'Sería: ',
      'Ramo de Astromelias s/34.90',
      'Delivery s/10',
      '*TOTAL a pagar s/44.90*',
    ])
    .addAnswer('¿Deseas agregar algún adicional?')
    .addAnswer('*Escribe el nombre del adicional que deseas comprar, por ejemplo peluche* ',{
      media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
    })
    .addAnswer('Si no deseas un adicional escribe *no*')
      .addAnswer([
        '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
    
      ],null,
      null,
      [flowSecundario,flowMenu, flowNoAdicional41, flowAdicional41, flowGlobo41, flowAAdicional41]
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
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
    '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional35, flowAdicional35, flowGlobo35, flowAAdicional35]
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
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional34, flowAdicional34, flowGlobo34, flowAAdicional34]
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
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional33, flowAdicional33, flowGlobo33, flowAAdicional33]
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
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
    '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional32, flowAdicional32, flowGlobo32, flowAAdicional32]
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
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
    .addAnswer([
      '\n*menu* para regresar al menu principal',
      '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
  
    ],null,
    null,
    [flowSecundario,flowMenu, flowNoAdicional31, flowAdicional31, flowGlobo31, flowAAdicional31]
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
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
    '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional25, flowAdicional25, flowGlobo25, flowAAdicional25]
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
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional24, flowAdicional24, flowGlobo24, flowAAdicional24]
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
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional23, flowAdicional23, flowGlobo23, flowAAdicional23]
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
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional22, flowAdicional22, flowGlobo22, flowAAdicional22]
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
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
    .addAnswer([
      '\n*menu* para regresar al menu principal',
      '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
  
    ],null,
    null,
    [flowSecundario,flowMenu, flowNoAdicional21, flowAdicional21, flowGlobo21, flowAAdicional21]
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
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional15, flowAdicional15, flowGlobo15, flowAAdicional15]
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
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional14, flowAdicional14, flowGlobo14, flowAAdicional14]
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
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional13, flowAdicional13, flowGlobo13, flowAAdicional13]
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
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  .addAnswer([
    '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu, flowNoAdicional12, flowAdicional12, flowGlobo12, flowAAdicional12]
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
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/ADICIONALES%202%20(2).jpg?alt=media&token=90ee9e3e-acd6-4a29-a1cd-bfe4cf6e2927'
  })
  .addAnswer('Si no deseas un adicional escribe *no*')
  
    .addAnswer([
      '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
  
    ],null,
    null,
    [flowSecundario,flowMenu, flowNoAdicional11, flowAdicional11, flowGlobo11, flowAAdicional11]
    );



    const flowPromo4= addKeyword([   '3', 'Promoción 3', 'promoción 3', 'promocion 3', 'Promocion 3',   'Ramo de astromelias', 'astromelias'])
    .addAnswer('¿Para donde sería el delivery?')
    .addAnswer('*Escribe el Distrito de la dirección de envío*',{
      media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/Captura%20de%20pantalla%202024-02-18%20231747.png?alt=media&token=e4f91829-5aa6-4395-99c2-66b350b54db8'
    })
    
    .addAnswer(
        [
            '\n*menu* para regresar al menu principal',
            '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
    
    
        ],
        null,
        null,
        [flowSecundario,flowMenu, flowDistrito43, flowDistrito42, flowDistrito41, flowDistrito44, flowDistrito45])

const flowPromo3= addKeyword(['hejjdidjwo928r884jjeowiwu110294#%' ])
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
  .addAnswer('Accede a nuestro catálogo de productos: https://drive.google.com/file/d/1DtxJhpCK3jCFoETjm-Z8LbpULcPy2diM/view')
  .addAnswer('Tenemos estos 4 productos con el 60% de descuento solo por tiempo limitado, elige tu favorito!!💐')
  
  .addAnswer('*Promo 1*',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/LIQUIDACION%201.png?alt=media&token=c8433d48-bc36-4566-b0ae-bca82a4f99ef'
  })
  .addAnswer('*Promo 2*',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/LIQUIDACION%202.png?alt=media&token=5495ae4d-281a-485b-a472-42700e01eca9'
  })
  
  .addAnswer('*Promo 3*',{
    media:'https://firebasestorage.googleapis.com/v0/b/app-kyrios.appspot.com/o/LIQUIDACION%203.png?alt=media&token=fe50f78e-d51f-47d2-b30f-184fa9fe3b71'
  })
  .addAnswer(
    [
      '¿Cuál promoción te gustaría comprar? ',
      
      '\n*0* Si quieres comunicarte con un asistente en línea  👨🏻‍💻',
      
      '*(Escribe alguna opción del 0 al 4)*',

      
    ],
    null,
      null,
      [flowSecundario,  flowMenu, flowPromo1, flowPromo2, flowPromo3, flowPromo4]
    
  )
  
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