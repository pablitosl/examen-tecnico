function encontrarSumaDosElementos(array, X) {
   const complementos = {}; // Objeto para almacenar los complementos encontrados, osea el numero que sumado al numero actual de la iteracion de array, da X

   
   for (let i = 0; i < array.length; i++) {
     const num = array[i];
     const complemento = X - num;
     // Si el complemento ya existe en el objeto de complementos, significa que ya se encontraron los dos elementos que suman X
     if (complemento in complementos) {
       return true;
     }
     
     complementos[num] = true; // Agregar el elemento al objeto de complementos
   }
   
   return false; // No se encontraron dos elementos que sumen X
 }
 
 // Ejemplo de uso

 //1
 const nums = [1,4,3,9];
 const requiredSum = 8;
 const resultado = encontrarSumaDosElementos(nums, requiredSum);
 console.log('Ejemplo 1:', resultado); // Output: false

 //2
 const nums2 = [1,2,4,4];
 const requiredSum2 = 8;
 const resultado2 = encontrarSumaDosElementos(nums2, requiredSum2);
 console.log('Ejemplo 2:',resultado2); // Output: true