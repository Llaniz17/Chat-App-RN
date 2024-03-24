# Chat App con Gemini - Aplicación móvil desarrollada con React Native y pensada para usarse como componente en otras aplicaciones 
Esta es una aplicación de chat desarrollada en React Native que utiliza la API de Generative AI de Google para permitir a los usuarios conversar con una inteligencia artificial. La aplicación ofrece una experiencia de chat en tiempo real donde los usuarios pueden enviar mensajes y recibir respuestas generadas por el modelo Gemini Pro de Google Generative AI.

## Funcionalidades Principales
- Conversación en Tiempo Real: Los usuarios pueden enviar y recibir mensajes en tiempo real.
- Integración con Google Generative AI: La aplicación utiliza la API de Generative AI de Google para generar respuestas de inteligencia artificial.
- Interfaz de Usuario Amigable: Diseño intuitivo y fácil de usar para una experiencia de usuario fluida.

## Demostración


https://github.com/Llaniz17/Chat-App-RN/assets/87396322/129a28a0-ebe2-4aaf-967d-4167a2ca67a2



## Instalación
Para ejecutar esta aplicación en tu entorno local, sigue estos pasos:

Clona este repositorio a tu máquina local.
Navega al directorio del proyecto en tu terminal.
Ejecuta npm install para instalar todas las dependencias.

## Configuración
Antes de ejecutar la aplicación, necesitarás una clave de API de Generative AI de Google para autenticar las solicitudes a la API. Una vez que obtengas la clave de API, reemplaza el valor de API_KEY en el archivo GeminiChat.js con tu propia clave.
~~~
const API_KEY = "TU_CLAVE_DE_API_AQUI";
~~~

## Uso
Una vez que hayas instalado las dependencias y configurado las credenciales de autenticación, puedes ejecutar la aplicación utilizando el siguiente comando:

CLI
~~~
npx react-native run-android
~~~
Este comando ejecutará la aplicación en un emulador Android o en un dispositivo físico conectado.

EXPO
~~~
npx expo-start
~~~
Este comando abrirá la interfaz de Metro Bundler en tu navegador. Desde allí, puedes escanear el código QR con la aplicación Expo Go en tu dispositivo móvil para cargar la aplicación.


## Contribuciones
¡Las contribuciones son bienvenidas! Si deseas mejorar esta aplicación, por favor envía un pull request. Si tienes sugerencias o encuentras problemas, por favor abre un issue.

## Agradecimientos
Agradezco a Google por proporcionar la API de Generative AI, así como a todos los desarrolladores de las bibliotecas y herramientas de código abierto utilizadas en este proyecto.

## Licencia
Este proyecto está licenciado bajo la [Licencia MIT](https://opensource.org/licenses/MIT).
