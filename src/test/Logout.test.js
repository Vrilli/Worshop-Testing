import { isLogoutIn } from "../base/02_var";


describe("Pruebas a Logout test", () => {
  test('Validar Logout', () => { 
    

    const isAutenticated = isLogoutIn;

    if(isAutenticated){
        console.log("Usuario deslogado");
    } else{ throw new Error("Usuario no delogueado")  }


    })

})