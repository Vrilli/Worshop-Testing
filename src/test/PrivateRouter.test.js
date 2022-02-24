
import { isPrivateRouter } from "../base/03_var";


describe("Pruebas a PrivateRouter test", () => {
  test('Validar PrivateRouter', () => { 
    

    const isAutenticated = isPrivateRouter;

    if(isAutenticated){
        console.log("Estas Utilizando Ruta privada");
    } else{ throw new Error("Saalistes de la ruta Privada")  }


    })

})