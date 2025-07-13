# 🧠 portfolio2025-backend-nodejs

Backend profesional del portafolio personal de Felipe Henríquez. Este servicio está desarrollado con Node.js + Express + TypeScript y expone una API RESTful conectada a MongoDB Atlas.

## 📌 Funcionalidad principal

Este backend administra el contenido de la página de inicio del portafolio (sección Hero). Soporta operaciones CRUD completas sobre un único documento mediante el endpoint `/home`.

---

## ⚙️ Stack tecnológico

| Tecnología     | Versión         |
|----------------|-----------------|
| Node.js        | 20.x LTS        |
| Express        | 5.x             |
| TypeScript     | 5.8.3           |
| Mongoose       | 8.x             |
| Jest + Supertest | Testing & cobertura |
| Swagger        | Documentación de API |
| MongoDB Atlas  | Base de datos en la nube |

---

## 📦 Requisitos

- Node.js 20.x
- npm 9+
- Cuenta en MongoDB Atlas (URI)

---

## 🚀 Instalación

```bash
git clone https://github.com/FelipeDanielH/portfolio2025-backend-nodejs.git
cd portfolio2025-backend-nodejs
npm install
```

---

## ⚙️ Variables de entorno

Crea un archivo `.env` en la raíz con el siguiente contenido:

```env
PORT=4000
MONGODB_URI=mongodb+srv://usuario:clave@cluster.mongodb.net/portfolio2025
```

---

## ▶️ Comandos disponibles

```bash
npm run dev       # Levanta el servidor en modo desarrollo
npm run build     # Compila a JavaScript en /dist
npm start         # Ejecuta desde /dist
npm test          # Ejecuta los tests con Jest
npm run test:cov  # Ejecuta los tests y muestra cobertura
```

---

## 🧪 Pruebas

Las pruebas están desarrolladas con **Jest** y **Supertest**, conectando a una base real de MongoDB Atlas. Se prueban los siguientes casos:

- `GET /home` → 404 si no hay documento
- `POST /home` → Inserta documento
- `DELETE /home` → Elimina documento

El reporte de cobertura se genera en `/coverage`.

---

## 📂 Estructura del proyecto

```
src/
│
├── config/           # Conexión a MongoDB
├── controllers/      # Lógica de negocio (CRUD)
├── routes/           # Definición de rutas
├── models/           # Esquemas de Mongoose
├── middlewares/      # Validaciones, manejo de errores
├── docs/             # swagger.yaml (API docs)
├── __tests__/        # Pruebas con Jest
└── index.ts          # Punto de entrada
```

---

## 📚 Documentación de API

Disponible en:

```
GET http://localhost:4000/api-docs
```

> Basada en Swagger + YAML (`src/docs/swagger.yaml`)

---

## ✅ Buenas prácticas aplicadas

- Arquitectura modular y escalable
- Validaciones con `express-validator`
- Middlewares reutilizables
- Commit semántico con Conventional Commits
- Código tipado y con ESLint
- Testing real con cobertura
- Documentación en Swagger

---

## 👨‍💻 Autor

**Felipe Henríquez**  
[LinkedIn](https://linkedin.com/in/felipe-henriquez)  
[Portafolio](https://felipehenriquez.vercel.app)
