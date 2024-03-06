AGK - Generar .APK 
______________________________________


Descargar nvm, entrar a la siguiente enlace y descargar nvm-setup.zip y ejecutar el nvm-setup.exe
 
``https://github.com/coreybutler/nvm-windows/releases``


Cambie de versión de Node.js 

``nvm use 16.16.0``


Instale una versión antigua de Expo-Cli(Tal Vez no necesario) 

``npm install -g expo-cli@3.x.x``


Aplique que se configure mi proyecto con EAS 

``eas build:configure``


Revisé que todo esté bien 

``npx expo install --check``


Actualice librerías a las recomendadas por el log 

``npx expo install @react-native-community/netinfo@9.3.7 @react-native-picker/picker@2.4.8 expo-document-picker@~11.2.2 expo-sharing@~11.2.2``


Revisé que todo esté bien 

``npx expo install --check``


Genere la publicación y al finalizar descargar el Android app

``eas build --platform android``


Cuando se obtenga el archivo .aab, descargarlo y cambiar el nombre

``agk_transporte.aab``


Guardar el archivo .aab en una carpeta, podría quedar así

``C:\Users\Oth4r\Desktop\CarpetaNueva``


Descargar bundletool-all-1.15.6.jar del siguiente enlace y cambiar el nombre a bundletool

``https://github.com/google/bundletool/releases``


Posteriormente guardarlo en la misma carpeta donde está el archivo .aab

``C:\Users\Oth4r\Desktop\CarpetaNueva``


Abrir Simbolo de Sistema(CMD) y ubicarse en la ruta dónde están guardados ambos archivos

``C:\Users\Oth4r\Desktop\CarpetaNueva>``


Generar el archivo .apks a partir del archivo .aab, indicar el nombre con el cuál se quiere generar el .apks

``java -jar bundletool.jar build-apks --bundle=agk_transporte.aab --output=agk_transporte.apks --mode=universal``


Seleccionar el nuevo archivo agk_transporte.apks que se encontrará en la carpeta creada ‘CarpetaNueva’ y extraer los archivos, se extraerán los siguientes archivos

``toc.pb``
``universal.apk``


Cambiar el nombre del archivo .apk a agk_transporte y compartir para su uso

``agk_transporte.apk``
