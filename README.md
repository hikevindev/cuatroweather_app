# CuatroOchentaApp

Descubre nuestra innovadora aplicación de pronóstico del clima, diseñada para ofrecerte información meteorológica precisa y en tiempo real en tu idioma. Con una interfaz intuitiva y moderna, esta herramienta te permite conocer el clima actual, consultar previsiones detalladas para los próximos días y recibir actualizaciones sobre temperaturas, máximas, mínimas y condiciones específicas como lluvia o viento.

## Stack tecnologico

## Frontend:

React: Para la construcción de la interfaz de usuario.
Redux Toolkit: Para la gestión eficiente del estado global de la aplicación.
Moment.js: Para el manejo de fechas y tiempos, con soporte de localización en español.
CSS/SCSS : Para el diseño y estilo de la interfaz.

## Backend/API:

OpenWeatherMap API: Para obtener datos en tiempo real sobre el clima y las previsiones meteorológicas.
Middleware:

Redux Thunks: Para manejar acciones asincrónicas y coordinar llamadas a APIs dentro de Redux.
Entorno de Desarrollo:

Node.js: Para la ejecución de scripts de desarrollo y el manejo de dependencias.
Create React App (CRA): Herramienta para la configuración inicial del proyecto React.
Gestión de paquetes:

npm (Node Package Manager): Para instalar y administrar dependencias del proyecto.
Tipado:

TypeScript: Para un desarrollo tipado y robusto, evitando errores comunes en tiempo de desarrollo.
Integración de Servicios:

WeatherService y WeatherRepository: Patrón de diseño implementado para abstraer las llamadas a la API y mejorar la modularidad.
Internacionalización:

Moment.js (locale): Configurado para mostrar las fechas y horas en español.
Control de estado del clima:

Redux Slice: Para dividir y gestionar diferentes aspectos del estado, como la información actual del clima y las previsiones futuras.

Redux DevTools: Para inspeccionar y depurar el estado de Redux en tiempo real (si se habilitó durante el desarrollo).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

