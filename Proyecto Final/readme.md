# G14 – MVP CRUD con React

## Índice
1. [Resumen del proyecto (MVP)](#resumen-del-proyecto-mvp)
2. [Objetivos](#objetivos)
3. [Criterios mínimos (MVP)](#criterios-mínimos-mvp)
4. [Stack y recursos](#stack-y-recursos)
5. [Estructura del proyecto sugerida](#estructura-del-proyecto-sugerida)
6. [Cómo iniciar el proyecto](#cómo-iniciar-el-proyecto)
7. [Entregables](#entregables)
8. [Aspectos a evaluar](#aspectos-a-evaluar)
9. [Etapas de desarrollo](#etapas-de-desarrollo)

---

## Resumen del proyecto (MVP)
El proyecto consiste en construir una aplicación **CRUD completa** (Create, Read, Update, Delete) usando **React**.
La idea es enfocarse en lo esencial: listar datos desde una API propia de backend, crear nuevos registros con un formulario simple, editar registros existentes y eliminar registros, todo con una sola entidad o recurso.

---

## Objetivos
El objetivo principal es **usar los fundamentos de JavaScript y React** para crear un CRUD completo conectado a su propia API de backend.
- JavaScript: manejo de arrays y objetos, promesas/`fetch`, validaciones simples.
- React: componentes, estado (`useState`), efectos (`useEffect`), props y formularios controlados.

---

## Criterios mínimos (MVP)
El proyecto debe implementar las **4 operaciones CRUD** sobre un recurso (ejemplo: `users`, `tasks`, `products`):

1. **Read (listar):** vista con listado del recurso (tabla o tarjetas).
2. **Create (crear):** formulario controlado con validaciones mínimas, guardando en la API.
3. **Update (editar):** editar un registro y actualizar la información en la API.
4. **Delete (eliminar):** acción para borrar con confirmación.
5. **UI mínima:** que funcione en desktop principalmente, ideal que también en mobile.

> [!NOTE]
> Pueden tomar como referencia el proyecto admin

---

## Stack y recursos

**Tecnologías principales**
- [React](https://react.dev)
- [Fetch API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) para peticiones HTTP
- API propia desarrollada en backend

**Documentación de referencia**
- [`useState` – React docs](https://react.dev/reference/react/useState)
- [`useEffect` – React docs](https://react.dev/reference/react/useEffect)
- [Formularios controlados – React docs](https://react.dev/reference/react-dom/components/input)
- [Componentes y props – React docs](https://react.dev/learn/passing-props-to-a-component)
- [Fetch API – MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Uso de Fetch (GET, POST, PUT, DELETE) – MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

---

## Estructura del proyecto sugerida
Una estructura mínima y clara:

```
/project-root
├─ /src
│  ├─ /components
│  │  ├─ ItemForm.jsx       # formulario crear/editar
│  │  └─ ItemList.jsx       # lista del recurso + acciones
│  ├─ /services
│  │  └─ api.js             # funciones para CRUD
│  ├─ /styles               # opcional, estilos globales o modulares
│  ├─ App.jsx
│  └─ main.jsx
├─ .env.local               # VITE_API_BASE_URL="https://...tu-api-backend.com/api/v1"
├─ package.json
└─ README.md
```

---

## Cómo iniciar el proyecto
Con React:

```bash
# 1) Crear proyecto
npm create vite@latest g14-crud -- --template react
cd g14-crud

# 2) Instalar dependencias
npm install

# 3) Configurar la API base
# Crear .env.local con:
# VITE_API_BASE_URL="https://<url-de-tu-api-backend>/api/v1"

# 4) Arrancar en desarrollo
npm run dev
```

---

## Entregables
- Código en el repositorio con este README actualizado.

---

## Aspectos a evaluar
- **Funcionalidad CRUD:** debe crear, listar, editar y eliminar correctamente en la API de backend.
- **Código y arquitectura:** componentes claros y separados, código entendible.
- **Estado y efectos:** uso adecuado de `useState` y `useEffect`.
- **Despliegue del proyecto** en vercel, netlify o servicios similares.

---

## Etapas de desarrollo
1. **Definir el recurso** (ej. `tasks` con `title`, `description`).
2. **Preparar el proyecto React** y configurar acceso a la API.
3. **Listar (Read):** mostrar los datos con estados de carga/error.
4. **Crear (Create):** formulario controlado y POST a la API.
5. **Editar (Update):** reusar formulario o modal para actualizar con PUT/PATCH.
6. **Eliminar (Delete):** borrar con confirmación y actualizar vista.
7. **Pulir y entregar:** presentar repositorio, si es posible deployeado.
