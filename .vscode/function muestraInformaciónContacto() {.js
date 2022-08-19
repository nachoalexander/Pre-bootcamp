function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
// El console.log imprimira la imformacion de los contactos 
/* T diagrama
Variables             |  Value
auntContactInfo       |  ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]; 
*/
function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
// El console.log imprimira que se conjelen las verduras y el helado 
/* T diagrama
Variables           |  Value
produce             |  ["manzanas", "naranjas"]; 
frozen              |  ["brócoli", "helado"];  

*/

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);
// El console.log imprimira mover a la libreria 
/* T diagrama

Variables         |  Value
movieLibrary      |  [Bambi", "E.T.", "Toy Story]; 

*/
