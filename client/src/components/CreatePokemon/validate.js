export const validate = (form) => {

    const regexIMG = /\.(jpg|jpeg|png|gif|bmp)$/i; //verifica si la url termina en una extension de imagen valida
    const alphanumericRegex = /^[a-zA-Z0-9]+$/; // expresión regular para permitir solo letras y números

    const err = {}

    /******************************************************************************  */
        if(form.name.split("").length > 12 || form.name.split("").length < 2){
            err.name = '❌ Must be between 2 and 12 characters'
        }
        if (!/^[a-zA-Z]+$/.test(form.name)) {
            err.name = "❌ Cannot contain numbers";
          }
          if (!alphanumericRegex.test(form.name)) {
            err.name = "❌ Must not contain spaces or special characters";
          }
    /******************************************************************************  */

        if(form.hp === 0 || form.hp < 0 || form.hp > 100){
            err.hp = '❌ Must have between 1 and 100 points'
        }
        if (!alphanumericRegex.test(form.hp)) {
            err.hp = "❌ Cannot contain special characters";
          }
    /******************************************************************************  */
        if(form.attack === "" || form.attack < 0 || form.attack > 255){
            err.attack = '❌ Must have between 0 and 255 points'
        }
        if (!alphanumericRegex.test(form.attack)) {
            err.attack = "❌ Cannot contain special characters";
          }
    /******************************************************************************  */
        if(form.defense === "" || form.defense < 0 || form.defense > 255 ){
            err.defense = '❌ Must have between 0 and 255 points'
        }
        if (!alphanumericRegex.test(form.defense)) {
            err.defense = "❌ Cannot contain special characters";
          }
    /******************************************************************************  */
        if(form.speed === "" || form.speed < 1 || form.speed > 255 ){
            err.speed = '❌ Must have between 1 and 255 points'
        }
        if (!alphanumericRegex.test(form.speed)) {
            err.speed = "❌ Cannot contain special characters";
          }
    /******************************************************************************  */
        if(form.height === "" || form.height < 1 || form.height > 20 ){
            err.height = '❌ It must be between 1 and 20 decimeters'
        }
        if (!alphanumericRegex.test(form.height)) {
            err.height= "❌ Cannot contain special characters";
          }
    /******************************************************************************  */
        if(form.weight === "" || form.weight < 1 || form.weight > 1000 ){
            err.weight = '❌ It must have between 1 and 1000 hectograms'
        } 
        if (!alphanumericRegex.test(form.weight)) {
            err.weight = "❌ Cannot contain special characters";
          }
    /******************************************************************************  */
        if(form.types.length === 0 || form.types.length > 2 ){
            err.types = '❌ Must have 2 types at most'
        }
    /******************************************************************************  */
        if(!regexIMG.test(form.image)){
            err.image = '❌ Enter a valid url'
        }
    /******************************************************************************  */
        return err

}