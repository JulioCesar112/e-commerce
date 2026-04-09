# 🛒 E-commerce API

Backend para un sistema de comercio electrónico desarrollado con **Node.js**, **Express** y **PostgreSQL**, enfocado en buenas prácticas, seguridad y escalabilidad.

---

## 🚀 Características

* 🔐 Autenticación con JWT
* 🛡️ Protección de rutas con Passport
* 👤 Manejo de roles (admin / user)
* 📦 CRUD de usuarios
* 🗂️ Arquitectura modular (routes, services, middlewares)
* 🔑 Encriptación de contraseñas con bcrypt
* 📄 Documentación con Swagger
* 🧾 Base de datos PostgreSQL con Sequelize

---

## 🧰 Tecnologías utilizadas

* Node.js
* Express
* PostgreSQL
* Sequelize
* Passport JWT
* JSON Web Token
* bcrypt
* Swagger

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/e-commerce.git
cd e-commerce
```

2. Instala dependencias:

```bash
npm install
```

---

## ⚙️ Variables de entorno

Crea un archivo `.env` en la raíz:

```env
PORT=3000

DB_NAME=tu_base_de_datos
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_HOST=localhost

JWT_SECRET=tu_secreto_super_seguro
JWT_EXPIRES=1h
```

---

## ▶️ Ejecutar el proyecto

```bash
npm run dev
```

o

```bash
node index.js
```

---

## 🔐 Autenticación

Este proyecto usa JWT con Passport:

* Login genera un token
* El token se envía en cada request protegida:

```http
Authorization: Bearer TOKEN
```

---

## 🛡️ Protección de rutas

Las rutas protegidas usan:

```js
passport.authenticate("jwt", { session: false })
```

Y para admin:

```js
adminValidate
```

---

## 📚 Endpoints principales

### 👤 Usuarios

* `GET /users` → Obtener todos (admin)
* `GET /users/me` → Usuario actual
* `PATCH /users/me` → Actualizar usuario
* `DELETE /users/me` → Eliminar cuenta

### 🔐 Auth

* `POST /login` → Iniciar sesión
* `POST /register` → Crear usuario

---

## 🧪 Documentación API

Disponible con Swagger en:

```
http://localhost:3000/api-docs
```

---

## 🗂️ Estructura del proyecto

```
src/
│
├── models/
├── routes/
├── services/
├── middlewares/
├── utils/
│
└── app.js
```

---

## 🔒 Seguridad

* Contraseñas hasheadas con bcrypt
* Tokens JWT con expiración
* Middleware de autenticación
* Control de acceso por roles

---

## 🚀 Próximas mejoras

* Refresh Tokens
* Sistema de órdenes
* Carrito de compras
* Pagos en línea
* Logs de auditoría

---

## 👨‍💻 Autor

Desarrollado por Julio Cesar

---

## 📄 Licencia

