# Vue 3 + TypeScript + Vite

- MiniApp para aprender vue y tealwind que muestra paises y sus datos, con buscador por nombre de pais.
- Hecho siguiendo el video  https://www.youtube.com/watch?v=x1YYK0G48F0&t=1591s


# Funcionalidades Clave
Explora una lista completa de países con detalles.
Utiliza el buscador para encontrar información específica sobre un pais.
Enlace aa mapa del pais.

## Mejoras
He retocado el estilo exlorando con la biblioteca tailwind y el pluguin daisyui

## Todos
- Sustituir la paginación por el componente vue-paginate
- Arreglar la paginacion
- Hacer test

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


