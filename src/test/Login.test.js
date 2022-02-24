import {  isLoggedIn } from "../base/01_var"

describe("Pruebas a Login test", () => {
  test('Validar login', () => { 
    
    const isAutenticated = isLoggedIn


    if(isAutenticated){
        console.log("usuario autenticado");
    } else{
        throw new Error("Usuario no autenticado") 
    }

   })


  
    


})