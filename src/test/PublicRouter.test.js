import { isPublicRouter } from "../base/04_var";


describe("Pruebas a PublicRouter test", () => {
  test('Validar PublicRouter', () => { 
    

    const isAutenticated = isPublicRouter;

    if(isAutenticated){
        console.log("Estas en Ruta Publica");
    } else{ throw new Error("Cambiaste de ruta")  }


    })

})