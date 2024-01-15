const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowSecundario = addKeyword(['0', 'avt']).addAnswer(['🛎️Espera un momento por favor...⏳',
'Un asistente en línea 👨🏻‍💻 se comunicará contigo',
'\n*cbt* para regresar al menu principal'])


const flowMenu = addKeyword(['menu', 'menú']).addAnswer('¡Ya casi! Ahora solo escribe *cbt*')







const flowBasedeDatos = addKeyword(['1','Base de Datos'])
.addAnswer('*Aplicación Móvil Base de Datos',{
  media:'https://developerwebai.com/wp-content/uploads/2024/01/Captura-de-pantalla-2024-01-14-001212.png'
})
  .addAnswer([
    'Creamos una App de base de datos donde podrás subir todos tus productos y gestionar mejor el almacenamiento de tu negocio, todos los productos son gestionados mediante Firebase de Google ',
    'Beneficios:',
    '- Aplicación de base de datos',
    '- Disponible en Play Store',
    '- Disponible en App Store',
    '- Base de de datos conectado con Firebase de Google',
    '- Soporte Técnico 24/7',
    'Tu empresa contará con una herramienta robusta para la gestión eficiente de productos y datos, promoviendo la organización y la toma de decisiones informada',
    'Precio: $50 USD',
        'Para mayor información: https://developerwebai.com/producto/aplicacion-de-base-de-datos/',
    '\n*menu* para regresar al menu principal',
    '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu]
  );




const flowTiendaVirtual = addKeyword(['2','Tienda Virtual'])
.addAnswer('*Aplicación Móvil Tienda Virtual*',{
  media:'https://developerwebai.com/wp-content/uploads/2024/01/Captura-de-pantalla-2024-01-14-001854.png'
})
  .addAnswer([
    'La solución perfecta para empresas y emprendimientos que buscan su propia aplicación de tienda virtual',
    'Beneficios:',
    '- Incluye App de base de datos',
    '- App Tienda Virtual',
    '- Disponible en Play Store',
    '- Disponible en App Store',
    '- Base de de datos conectado con Firebase de Google',
    '- Soporte Técnico 24/7',
    'Una Aplicación Móvil para de una tienda Virtual es la solución integral para empresas y emprendimientos que desean establecer una sólida presencia en línea',
    'Precio: $75 USD',
        'Para mayor información: https://developerwebai.com/producto/aplicacion-movil-tienda-virtual/',
    '\n*menu* para regresar al menu principal',
    '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

  ],null,
  null,
  [flowSecundario,flowMenu]
  );

  const flowAsistencia = addKeyword(['3','Asistencia','Registro de Asistencia' ])
  .addAnswer('*Aplicación Móvil Registro de Asistencia*',{
    media:'https://developerwebai.com/wp-content/uploads/2024/01/Captura-de-pantalla-2024-01-14-002526.png'
  })
    .addAnswer([
      'Simplifica la gestión del tiempo y optimiza el control de asistencia de tu personal de manera práctica y moderna.',
      'Beneficios:',
      '- Base de datos de Empleados',
      '- App de Registro de Asistencia',
      '- Disponible en Play Store',
      '- Disponible en App Store',
      '- Base de de datos conectado con Firebase de Google',
      '- Soporte Técnico 24/7',
      'La Aplicación de Registro de Asistencia es una herramienta esencial para empresas y emprendimientos que buscan optimizar la gestión del tiempo y la asistencia de su personal',
      'Precio: $50 USD',
          'Para mayor información: https://developerwebai.com/producto/aplicacion-de-registro-de-asistencia/',
      '\n*menu* para regresar al menu principal',
      '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'
  
    ],null,
    null,
    [flowSecundario,flowMenu]
    );





const flowChatbot= addKeyword(['3', 'Chatbot']).addAnswer('*Chatbot Automatizado*',{
  media:'https://developerwebai.com/wp-content/uploads/2024/01/390cade0-5735-4974-bd10-923c96fd0a7e.jpg'
})
.addAnswer(
    [
        'Creamos un chatbot de WhatsApp automatizado que se adapte a las necesidades de cada negocio con el fin de optimizar la atención al cliente y generar más ventas de manera automatizada',
        
        '\nBeneficios:',
        '- Chatbot de WhatsApp Personalizado',
        '- Preguntas Automatizadas',
        '- Respuestas Automatizadas',
        '- Soporte Técnico 24/7',
        '- Puede incluir Inteligencia Artificial',
        '- Servidor Virtual Garantizado',
        'Optimiza la interacción con los clientes, impulsa la participación y lleva tu estrategia de ventas al siguiente nivel',
        '*Chatbot automatizado* Precio: $50 USD',
        '*Chatbot automatizado con IA* Precio: $55 USD',
        'Para mayor información: https://developerwebai.com/product-category/chatbot/',
        '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

    ],
    null,
    null,
    [flowSecundario,flowMenu])


const flowWeb = addKeyword(['2', 'Aplicación Web', 'aplicacion web'])
.addAnswer('*Aplicación Web*',{
  media:'https://developerwebai.com/wp-content/uploads/2024/01/Slide1copia.jpg'
})
.addAnswer(
    [
        'Creamos tu página web personalizada de acuerdo a tus necesidades y preferencias. Ya sea un foro de noticias, una tienda en línea (e-commerce), o cualquier otro tipo de sitio, nuestra aplicación web ofrece flexibilidad y creatividad para reflejar la identidad única de tu empresa o emprendimiento.',
        
        '\nBeneficios:',
        '- Página Web Personalizada',
        '- Host de Hostinger',
        '- Dominio Propio',
        '- Soporte técnico 24/7',
        '- Sitio Web Seguro HTTPS',
        'Potencia tu marca con una aplicación web que refleje tu identidad única',
        'Precio: $100 USD',
        'Para mayor información: https://developerwebai.com/producto/aplicacion-web/',
        '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

    ],
    null,
    null,
    [flowSecundario,flowMenu])
    
const flowApp = addKeyword(['1', 'Aplicación Móvil', 'Aplicion movil'])
.addAnswer(
    [
        'Podemos crear 3 tipos de Aplicaciones móviles',
        'https://developerwebai.com/product-category/aplicacion-movil/',
        '\n¿Qué App estás buscando? *(Escoge una opción del 1 al 3)*',
        '\n*1* Base de Datos',
        '*2* Tienda Virtual',
        '*3* Registro de Asistencia',
        
        '\n*menu* para regresar al menu principal',
        '*avt* Si quieres comunicarte con un asistente en línea 👨🏻‍💻'

    ],
    null,
    null,
    [flowSecundario,flowMenu, flowBasedeDatos, flowTiendaVirtual, flowAsistencia]
)








const flowPrincipal = addKeyword(['cbt'])
  .addAnswer('Hola. Soy el chatbot de DeveloperWebAI')
  .addAnswer('Ingresa a la Tienda online: https://developerwebai.com/')
  .addAnswer(
    [
      '¿En qué servicio estás interesado? ',
      '*1* Aplicación Móvil 📱',
      '*2* Aplicación Web 💻',
      '*3* Chatbot Automatizado 🤖',
      
      '\n*0* Si quieres comunicarte con un asistente en línea 👨🏻‍💻',
      
      '*(Escribe alguna opción del 0 al 3)*'
      
    ],
    null,
      null,
      [flowSecundario,  flowMenu, flowApp, flowWeb, flowChatbot]
    
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
    

    QRPortalWeb({port:20202})
}

main()


