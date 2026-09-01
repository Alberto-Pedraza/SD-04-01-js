const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  //*Agregar un solo número a una fila existente
  arr[0].push(10); //Aquí hacemos que se anexe el número 10 al final de la primera fila del array
  console.log(arr);

  //*Agregar una fila completa de números
  arr.push([30,31,32,33,34,35,36,37,38,39]);
  console.log("========Agregar fila completa==========");
  console.log(arr);

  //* Eliminar un solo número de una fila específica
  arr[0].splice(10,1);
  console.log("========Eliminar un sólo número de una fila específica==========");
  console.log(arr);
  
  //* Invertir una de las filas sin afectar a las demás.
  arr[3].reverse();
  console.log("========Invertir el orden de una fila específica==========");
  console.log(arr);
  // Type your code above this line!