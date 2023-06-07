export const validate = (form) => {

    const regexIMG = /\.(jpg|jpeg|png|gif|bmp)$/i; //verifica si la url termina en una extension de imagen valida
    const alphanumericRegex = /^[a-zA-Z0-9]+$/; // expresión regular para permitir solo letras y números

    const err = {}

    /******************************************************************************  */
        if(form.name.split("").length > 12 || form.name.split("").length < 2){
            err.name = '❌ Debe tener entre 2 y 12 caracteres'
        }
        if (!/^[a-zA-Z]+$/.test(form.name)) {
            err.name = "❌ No puede contener números";
          }
          if (!alphanumericRegex.test(form.name)) {
            err.name = "❌ No debe contener espacios ni caracteres especiales";
          }
    /******************************************************************************  */

        if(form.hp === 0 || form.hp < 0 || form.hp > 100){
            err.hp = '❌ Debe tener entre 1 y 100 puntos'
        }
        if (!alphanumericRegex.test(form.hp)) {
            err.hp = "❌ No puede contener caracteres especiales";
          }
    /******************************************************************************  */
        if(form.attack === "" || form.attack < 0 || form.attack > 255){
            err.attack = '❌ Debe tener entre 0 y 255 puntos'
        }
        if (!alphanumericRegex.test(form.attack)) {
            err.attack = "❌ No puede contener caracteres especiales";
          }
    /******************************************************************************  */
        if(form.defense === "" || form.defense < 0 || form.defense > 255 ){
            err.defense = '❌ Debe tener entre 0 y 255 puntos'
        }
        if (!alphanumericRegex.test(form.defense)) {
            err.defense = "❌ No puede contener caracteres especiales";
          }
    /******************************************************************************  */
        if(form.speed === "" || form.speed < 1 || form.speed > 255 ){
            err.speed = '❌ Debe tener entre 1 y 255 puntos'
        }
        if (!alphanumericRegex.test(form.speed)) {
            err.speed = "❌ No puede contener caracteres especiales";
          }
    /******************************************************************************  */
        if(form.height === "" || form.height < 1 || form.height > 20 ){
            err.height = '❌ Debe tener entre 1 y 20 decimetros'
        }
        if (!alphanumericRegex.test(form.height)) {
            err.height= "❌ No puede contener caracteres especiales";
          }
    /******************************************************************************  */
        if(form.weight === "" || form.weight < 1 || form.weight > 1000 ){
            err.weight = '❌ Debe tener entre 1 y 1000 hectogramos'
        } 
        if (!alphanumericRegex.test(form.weight)) {
            err.weight = "❌ No puede contener caracteres especiales";
          }
    /******************************************************************************  */
        if(form.types.length === 0 || form.types.length > 2 ){
            err.types = '❌ Debe tener 2 tipos como maximo'
        }
    /******************************************************************************  */
        if(!regexIMG.test(form.image)){
            err.image = '❌ Ingresa una url valida'
        }
    /******************************************************************************  */
        return err

}