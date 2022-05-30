# <img src="https://raw.githubusercontent.com/FacuMasino/FacuMasino/main/assets/react-js.png" width="32"/> Proyecto final - Curso React JS
<div align="center">
  <img src="https://lh4.googleusercontent.com/UNjSnTzCo8SI75ZH-Oi6KKvvq9-Xw72LxCs_cNsgDR3f18-ZtV1fLgTKLN0VQ40KHRzjDNmFUn94HUY5bFIp=w2560-h613-rw" width="50%" title="PediMe" alt="Logo PediMe"/>
</div>
### :pizza:	Delivery de comida rápida :hamburger:	
> Para el proyecto final se eligió hacer una web-app para hacer delivery de comida rápida. La misma va a tener distintas categorías y el usuario podrá agregar al carrito el menú que desee para luego "finalizar la compra" y hacer el pedido por WhatsApp.

<div align="center">
  <a href="http://www.youtube.com/watch?v=D2pIWv4CYc4
  " target="_blank"><img src="https://lh3.googleusercontent.com/o9S7bU6hpvz29BroebQouM2bwvNiQf9kg8zGmg3A0CmEFgans0i7kCrJpq7JLfJAdNxpFE-otRTjasSE7dQl=w2560-h918-rw" 
  alt="PediMe App - Proyecto final React JS Coderhouse - Navegación" width="480" height="360" border="5" /></a>
  <p>Video demostración de la navegación</p>
</div>

> Link del proyecto online: https://pedime.netlify.app

## Tabla de contenidos
---
- [Comenzando](#comenzando)
- [Dependencias del proyecto](#dependencias-del-proyecto)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Historial de cambios y desafíos](#historial-de-cambios-y-desafíos)
## 🚀Comenzando
---
Siguiendo estas instrucciones vas a poder tener una copia del proyecto funcionando localmente

### Instalación

- Clonar el repositorio:
  ```bash
  git clone https://github.com/FacuMasino/pedime-reactjs-masino.git
  ```
- Dirigirse al directorio pedime-reactjs-masino
  ```bash
    cd pedime-reactjs-masino
  ```
- Instalar dependencias
  ```bash
    npm install
  ```

### Iniciando el proyecto
Para correr el proyecto simplemente ejecuta este comando

```bash
npm start
```

##🔌Dependencias del proyecto
---
Esta es la lista de dependencias y las versiones utilizadas

- @fortawesome/fontawesome-svg-core@6.1.1
- @fortawesome/free-brands-svg-icons@6.1.1
- @fortawesome/free-solid-svg-icons@6.1.1
- @fortawesome/react-fontawesome@0.1.18
- bootstrap@5.1.3
- sass@1.50.0
- firebase@9.8.1
- react-router-dom@6.3.0
- react-toastify@8.2.0

## 📂Estructura de carpetas
---

### src

* [assets/](.\src\assets)
  * [img/](.\src\assets\img)
* [components/](.\src\components)
  * [CartEmpty/](.\src\components\CartEmpty)
  * [CartItemList/](.\src\components\CartItemList)
    * [CartItem/](.\src\components\CartItemList\CartItem)
  * [CartWidget/](.\src\components\CartWidget)
  * [CheckoutForm/](.\src\components\CheckoutForm)
  * [Footer/](.\src\components\Footer)
  * [HeroBanner/](.\src\components\HeroBanner)
  * [Item/](.\src\components\Item)
  * [ItemCount/](.\src\components\ItemCount)
  * [ItemDetail/](.\src\components\ItemDetail)
    * [ItemDetailCarousel/](.\src\components\ItemDetail\ItemDetailCarousel)
  * [ItemDetailSkeleton/](.\src\components\ItemDetailSkeleton)
  * [ItemList/](.\src\components\ItemList)
  * [ItemListSkeleton/](.\src\components\ItemListSkeleton)
  * [NavBar/](.\src\components\NavBar)
* [contexts/](.\src\contexts)
* [helpers/](.\src\helpers)
* [pages/](.\src\pages)
  * [Cart/](.\src\pages\Cart)
  * [Checkout/](.\src\pages\Checkout)
  * [ItemDetailContainer/](.\src\pages\ItemDetailContainer)
  * [ItemListContainer/](.\src\pages\ItemListContainer)
  * [NotFound/](.\src\pages\NotFound)
* [services/](.\src\services)

### 📃Historial de cambios y desafíos
---
#### Desafío Clase 12 - Firebase II:
*Consigna:* crea tu colección de órdenes.
- Aspectos a incluir en el entregable:
  - :arrow_right: Utiliza las operaciones de inserción para insertar tu orden en la colección y dale al user su id de orden auto-generada
  - :arrow_right: Crea los mappings para poder grabar un objeto del formato 
{ buyer: { name, phone, email }, items: [{ id, title, price }], date, total  }

##### Cambios aplicados:
- :white_check_mark: Si el producto no tiene stock ahora muestra "sin stock" tanto en el componente "ItemDetail" como "Item" dentro de "ItemListContainer"
- :white_check_mark: Se creo el componente "<CheckoutForm>" que contiene el formulario que el usuario deberá llenar para hacer el pedido y pasa los datos del mismo a "Checkout" para que los procese.
- :white_check_mark: Se creó una page "/checkout" que dentro contiene la lógica para manejar los datos proporcionados por el usuario en "<CheckoutForm>", enviarlos a Firestore y mostrar el resultado, si fue exitoso o hubo un error. En caso de ser exitoso abrirá una pestaña nueva redirigiendo al usuario a WhatsApp con un mensaje predefinido. Si ocurre un error lo mostrará al usuario con un botón para volver al carrito e intentar nuevamente.
#### Desafío Clase 11 - Firebase I:
*Consigna:*
Conecta tu nueva ItemCollection de Google Firestore a tu ItemListContainer y ItemDetailContainer.
- Aspectos a incluir en el entregable:
  - :arrow_right:Conecta tu colección de firestore con el listado de ítems y con el detalle de ítem.
  - :arrow_right:Elimina los async mocks (promises) y reemplazalos por los llamados de Firestore.
  - :arrow_right:Si navegas a /item/:id, debe ocurrir una consulta de (1) documento. 
  - :arrow_right:Si navegas al catálogo, debes consultar (N) documentos con un query filtrado, implementando la lógica de categorías y obteniendo el id de categoría del parámetro de react-router :categoryId.

#### Desafío Clase 10 - Cart View
*Consigna:*
Expande tu componente Cart.js con el desglose de la compra, y actualiza tu CartWidget.js para hacerlo reactivo al contexto.
Aspectos a incluir en el entregable:
- :arrow_right: Cart.js 
  - Debe mostrar el desglose de tu carrito y el precio total.
  - Debe estar agregada la ruta ‘cart’ al BrowserRouter.
  - Debe mostrar todos los ítems agregados agrupados.
  - Por cada tipo de ítem, incluye un control para eliminar ítems.
  - De no haber ítems muestra un mensaje, de manera condicional, diciendo que no hay ítems y un react-router Link o un botón para que pueda volver al Landing (ItemListContainer.js) para buscar y comprar algo.
- :arrow_right: CartWidget.js.
  -Ahora debe consumir el CartContext y mostrar en tiempo real (aparte del ícono) qué cantidad de ítems están agregados (2 camisas y 1 gorro equivaldrían a 3 items).
  - El cart widget no se debe mostrar más si no hay items en el carrito, aplicando la técnica que elijas (dismount, style, etc).
  - Cuando el estado interno de ItemDetail tenga la cantidad de ítems solicitados mostrar en su lugar un botón que diga “Terminar mi compra” 
##### Cambios aplicados:
- :white_check_mark: Se agregó una page "NotFound" para cuándo el usuario ingrese a una ruta que no existe
- :white_check_mark: Se agregó el componente Cart con sus componentes CartItemList y CartItem para mejorar la legibilidad e independencia de cada componente
- :white_check_mark: Cada CartItem posee en su título un link que lleva al usuario al producto
- :white_check_mark: Se agregó en CartContext 2 funciones getTotalPrice y getTotalById para la correcta implementación del Cart con el detalle de los productos
- :white_check_mark: Se agregó la propiedad "subtotal" en el array "items" devuelto por CartContext para obtener el precio subtotal cuándo hay más de 1 mismo producto agregado.
- :white_check_mark: Se agregó un link "Volver" y ahora la categoría es clickeable en "ItemDetail"

#### Desafío Clase 9 - CartContext:
*Consigna:* 
Implementa React Context para mantener el estado de compra del user, siguiendo los detalles del manual.
Aspectos a incluir en el entregable:
- :arrow_right: CartContext.js con el context y su custom provider (Impórtalo en App.js)
- :arrow_right: Al clickear comprar en ItemDetail se debe guardar en el CartContext el producto y su cantidad en forma de objeto { name, price, quantity, etc. } dentro del array de productos agregados
- :arrow_right: Detalle importante: CartContext debe tener la lógica incorporada de no aceptar duplicados y mantener su consistencia.
- Métodos recomendados: 
  - addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
  - removeItem(itemId) // Remover un item del cart por usando su id
  - clear() // Remover todos los items
  - isInCart: (id) => true|false

##### Cambios aplicados:
- :white_check_mark: CartContext implementado con sus métodos
- :white_check_mark: Se agregó además las funciones canAdd y getTotalQty dentro de CartContext
- :white_check_mark: Se agregó un BannerContext para que la imagen del banner principal cambie dinámicamente según la categoría donde se encuentre navegando el usuario
#### Desafío Clase 8 - Sincronizar Counter:
*Consigna:*
Importa el ItemCount.js del desafío Nº 4 en el counter ItemDetail.js, y configura el evento de compra, siguiendo los detalles de manual.
- :arrow_right: Cuando ItemCount emita un nuevo evento onAdd almacenarás ese valor en un estado interno del ItemDetail para hacer desaparecer el ItemCount
- :arrow_right: El botón de terminar mi compra debe poder navegar a un componente vacío por el momento en la ruta ‘/cart’.

##### Cambios aplicados:
- :white_check_mark: La constante que contenía el array workDays fue movida a una carpeta "helpers" para separarlo del componente HeroBanner, ahora es accesible desde cualquier otro componente
- :white_check_mark: Se comprimió la imagen de HeroBanner y se generaron distintas imagenes según el tamaño del dispositivo, de esta forma se optimiza la velocidad de carga de la página en general. SASS se encarga de generar una media querie para cada una en el archivo HeroBanner.scss
- :white_check_mark: Se agregó la función onAddHandler en ItemDetail que guarda en un estado la cantidad de productos que el usuario eligió.
- :white_check_mark: Se agregó una condición dentro de ItemDetail para mostrar el botón de finalizar compra si es que el estado addedQty es mayor a 0.
- :white_check_mark: Se reemplazó <Link\> en el NavBar por <NavLink\> que es el componente adecuado ya que agrega por defecto la clase "active" cuándo el link correspondiente se encuentra activo.

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