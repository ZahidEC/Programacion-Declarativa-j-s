var  JUGAR  =  1 ;
var  FIN  =  0 ;
var  estado del juego  =  JUGAR ;

var  trex ,  trex_running ,  choque ;
var  terreno , terreno  invisible ,  imagen del terreno ;

var  gruponubes ;
var  nubeImagen ;
var  obstaculosGrupo ;
var  obstaculo1 ,  obstaculo2 ,  obstaculo3 ,  obstaculo4 ,  obstaculo5 ,  obstaculo6 ;

 puntuación var = 0 ;

var  gameOver ,  reiniciar ;

función  de precarga ( ) {

  trex_running  =  loadAnimation ( "trex1.png" , "trex3.png" , "trex4.png" ) ;
  choque  =  loadAnimation ( "choque.png" ) ;

  imagen de suelo = imagen de carga ( " suelo2.png " ) ;
  cloudImage = loadImage ( "nube.png" ) ;

  obstáculo1 = cargarImagen ( "obstáculo1.png" ) ;
  obstáculo2 = cargarImagen ( "obstáculo2.png" ) ;
  obstáculo3 = cargarImagen ( "obstáculo3.png" ) ;
  obstáculo4 = cargarImagen ( "obstáculo4.png" ) ;
  obstáculo5 = cargarImagen ( "obstáculo5.png" ) ;
  obstáculo6 = cargarImagen ( "obstáculo6.png" ) ;
  gameOverImage = loadImage ( "gameOver.png" ) ;
  reiniciarImagen = cargarImagen ( "reiniciar.png" ) ;
}
 configuración de funciones ( )  {
  crearCanvas ( 600 , 200 ) ;

  trex = createSprite ( 50 , 180 , 20 , 50 ) ;
  trex _ addAnimation ( "corriendo" , trex_running ) ;
  trex _ escala = 0,5 ;
  terreno = createSprite ( 200 , 180 , 400 , 20 ) ;
  suelo _ addImage ( "tierra" , imagentierra ) ;
  suelo _ x = suelo . ancho / 2 ;
  //tierra.velocidadX=-3;
  suelo invisible = createSprite ( 200 , 190 , 400 , 20 ) ;
  suelo invisible . visible = falso ;
  gameOver = createSprite ( ancho / 2 , alto / 3 ) ;
  juego terminado addImage ( juegoSobreImagen ) ;
  juego terminado escala = 0,7 ;

  reiniciar = createSprite ( ancho / 2 , alto / 2 ) ;
  reiniciar _ agregarImagen ( reiniciarImagen ) ;
  reiniciar _ escala = 0,7 ;


  juego terminado visible = falso ;
  reiniciar _ visible = falso ;
  gruponubes  =  nuevo  Grupo ( ) ;
  obstaculosGroup  =  new  Group ( ) ;
}

función  dibujar ( )  {
fondo ( 150 ) ;
texto ( "Puntuación"  +  puntuación , 500 , 50 ) ;

if ( estado del juego === JUGAR ) {
  puntuación = puntuación  +  Matemáticas . redondo ( getFrameRate ( ) / 50 ) ; //conteo del score

  suelo _ velocidadX = - 3 ;
  si ( suelo . x < 0 )
    suelo _ x = suelo . ancho / 2 ;

    trex _ chocar ( suelo invisible ) ;
  si ( tecla abajo ( "espacio" )  &&  trex . y <= 160 )  
    trex _ velocidad Y = - 10 ;

    trex _ velocidad Y = trex . velocidad Y + 0.8 ;
 
    engendrarNubes ( ) ;
    engendrarObstáculos ( ) ;
  }
    if ( obstáculosGroup . isTouching ( trex ) ) {
      estado del juego = FIN ;
    } else  if ( estado del juego === FIN ) {
      juego terminado visible = verdadero ;
      reiniciar _ visible = verdadero ;

      suelo _ velocidadX = 0 ;
      trex _ velocidadX = 0 ;
      ObstáculosGrupo . establecerVelocidadXCada ( 0 ) ;
      grupo de nubes . establecerVelocidadXCada ( 0 ) ;


      trex _ changeAnimation ( "chocó" , choque ) ;

      ObstáculosGrupo . setLifetimeEach ( -1 ) ; _
      grupo de nubes . setLifetimeEach ( -1 ) ; _

      if ( mousePressedOver ( reinicio ) ) {
        restablecer  ( ) ;
      }
    }
    dibujarSprites ( ) ;
}

function  generar nubes ( ) {
  si ( recuento de fotogramas % 100 == 0 ) {
    var  nube  =  createSprite ( 600 , 120 , 40 , 10 ) ;
    nube _ y = Matemáticas . redondo ( aleatorio ( 10 , 140 ) ) ;
    nube _ addImage ( "nubes" , cloudImage ) ;
    nube _ escala = 0,5 ;
    nube _ velocidadX = - 2 ;
    nube _ vida útil = 310 ;
    nube _ profundidad = trex . profundidad ;
    trex _ profundidad = trex . profundidad + 1 ;
  }
}
  función  generarObstáculos ( ) {
    if  ( número de cuadros  %  80  ===  0 ) {
    var  obstáculo =  createSprite ( 600 , 165 , 10 , 40 ) ;
    
    obstáculo _ velocidadX = - 6 ;

    var  corrió = Matemáticas . redondo ( aleatorio ( 1 , 6 ) ) ;
    cambiar ( corrió ) {
      caso  1 : obstáculo . addImage ( obstáculo1 ) ;
      romper ;
      caso  2 : obstáculo . addImage ( obstáculo2 ) ;
      romper ;
      caso  3 : obstáculo . addImage ( obstáculo3 ) ;
      romper ;
      caso  4 : obstáculo . addImage ( obstáculo4 ) ;
      romper ;
      caso  5 : obstáculo . addImage ( obstáculo5 ) ;
      romper ;
      caso  6 : obstáculo . addImage ( obstáculo6 ) ;
      romper ;
      predeterminado : romper ;
    }
    obstáculo _ escala = .5 ;
    obstáculo _ vida útil = 310 ;

    ObstáculosGrupo . añadir ( obstáculo ) ;
  }
}
 reinicio de función ( ) {
  estado del juego  =  JUGAR ;
  trex _ visible = verdadero ;
  juego terminado visible = falso ;
  reiniciar _ visible = falso ;
  ObstáculosGrupo . destruir cada uno ( ) ;
  grupo de nubes . destruir cada uno ( ) ;
  trex _ changeAnimation ( "corriendo" , trex_running ) ;
  puntuación = 0 ;

}
