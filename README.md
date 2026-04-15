# QA E-commerce Testing Project

## 📌 Descripción
Proyecto de testing manual sobre funcionalidades de login y carrito.

## 🧪 Casos probados
- Login
- Agregar productos al carrito
- Eliminación de productos

## 🐞 Bugs
Incluye reporte de bugs simulados para práctica QA.

## 🛠️ Herramientas
- Pruebas manuales
- Documentación en Markdown

## 📂 Archivos
- test-cases.md
- bug-reports.md

## 🤖 Automatización

Se implementaron pruebas automatizadas utilizando Cypress.

### Tests incluidos:
- Login exitoso
- Login inválido

### ▶️ Cómo ejecutar
1. Instalar dependencias:
   npm install

2. Abrir Cypress:
   npx cypress open

## ⚙️ CI/CD

Se implementó integración continua utilizando GitHub Actions.

Cada vez que se realiza un push al repositorio:
- Se instalan dependencias automáticamente
- Se ejecutan los tests de Cypress
- Se valida el correcto funcionamiento del sistema

Esto permite detectar errores de forma temprana.
