# Examen Final
## Programación Web II

### Antes de Empezar:

1. Realiza un **Fork** de este repositorio:
![Repositorio del Examen Final](https://live.staticflickr.com/65535/53488416675_1431173e35_z.jpg)
2. Si vas a trabajar en tu equipo local clona el nuevo repositorio resultado del **Fork** y abrelo con **VSCode** o el editor de tu preferencia para trabajar tu solución. También puedes trabajar tu solución en **GitHub Codespaces** o **GitPot**.
3. En la terminal ejecuta el siguiente comando `npm install` para instalar las dependencias del proyecto 
4. En la terminal ejecuta `npm run dev` para desplegar la app
5. Limpia el proyecto y crea la carpeta `components` dentro de `scr/app`


### Contexto:

Estás postulando para un puesto de desarrollador **Front-end** en una empresa que trabaja con clientes internacionales. Para poner a prueba tus habilidades te han pedido construir una aplicación web en **Next.js** que permita visualizar los datos de un **Pokemon**. Para esto te han asignado un Pokemon, te han proporcionado la documentación de la API de Pokemon para obtener los datos que debe consumir tu aplicación y te han proporcionado el **diseño de UI/UX mínimo** [Figma](https://cutt.ly/YwL1XB9s) que debe cumplir tu aplicación.
| id del Pokemon |
|----------------|
| # 185 |

#### Documentación de la API de Pokemon:
`GET https://pokeapi.co/api/v2/pokemon/185`

##### Pokemon (Tipo)

|sudowoodo|Descripción|Tipo|
|------|-----------|----|
|id|El identificador del Pokemon|Entero|
|name|El nombre del Pokemon|Cadena|
|height|La altura del Pokemon en decímetros (dm)|Entero|
|weight|El peso del Pokemon en hectogramos (hg)|Entero|
|abilities|Lista de habilidades potenciales que el Pokemon puede tener|Lista PokemonAbility|
|sprites|Conjunto de imágenes usadas para representar al Pokemon|PokemonSprites|
|stats|Una lista de estadísticas base para este Pokemon|Lista PokemonStat|
|types|Una lista detallando a qué tipo de Pokemon pertenece|Lista  PokemonType|

##### PokemonAbility (Tipo)
|Nombre|Descripción|Tipo|
|------|-----------|----|
|ability|La habilidad que puede tener el Pokemon|NamedAPIResource (Ability)|

##### PokemonType (Tipo)
|Nombre|Descripción|Tipo|
|------|-----------|----|
|slot|El orden en el que se listan los tipos del Pokemon|Entero|
|type|El tipo que tiene el Pokemon|NamedAPIResource (Type)|

##### PokemonStat (Tipo)
|Nombre|Descripción|Tipo|
|------|-----------|----|
|stat|Las estadísticas que el Pokemon tiene|NamedAPIResource (Stat)|
|base_stat|El valor base de la estadística|Entero|

##### PokemonSprites (Tipo)
|Nombre|Descripción|Tipo|
|------|-----------|----|
|front_default|La imagen por defecto del Pokemon vista desde el frente en Batalla|Cadena|
|front_shiny|La imagen shiny del Pokemon vista desde el frente en Batalla|Cadena|
|back_default|La imagen por defecto del Pokemon vista desde detrás en Batalla|Cadena|
|back_shiny|La imagen shiny del Pokemon vista desde detrás en Batalla|Cadena|

##### NamedAPIResource (Tipo)
|Nombre|Descripción|Tipo|
|------|-----------|----|
|name|El nombre del recurso puede ser una habilidad, una forma, un nombre de un juego, una estadística base, etc.|Cadena|


### Tareas:
1. En este README.md debes colocar el **id del Pokemon** que te ha sido asignado y realizar un commit con el mensaje **"Asignación de Pokemon"**.
2. Debes construir una aplicación en **Next.js** con los componentes necesarios para cumplir con el diseño mínimo de UI/UX presentado en [Figma ](https://cutt.ly/YwL1XB9s)

![Diseño Pokedex](https://live.staticflickr.com/65535/53488146658_c14ae2d79c_z.jpg)


#### IMPORTANTE: 
* Para construir los componentes debes utilizar lo aprendido en clase: Next.js, JSX, eventos, estados, grid, flexbox, clases, etc. **Sin estilos CSS tu solución solo será considerada código sin sentido**. No se permite el uso de tablas

* La paleta de colores, textos, imágenes, iconos tienen que ser iguales al diseño presentado en Figma


### Entrega:
Una vez tengas la app en **Next.js** debes realizar un commit con todos tus cambios a **tu repositorio de GitHub** del examen y adjuntar el enlace del mismo en la tarea asignada en **ClassRoom**.

