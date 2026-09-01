const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14]

// Escribe tu codigo por debajo de esta linea
//*Aquí también se utilizará el método .splice pero ahora sí se eliminaran valores.
arr.splice(4,1);
console.log(arr);
//? En este caso sólo se le dice la posición a partir de la cual se harán cambios y cuántos elementos se eliminarán.
// Escribe tu codigo por encima de esta linea

//No tocar esta funcion
export function taskArr(){
  return arr;
}
