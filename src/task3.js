const arr = [1,2,3,4,5,6,7,9,10,11,12]

// Escribe tu codigo por debajo de esta linea
//* Se utilizará el método .splice para insertar el número faltante en su posición correcta.
arr.splice(7,0,8);
console.log(arr);
//? En este caso, el número faltante era el 8, en la posición con índice 7. Los argumentos del método .splice se refieren primero al índice desde donde comienza a modificar, después al número de elementos que se van a eliminar y, por último, los que se van a agregar.

// TEscribe tu codigo por encima de esta linea

//No tocar esta funcion
export function taskArr(){
  return arr;
}
