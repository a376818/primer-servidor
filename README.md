# Práctica: Mi primer servidor

Servidor simple de node.js que lee y envía archivos mediante HTTP al navegador, demostrando tanto la lectura síncrona como la lectura asíncrona en la terminal.

## Getting Started

Estas instrucciones le permitirán poner en marcha una copia del proyecto en su máquina local para fines de desarrollo y pruebas. Consulte el despliegue para las notas sobre cómo desplegar el proyecto en un sistema en vivo.

### Prerequisitos

#### Node.js

Descargar [Node.js](https://nodejs.org/es) y seguir las instrucciones del instalador.

#### readline-sync

En una terminal del proyecto ejecutar:

```
npm i readline-sync
```

### Instalación

Una vez que haya clonado el repositorio en su dispositivo, abra una terminal en el directorio del proyecto y colóquese en la carpeta "server":

```
cd server
```

Para ejecutar el servidor, utilizar el comando:

```
node server.js
```

Escriba el nombre del archivo en la terminal, incluyendo su extensión.
Presione ENTER y abra el cliente en un navegador en el puerto 4000.

```
http://localhost:4000/
```

Podrá apreciar los resultados en el navegador.

Para cerrar la conexión, presione el siguiente comando en consola (Windows):

```
CTRL + C
```

## Implementación

Para crear la imagen de Docker, ejecutar:

### `docker build -t primer-servidor --build-arg APP_TYPE=server .`

Para ejecutar:

### `docker run -it -p 4000:4000 primer-servidor`

Para correr el programa en Docker con interactividad.

## Construido con

* [Node.js](https://nodejs.org/es) - Runtime environment

## Contribuciones

Favor de leer [CONTRIBUTING.md](./CONTRIBUTING.md) para los detalles del código de conducta y el proceso para enviar pull requests.

## Versiones

Usamos [SemVer](http://semver.org/) para las versiones.

## Autores

* **Damaris Naomi Trujillo García** - *Trabajo inicial* - [a376818](https://github.com/a376818/)

## Licencia

Este proyecto está licenciado bajo MIT License - ver [The MIT License](https://mit-license.org/) para más información

## Agradecimientos

* **Tutoriales**
* [11. escribir archivos con NodeJS | Curso de NodeJS para principiantes](https://www.youtube.com/watch?v=aA7h_M85rjA)
* [Cliente-Servidor TCP con Node js - Comunicación via Socket](https://www.youtube.com/watch?v=LFU7gJAOegA)
