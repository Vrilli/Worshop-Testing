import { loginReducer } from "../../../redux/reducers/loginReducer"
import { typesLogin } from "../../../redux/types/types"

describe('Test reducers login', () => {
    test('should login', () => {
        const initState = {}
        const action = {
            type: typesLogin.login,
            payload: {
                id: '123',  
                displayname: 'Andres'
            }
        }
        const state = loginReducer(initState, action)
        expect(state).toEqual({
            id: '123',
            name: 'Andres'
        })
    })
    test('should logout', () => { 
        const initState = {
            id: '123',
            name: 'Andres'
        }
        const action = {
            type: typesLogin.logout
        }
        const state = loginReducer(initState, action)
        expect(state).toEqual({})
     })
     test('should default state', () => { 
        const initState = {
            id: '123',
            name: 'Andres'
        }
        const action = {
            type: typesLogin.error
        }
        const state =loginReducer(initState,action)
        expect(state).toEqual(initState)
      })
})