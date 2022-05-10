# <img src="https://raw.githubusercontent.com/FacuMasino/FacuMasino/main/assets/react-js.png" width="32"/> Proyecto final - Curso React JS
## PediMe App :motor_scooter:	
### :pizza:	Delivery de comida rápida :hamburger:	
> Para el proyecto final se eligió hacer una app para hacer delivery de comida rápida. La misma va a tener distintas categorías y el usuario podrá agregar al carrito el/los menú que desee para luego "finalizar la compra" y hacer el pedido por WhatsApp.

#### Desafío Clase 8: Sincronizar Counter:
*Consigna:*
Importa el ItemCount.js del desafío Nº 4 en el counter ItemDetail.js, y configura el evento de compra, siguiendo los detalles de manual.  
:arrow_right: Cuando ItemCount emita un nuevo evento onAdd almacenarás ese valor en un estado interno del ItemDetail para hacer desaparecer el ItemCount  
:arrow_right: El botón de terminar mi compra debe poder navegar a un componente vacío por el momento en la ruta ‘/cart’.  

##### Cambios aplicados:
 :white_check_mark: La constante que contenía el array workDays fue movida a una carpeta "helpers" para separarlo del componente HeroBanner, ahora es accesible desde cualquier otro componente  
:white_check_mark: Se comprimió la imagen de HeroBanner y se generaron distintas imagenes según el tamaño del dispositivo, de esta forma se optimiza la velocidad de carga de la página en general. SASS se encarga de generar una media querie para cada una en el archivo HeroBanner.scss  
:white_check_mark: Se agregó la función onAddHandler en ItemDetail que guarda en un estado la cantidad de productos que el usuario eligió.  
:white_check_mark: Se agregó una condición dentro de ItemDetail para mostrar el botón de finalizar compra si es que el estado addedQty es mayor a 0.  
:white_check_mark: Se reemplazó <Link\> en el NavBar por <NavLink\> que es el componente adecuado ya que agrega por defecto la clase "active" cuándo el link correspondiente se encuentra activo.  

#### Primer entrega del proyecto final
*Consigna:*
- Configurar en App.js el routing usando BrowserRouter con react-router-dom.
- Rutas a configurar:
  - '/' navega a <ItemListContainer\/>
  - 'category/:categoryId' <ItemListContainer\/>
  - 'item/:itemId' <ItemDetailContainer\/>
- Links a configurar:
  - Click en brand navega a '/'
  - Click en un Item.js navega a '/item/:itemId'
  - Click en categorya lleva a 'category/:categoryId'

##### Cambios aplicados:
- Se re-ordenaron las carpetas de los componentes para mayor legibilidad y se agregó la carpeta 'pages' para separar las páginas principales de los componentes.
- Se agregaron en getProducts.js 2 funciones, getProductById(id) para obtener 1 producto y getProductsByCategory(category) para filtrar por categoria, así se consigue limpiar el código dentro de la lógica useEffect de cada página y hacer más sencillo el código.
- Se agregaron nuevos productos necesarios para cumplir con el desafío y contar con distintas categorías.
- Mejoras generales en el CSS
- Se agregó una función sencilla onAddFn() dentro de ItemDetail.jsx que muestra un mensaje emergente con la librería react-toastify para simular que se agregó el producto al carrito.

*GIF de demostración:*

![GIF de demostración](https://lh6.googleusercontent.com/RMC3rnCZ9Xn8Bmc40qfbffFF1NwBqFMT6ne-0aMDXxujYuIqbeV-XryV8rKb-0yoq0Ib6zfW_f7NiTGkayh9=w1274-h436)

#### Desafío Clase 6 - Detalle de Producto
*Consigna:*
- Crea tu componente ItemDetailContainer, con la misma premisa que ItemListContainer.
- Al iniciar utilizando un efecto de montaje, debe llamar a un async mock, utilizando lo visto en la clase anterior con Promise, que en 2 segundos le devuelva un 1 ítem, y lo guarde en un estado propio.
- crea tu componente ItemDetail.js.
- ItemDetail.js, que debe mostrar la vista de detalle de un ítem incluyendo su descripción, una foto y el precio.
  
##### Cambios aplicados:
- Se crearon los componentes ItemDetailContainer.jsx e ItemDetail.jsx
- Se agregaron 2 componentes extras, ItemDetailCarousel e ItemDetailSkeleton. El primero es para mostrar distintas imágenes del producto en caso de haberlas, y el segundo para mostrar un componente de "cargando.." mientras se resuelve la promesa.
- Se agregó un banner en el header de la página
- Se agregó un Footer en la página para mostrar información de contacto, horarios y redes sociales
#### Desafío Clase 5 - Catálogo con Map y Promises
*Consigna:*
- Crea los componentes Item.js e ItemList.js para mostrar algunos productos en tu ItemListContainer.js. 
- Los ítems deben provenir de un llamado a una promise que los resuelva en tiempo diferido (setTimeout) de 2 segundos, para emular retrasos de red

#### Desafío Clase 4 - Contador con botón
*Consigna:*
- Crea un componente ItemCount.js, que debe estar compuesto de un botón y controles, para incrementar y decrementar la cantidad requerida de ítems.
- El número contador nunca puede superar el stock disponible
- De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd
- Si hay stock al clickear el botón se debe ejecutar onAdd con un número que debe ser la cantidad seleccionada por el usuario.

#### Desafío Clase 3 - Crea tu landing
*Consigna:*
- Crear un componente CartWidget.js ubicado en el NavBar
- Crear un componente contenedor ItemListContainer con prop greeting que muestre un mensaje

#### Desafío Clase 2 - Menú e-commerce
*Consigna:*
- Craer una carpeta dentro de src llamada "components", que contenga a NavBar.js para crear una barra de menú simle.

##### Cambios aplicados:
- Se incorporaron los estilos de Bootstrap.css y scripts de Bootstrap.js
- Componente NavBar agregado

#### Desafío Clase 1 - Crear la App utilizando el CLI
*Consigna:*
- Crear una aplicación utilizando el CLI con el nombre de tu tienda, y ejecuta los comandos necesarios para instalar React, configurarlo y visualizarlo en tu navegador.