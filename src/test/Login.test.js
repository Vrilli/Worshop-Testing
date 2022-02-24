import  { LoginSync } from "../redux/actions/actionLogin"
import { typesLogin } from "../redux/types/types"

describe("Pruebas a  actionLogin", () => {
  test('Validar actionLogin', () => { 
    
    const  id = "Hola"
    const displayname = "Vrilli, Ándres"

    const Login = LoginSync(id, displayname)

    expect(Login).toEqual({
        type: typesLogin.login,
        payload: {
            id,
            displayname
        }
    })
   })

})