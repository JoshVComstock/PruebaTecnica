
## Esta prueba se trata de un listado de peliculas
Este proyecto es una aplicacion web que esta desarrollada con React y que muestra un listado de peliculas de forma alfabetica y mayores con emision mayores o igual a 2010, la aplicacion tambien cuenta con 3 secciones en Inicio que muestra todas como peliculas y series, la seccion series que solo muestra series y la seccion peliculas que solo muestra peliculas, en todos las secciones solo muestran un listado de 20.

## Introduccion de Ejecucion

Con los siguientes pasos podra hacer la ejecucion de forma local:

**Clonar el repositorio**
```bash
    git clone https://github.com/JoshVComstock/PruebaTecnica.git
    cd PruebaTecnica
```
**Intalar dependencias**
```bash
npm i
```
**Ejecutar la aplicacion**
```bash
npm run dev
```
**Ejecucion de JSON server**
```bash
npx json-server --watch data/videoteca.json --port 3000
```
**Ejecucion de vitest**
```bash
npm run test
```
## Opciones tecnicas y arquitectonicas
Las opciones tecnicas y arquitectonicas fueron seleccionadas considerando la eficiencia y la velocidad de desarrollo. Se eligió React por su rendimiento y configuración simplificada. El uso de componentes funcionales y el enfoque en la gestión del estado con Hooks permite un código más limpio.

## Mejoras posibles
Una mejora potencial para este proyecto sería la implementación de paginación para la lista de películas especialmente y que si se pueda reproducir videos.

## Si tuviera mas tiempo
Con más tiempo, consideraría mejorar la accesibilidad de la aplicación y agregar comentarios detallados al código para facilitar la colaboración, el filtrado de las peliculas que detecte que peliculas son las mas vista y filtre por ese orden.
