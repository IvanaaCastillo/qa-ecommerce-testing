# Casos de Prueba - Login

## TC_LOGIN_001 - Login exitoso

**Precondiciones:**
Usuario registrado

**Pasos:**
1. Ir a la página de login
2. Ingresar usuario: standard_user
3. Ingresar contraseña: secret_sauce
4. Hacer clic en login

**Resultado esperado:**
El usuario accede al sistema correctamente


---

## TC_LOGIN_002 - Login con contraseña incorrecta

**Precondiciones:**
Usuario registrado

**Pasos:**
1. Ir a la página de login
2. Ingresar usuario: standard_user
3. Ingresar contraseña incorrecta
4. Hacer clic en login

**Resultado esperado:**
Se muestra un mensaje de error


---

## TC_LOGIN_003 - Campos vacíos

**Pasos:**
1. Ir a la página de login
2. Hacer clic en login sin ingresar datos

**Resultado esperado:**
Se muestra validación de campos obligatorios

# Casos de Prueba - Carrito

## TC_CART_001 - Agregar producto al carrito

**Precondiciones:**
Usuario logueado en el sistema

**Pasos:**
1. Iniciar sesión con usuario válido
2. Hacer clic en "Add to cart" en un producto

**Resultado esperado:**
El producto se agrega correctamente al carrito


---

## TC_CART_002 - Eliminar producto del carrito

**Precondiciones:**
Usuario con al menos un producto en el carrito

**Pasos:**
1. Ir al carrito
2. Hacer clic en "Remove"

**Resultado esperado:**
El producto se elimina del carrito


---

## TC_CART_003 - Visualizar carrito

**Precondiciones:**
Usuario logueado

**Pasos:**
1. Hacer clic en el ícono del carrito

**Resultado esperado:**
Se muestran los productos agregados