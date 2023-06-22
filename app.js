const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowSecundario = addKeyword(['0', 'avt']).addAnswer(['Espera un momento por favor...⏳',
'Un asistente en línea 👨🏻‍💻 se comunicará contigo (Atención: 9:30 am-8:00 pm)',
'\n*chatbot* para regresar al menu principal'])

const flowMenu = addKeyword(['menu', 'menú']).addAnswer('Ya casi! ahora escribe el comando *cbt*')







const flowVersiones = addKeyword(['1','Version','versión','Versiones','reina valera'])
  .addAnswer([
    'Existen tantas versiones de la Biblia. Aquí podrás escoger tu favorita 🤗 ',
    '✅(RV60) Reina Valera 1960 https://publicidadkyrios.com/ver/rv60/',
    '✅(NTV) Nueva Traducción Viviente https://publicidadkyrios.com/ver/ntv/',
    '✅(NVI) Nueva Versión Internacional https://publicidadkyrios.com/ver/nvi/',
    '✅(TLA) Traduccion en Lenguaje Actual https://publicidadkyrios.com/ver/tla/',
    '✅(DHH) Dios Habla Hoy https://publicidadkyrios.com/ver/dhh/',
    '✅(NBLA) Nueva Biblia de las Américas https://publicidadkyrios.com/ver/nbla/',
    '✅(RVC) Reina Valera Contemponránea https://publicidadkyrios.com/ver/rvc/',
    '✅(NBV) Nueva Biblia Viva https://publicidadkyrios.com/ver/nbv/',
    '✅(PDT) Palabra de Dios para Todos https://publicidadkyrios.com/ver/pdt/',
    '✅(ESP) Especial https://publicidadkyrios.com/ep/traducciones-especiales/',
    '✅(JER) Jerusalén https:https://publicidadkyrios.com/ver/jerusalen/',
    '✅(LAT) Latinoamericana https://publicidadkyrios.com/ver/latinoamericana/',
    '✅(BIL) Biblingue https://publicidadkyrios.com/ver/bilingue/',
    '✅(ID) Otros Idiomas https://publicidadkyrios.com/cp/biblia/otros-idiomas/',
    '✅(O) Otros https://publicidadkyrios.com/ver/otros/',
    '\n*menu* para regresar al menu principal',
    '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu]
  );



const flowLetra = addKeyword(['2','tamaño de letra','letra', 'letra grande'])
.addAnswer(['Tenemos Biblias con distintos tamaños de letra, escoge la indicada para tí 🤓 ',
' • Super Chica de 0 a 5 puntos https://publicidadkyrios.com/let/super-chica/',
'▪️Chica de 6 a 8 puntos https://publicidadkyrios.com/let/chica/',
'◾Mediana de 9 a 10 puntos https://publicidadkyrios.com/let/mediana/',
'◾Grande de 11 a 12 puntos https://publicidadkyrios.com/let/grande/',
'⬛Gigante de 14 puntos https://publicidadkyrios.com/let/gigante/',
'⬛Super Gigante de 16 a 19 puntos https://publicidadkyrios.com/let/super-gigante/',
'\n*menu* para regresar al menu principal',
'*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻']
,null,
  null,
  [flowSecundario,flowMenu])

  const flowCaracterísticas = addKeyword(['3','Caracteristicas',' Características','estudio','apuntes','economica'])
.addAnswer(['Aquí encontrarás las características ideal para tu Biblia 🤗',
'📖DE ESTUDIO https://publicidadkyrios.com/cp/biblia/estudio/',
'😇DEVOCIONAL https://publicidadkyrios.com/car/devocional/',
'📝DE APUNTES https://publicidadkyrios.com/car/espacio-para-apuntes/',
'©️CONCORDANCIA',
'🙏🏻PROMESAS https://publicidadkyrios.com/car/promesas/',
'🤐CIERRE https://publicidadkyrios.com/car/cierre/',
'🗂️CON ÍNDICE https://publicidadkyrios.com/fil/indice/',
'🙌🏻PJR https://publicidadkyrios.com/car/palabras-de-jesus-en-rojo/',
'🪙ECONÓMICA ',
'📄ULTRAFINA',
'🧲IMANTADA https://publicidadkyrios.com/car/iman/',
'📦EN CAJA https://publicidadkyrios.com/car/viene-en-caja/',
'\n*menu* para regresar al menu principal',
'*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻']
,null,
  null,
  [flowSecundario,flowMenu])



  const flowColor = addKeyword(['4', 'color','colores'])
.addAnswer(['Escoge el color favorito para tu Biblia 🤩',
'ROSA https://publicidadkyrios.com/color/rosa/',
'⚫️NEGRO https://publicidadkyrios.com/color/negro/',
'🟤MARRÓN https://publicidadkyrios.com/color/marron/',
'🔵AZUL https://publicidadkyrios.com/color/azul/',
'🟢VERDE https://publicidadkyrios.com/color/verde/',
'🔴ROJO https://publicidadkyrios.com/color/rojo/',
'🟡AMARILLO https://publicidadkyrios.com/color/amarillo/',
'🟣LILA https://publicidadkyrios.com/color/lila/',
'⚪️BLANCO https://publicidadkyrios.com/color/blanco/',
'🟠NARANJA https://publicidadkyrios.com/color/naranja/',
'🩶GRIS https://publicidadkyrios.com/color/gris/',
'🍷VINO https://publicidadkyrios.com/color/vino/',
'🩷FUCSIA https://publicidadkyrios.com/color/fucsia/',
'✅TURQUESA https://publicidadkyrios.com/color/turquesa/',
'🍦CREMA https://publicidadkyrios.com/color/crema/',
'💜MORADO https://publicidadkyrios.com/color/morado/',
'🩵CELESTE https://publicidadkyrios.com/color/celeste/',
'2️⃣BICOLOR https://publicidadkyrios.com/color/bicolor/',
'3️⃣TRICOLOR https://publicidadkyrios.com/color/tricolor/',
'🌹DISEÑO https://publicidadkyrios.com/color/colores-y-o-diseno/',
'\n*menu* para regresar al menu principal',
'*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻']
,null,
  null,
  [flowSecundario,flowMenu])

  const flowTamaño = addKeyword(['5', 'tamaño','compacta'])

.addAnswer(['¿De que tamaño deseas tu Biblia? 🤔 ',
'👝CARTERA https://publicidadkyrios.com/ep/modelo-cartera/',
'👛BOLSILLO https://publicidadkyrios.com/tam/bolsillo/',
'📁COMPACTA https://publicidadkyrios.com/tam/compacta/',
'📗MEDIANA https://publicidadkyrios.com/tam/mediana/',
'📘MANUAL',
'📙GRANDE https://publicidadkyrios.com/tam/grande/',
'📔GIGANTE https://publicidadkyrios.com/tam/gigante/',
'\n*menu* para regresar al menu principal',
'*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻']
,null,
  null,
  [flowSecundario,flowMenu])

  const flowFilo = addKeyword(['6','filo', 'indice'])

.addAnswer(['Escoje el color ideal para el filo de tu Biblia ☺️ ',
'🔵AZUL https://publicidadkyrios.com/fil/azul/',
'🟢VERDE https://publicidadkyrios.com/fil/verde/',
'🟠NARANJA https://publicidadkyrios.com/fil/naranja/',
'🟤MARRÓN https://publicidadkyrios.com/fil/marron/',
'🟣LILA https://publicidadkyrios.com/fil/lila/',
'🔴ROJO https://publicidadkyrios.com/fil/rojo/',
'⚪️BLANCO https://publicidadkyrios.com/fil/blanco/',
'🥇DORADO https://publicidadkyrios.com/fil/dorado/',
'🥈PLATEADO https://publicidadkyrios.com/fil/plateado/',
'🥉BRONCE https://publicidadkyrios.com/fil/bronce/',
'🩶GRIS https://publicidadkyrios.com/fil/gris/',
'🍦CREMA https://publicidadkyrios.com/fil/crema/',
'🌹DISEÑO https://publicidadkyrios.com/fil/diseno/',
'🩷FUCSIA https://publicidadkyrios.com/fil/fucsia/',
'🗂️CON ÍNDICE https://publicidadkyrios.com/fil/indice/',
'\n*menu* para regresar al menu principal',
'*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻']
,null,
  null,
  [flowSecundario,flowMenu])

  const flowRecomendadas = addKeyword(['7','damas','niña','niño','varones','adolescentes'])

  .addAnswer(['¿Para quién es la Biblia? 😲',
'👴🏻Adultos Mayores https://publicidadkyrios.com/para/adultos-mayores/',
'👨🏻Varones https://publicidadkyrios.com/para/varones/',
'👩🏻‍🦱Damas https://publicidadkyrios.com/para/damas/',
'🧑🏻Jóvenes https://publicidadkyrios.com/para/jovenes/',
'👩🏻Señoritas https://publicidadkyrios.com/para/senoritas/',
'👦🏻Adolescentes https://publicidadkyrios.com/para/adolescentes/',
'🧒🏻Niños (7 - 10 años) https://publicidadkyrios.com/para/ninos-7-10-anos/',
'👧🏻Niñas (7 - 10 años) https://publicidadkyrios.com/para/ninas-7-10-anos/',
'🧒🏻Niños (4 - 6 años) https://publicidadkyrios.com/para/ninos-4-6-anos/',
'👧🏻Niñas (4 - 6 años) https://publicidadkyrios.com/para/ninos-4-6-anos/',
'👶🏻Bebes (0 - 3 años) https://publicidadkyrios.com/para/bebes-0-3-anos/',
  '\n*menu* para regresar al menu principal',
  '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻']
  ,null,
    null,
    [flowSecundario,flowMenu])



  const flowTapa = addKeyword('8','tapa')

  .addAnswer(['Escoge la tapa favorita para tu Biblia 🫣',
'✅Piel https://publicidadkyrios.com/tap/piel/',
'✅Simil Piel https://publicidadkyrios.com/tap/simil-piel/',
'✅Vinil https://publicidadkyrios.com/tap/vinil/',
'✅Dura https://publicidadkyrios.com/tap/dura/',
'✅Plastica https://publicidadkyrios.com/tap/plastica/',
'✅Tela https://publicidadkyrios.com/tap/tela/',
'✅Carton https://publicidadkyrios.com/tap/carton/',
'✅Acolchada https://publicidadkyrios.com/tap/acolchada/',
  '\n*menu* para regresar al menu principal',
  '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻']
  ,null,
    null,
    [flowSecundario,flowMenu])

    const flowFavoritos = addKeyword(['9','vendidos','favoritos','comic','león','leon','cómic','thompson','macarthur','Promesas','primavera'])

    .addAnswer(['Estas son las Biblias más vendidas y sin duda las favoritas del público. ¡No te quedas sin la tuya! 🤭 ',
    '🔝MACARTHUR https://publicidadkyrios.com/ep/macarthur/',
    '🔝THOMPSON https://publicidadkyrios.com/ep/thompson/',
    '🔝ESTUDIO HOLMAN https://publicidadkyrios.com/ep/biblia-de-estudio-holman/',
    '🔝DE APUNTES https://publicidadkyrios.com/ep/apuntes/',
    '🔝CENTRADA EN CRISTO https://publicidadkyrios.com/ep/centrada-en-cristo/',
    '🔝FUENTE DE BENDICIÓN https://publicidadkyrios.com/ep/fuente-de-bendicion/',
    '🔝LEÓN https://publicidadkyrios.com/ep/leon/',
    '🔝CÓMIC https://publicidadkyrios.com/ep/comic/',
    '🔝COLECCIÓN PRIMAVERA https://publicidadkyrios.com/ep/coleccion-primavera/',
    '\n*menu* para regresar al menu principal',
    '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻']
    ,null,
      null,
      [flowSecundario,flowMenu])

      const flowOfertas = addKeyword(['5', 'ofertas']).addAnswer(['🔥¡¡¡OFERTAS!!!🔥',
'\nhttps://publicidadkyrios.com/cp/ofertas/',
'\n*menu* para regresar al menu principal',
'*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻']
,null,
  null,
  [flowSecundario,flowMenu])


const flowIsrael = addKeyword(['4', 'Israel','shofar','candelabro','aceites'])
.addAnswer(
    [
        'Aquí encontrarás los productos de Israel disponibles:',
        'https://publicidadkyrios.com/cp/israel/',
        '\n🆕NUEVOS PRODUCTOS https://publicidadkyrios.com/cp/israel/?orderby=date',
        '🕎MENORAH https://publicidadkyrios.com/ep/menorah/',
        '🐏SHOFAR https://publicidadkyrios.com/ep/shofar/',
        '✡️TALLIT https://publicidadkyrios.com/ep/tallit/',
        '🔑LLAVEROS https://publicidadkyrios.com/ep/llaveros/',
        '✡️ACEITES https://publicidadkyrios.com/ep/aceite/',
        '🧢KIPPAH https://publicidadkyrios.com/ep/kippah/',
        '🧣PASHMINA https://publicidadkyrios.com/ep/pashmina/',
        '✡️MEZUZAH https://publicidadkyrios.com/ep/mezuza/',
        '🕎BANDERAS https://publicidadkyrios.com/ep/bandera/',
        '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻 '
        
    ],
    null,
    null,
    [flowSecundario,flowMenu]
    
)






const flowRegalería = addKeyword(['3', 'regaleria', 'regalería', 'regalos', 'regalería Cristiana', 'regalitos','maderas']).addAnswer(
    [
        'Aquí podrás ver más de 200 productos para regalar: https://publicidadkyrios.com/cp/productos-kyrios/',
        '\n📅ALMANAQUES 2023 https://publicidadkyrios.com/cp/almanaques-2023/',
        '📒AGENDAS https://publicidadkyrios.com/cp/productos-kyrios/agendas/',
        '📃CERTIFICADOS https://publicidadkyrios.com/cp/productos-kyrios/certificados/',
        '😇FOLLETOS EVANGELISTICOS https://publicidadkyrios.com/cp/productos-kyrios/folletos-evangelisticos/',
        '🪵MADERAS https://publicidadkyrios.com/cp/productos-kyrios/madera/',
        '🏷️MARCADORES https://publicidadkyrios.com/cp/productos-kyrios/marcadores/',
        '🙌🏻PROMESAS https://publicidadkyrios.com/cp/productos-kyrios/promesas-productos-kyrios/',
        '🎁REGALOS https://publicidadkyrios.com/cp/productos-kyrios/regalos/',
        '☕TAZAS https://publicidadkyrios.com/cp/productos-kyrios/tazas/',
        '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
    ],
    null,
    null,
    [flowSecundario,flowMenu]
)
const flowLibros = addKeyword(['2', 'Libro', 'Libros']).addAnswer(
    [   '¿Que libro estás buscando?',
        '🆕Nuevos Títulos https://publicidadkyrios.com/cp/libros/?orderby=date',
        '😇Devocionales https://publicidadkyrios.com/ep/devocionales/',
        '🤓Diccionarios Bíblicos https://publicidadkyrios.com/ep/diccionarios-biblicos/',
        '📝Escuela Dominical https://publicidadkyrios.com/ep/escuela-dominical/',
        '🧑🏻Para Jóvenes https://publicidadkyrios.com/ep/libros-para-jovenes/',
       
    ]
)
.addAnswer(['Recuerda que si estás buscando algún libro en específico, puedes buscarlo en nuestra tienda online ',
'Aquí encontrarás más de 1500 Títulos de libros:',
        'https://publicidadkyrios.com/cp/libros/',
  
'\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
  ],
    null,
    null,
    [flowSecundario,flowMenu])

const flowBiblias = addKeyword(['1', 'Biblia', 'Biblias'])
.addAnswer(
    [
        'Aquí encontrarás más de 800 modelos de biblias',
        'https://publicidadkyrios.com/cp/biblia/',
        '\n¿Qué Biblia estás buscando? *(Escoge una opción del 1 al 9)*',
        '\n*1* Versiones',
        '*2* Tamaño de Letra',
        '*3* Características',
        '*4* Color',
        '*5* Tamaño',
        '*6* Filo',
        '*7* Recomendadas para:',
        '*8* Tapa',
        '*9* Los más vendidos',
        'Nuevos modelos: https://publicidadkyrios.com/cp/biblia/?orderby=date',
        '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

    ],
    null,
    null,
    [flowSecundario,flowMenu, flowVersiones, flowLetra, flowCaracterísticas, flowColor, flowTamaño, flowFilo, flowRecomendadas, flowTapa, flowFavoritos]
)

const flowImagen = addKeyword('6').addAnswer('🌸Nuevas Biblias chicas con letra grande ¡COLECCIÓN PRIMAVERA!🌸',{
  media:'https://scontent.flim6-4.fna.fbcdn.net/v/t39.30808-6/349623368_201431112819320_1640630143469304941_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGkTPxjB05oX976jCBKIC7mEzGKLg_PbwQTMYouD89vBFud1MtxOaHZc9hWu3CkUE8t3oroXE6gSzzoW3Q8o0QA&_nc_ohc=iaiBL4nysMoAX8cOKKg&_nc_ht=scontent.flim6-4.fna&oh=00_AfBugZ411IJ_CybfURVF8VIJThnZ5YsINySjI8OrnMPmsQ&oe=64963FAB'
})
.addAnswer(['Adquiérelas aquí 👇🏻👇🏻👇🏻',
'https://publicidadkyrios.com/ep/coleccion-primavera/',
'\n*menu* para regresar al menu principal',
'*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'],
null,
null,
[flowSecundario,flowMenu] )  

const flowRedes = addKeyword(['7', 'redes', 'redes sociales']).addAnswer(
  [
      'Síguenos en todas nuestras Redes Sociales ☺️ ',
      ' 📷 Instagram: https://www.instagram.com/publicidadkyrios/',
      '👤Facebook: https://www.facebook.com/PublicidadKyrios/',
      '🎬TikTok: https://www.tiktok.com/@publicidadkyrios',
      '⭕ Youtube: https://www.youtube.com/@libreriapublicidadkyrios',
      '\n*menu* para regresar al menu principal',
      '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
  ],
  null,
  null,
  [flowSecundario,flowMenu]
)

const flowNombre = addKeyword(['8', 'recomiendame'])
  .addAnswer('¿Cuál es tu nombre?', { capture: 'nombre' }, (ctx) => {
    console.log('Mensaje entrante:', ctx.body);
 
  })





const flowPrincipal = addKeyword(['cbt','chatbot'])
  .addAnswer('Hola, bienvenido a la Librería Cristiana 👑 Publicidad Kyrios *Chatbot* 🟥⬜🟥')
  .addAnswer('Ingresa a la TIENDA CRISTIANA ONLINE 🛒: https://publicidadkyrios.com/')
  .addAnswer(
    [
      '¿Qué producto estás buscando? ',
      '*1* Biblias 📖',
      '*2* Libros 📚',
      '*3* Regalería Cristiana 🎉',
      '*4* Productos de Israel 🕎 ',
      '*5* OFERTAS!🔥',
      '*6* Novedades 🤩',
      '*7* Nuestras Redes Sociales 📲',
      '*8* Recomiendame una biblia',
      '\n*0* Si quieres comunicarte con un asistente en línea 👨🏻‍💻',
      '*(Escribe alguna opción del 0 al 7)*'
      
    ],
    null,
      null,
      [flowSecundario, flowNombre, flowMenu, flowRedes, flowImagen, flowBiblias, flowLibros, flowRegalería, flowIsrael, flowOfertas]
    
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

    QRPortalWeb()
}

main()


