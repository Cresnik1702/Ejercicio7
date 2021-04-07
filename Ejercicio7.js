// Este ejercicio nos pide crear un array con 10 posiciones y decir
// cual es el valor mas grande de todo el array.

// El pseudocodigo es el siguiente:

//  Algoritmo num_ordenador
	
//  	Definir i Como Entero;
//  	Definir num Como Entero;
//  	Definir m Como Entero;
//  	m<-0;
	
//  	Para i<-0 Hasta 10 Con Paso 1 Hacer
//  		Escribir "Dame un número";
//  		Leer num;
		
//  		Si num>=m Entonces
//  			m<-num;
//  		FinSi
//  	FinPara
	
//  	Escribir " Tu numero maximo es: ", m;
	
//  FinAlgoritmo



let num = 0;
let nmayor = 0;

    for (let posicion = 0; num < 10; num++) {
        
      let posicion = parseInt(prompt("Dame el número que ira en la posición " + num));
  
      console.log ("El número introducido es: " + posicion);

      if (posicion >= nmayor) {
    
        nmayor = posicion;     

      };  

    };

  console.log ("El número mayor es el: " + nmayor);