import { PrivateRouter } from "../routes/PrivateRouter";
import { PublicRoutes } from "../routes/PublicRouter";




describe("Pruebas a PrivateRouter test", () => {
  test('Validar PrivateRouter', () => { 
    

    const isAutenticated = PrivateRouter;

    if(isAutenticated){
        console.log("Estas Utilizando Ruta privada");
    } else{ throw new Error("Saalistes de la ruta Privada")  }


    })

    test("Validar PublicRouter", ()  => {
      const isAutenticated = PublicRoutes;



      if(isAutenticated){
         console.log("estas usanddo ruta Pública");
      } else { throw new Error("Saliste de la ruta Pública")   }
    })

})