1º MAIN.TS 
En el main se opta por iniciar Firebase Admin mediante las credenciales obtenidas del archivo 
Firebase.json, no es la mejor practica pasar el archivo de forma directa.
Es mejor pasar las variables al fichero .ENV y desde ahi generar las credenciales directamente en el main o desde App.Config.Service.TS. 
Se pasa el archivo porque no se consigue hacer fucnionar de la forma previamente explicada. 

2º Estructura carpeta Vehicles
Se opta por copiar el ejemplo dado asumiendo que el ejemplo dado muestra todas las buenas practicas y la estructura que se desea ver en la entrega final. 

3º Flujo 
Se hace la llamada con firebase-admin en el repositorio, se obtiene asi el valor de la ultima snapshot. Este valor lo recoge el servicio que filtra los datos creando la lista de vehiculos y filtrando segun el color introducido en la llamada, por ultimo el controller valida el parametro de entrada del color y emite un 400 si es un color no incluido en la lista. 

Me surgen dudas al utilizar el Promise sobre si esta bien ir pasando los datos asi o era mejor establecer un "await" en algun punto y dejar de trabajar con metodos asincronos. 

4º Color DTO
Se crea un ColorDTO ya que hacer la validacion directamente en el modelo parecia erroneo y confuso. 

4º App Config Service
Este metodo crea una union entre el .ENV y la aplicacion. Es la parte de la que menos orgulloso me siento, debe de haber una mejor forma de generar las constantes y asi poder quitar el "Global:true" de las configuraciones, haciendo accesible el env solo desde la clase y añadiendo capas de seguridad, pero no he logrado dar con la forma de implementar esa clase. 

