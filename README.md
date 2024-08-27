# oracle-proyecto-encriptador
Proyecto de html, css y js para encriptar texto.

DESCRIPCIÓN

Este proyecto permite encriptar y desencriptar textos siguiendo reglas específicas de sustitución de caracteres. Los usuarios pueden ingresar un texto en minúsculas sin acentos y obtener su equivalente encriptado o desencriptado con un clic. También incluye validación de entradas para asegurar que los usuarios utilicen solo caracteres válidos.
La aplicación está diseñada para convertir ciertas vocales en palabras clave según las siguientes reglas de encriptación:
  - `e` → `enter`
  - `i` → `imes`
  - `a` → `ai`
  - `o` → `ober`
  - `u` → `ufat`
  De manera similar, la aplicación permite desencriptar un texto que haya sido encriptado siguiendo estas reglas. La interfaz es intuitiva y está adaptada para funcionar correctamente en dispositivos de diferentes tamaños (es decir, es responsiva).


CARACTERÍSTICAS

- **Encriptar texto:** Convierte letras específicas en secuencias de caracteres más largas.
- **Desencriptar texto:** Reconvierte el texto encriptado a su estado original.
- **Validación de entradas:** Asegura que el usuario solo pueda ingresar letras minúsculas y espacios, excluyendo números, mayúsculas o caracteres especiales.


ESTRUCTURA

  El proyecto contiene los siguientes archivos principales:
- **`index.html`**: La estructura HTML de la página, que incluye los campos de entrada y botones para encriptar, desencriptar y copiar el texto.
- **`style.css`**: Los estilos que definen el diseño y la apariencia visual de la aplicación, adaptados para varios dispositivos mediante el uso de `flexbox` y `media queries`.
- **`script.js`**: El archivo JavaScript que contiene la lógica para encriptar, desencriptar, validar las entradas del usuario y manejar la interacción con la interfaz.

REQUISITOS

Este proyecto no tiene requisitos de instalación especiales más allá de un navegador.

USO

  1. Clona el repositorio o descarga los archivos del proyecto.
  2. Abre el archivo `index.html` en un navegador web.
  3. Ingresa tu texto en el área de texto principal.
  4. Haz clic en el botón "Encriptar" para encriptar el texto, o en el botón "Desencriptar" para revertir el texto encriptado a su forma original.
  5. Puedes copiar el resultado utilizando el botón "Copiar".

EJEMPLO

  Entrada:   hola mundo
  Encriptado:  hoberlai mufatndober
  Desencriptado:  hola mundo

PERSONAIZACIÓN

  Si deseas modificar las reglas de encriptación o realizar otros ajustes, puedes modificar la matriz en el archivo `script.js`. La matriz `matrizCodigo` define las reglas de sustitución de caracteres. Simplemente edita los valores de acuerdo con tus necesidades.
  ```
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  ```

CRÉDITOS

  Este proyecto fue desarrollado por Luis Araiza como un ejercicio práctico para implementar funcionalidades de HTML, CSS y JavaScript aprendidas a lo largo del curso ORACLE ONE EDUCATION en conjutno con ALURA.
