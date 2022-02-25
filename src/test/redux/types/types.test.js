import { typesFavs, typesLogin, typesMovies, typesSearch } from "../../../redux/types/types"

describe('Verificar types', () => {
    test(' should comparar typesLogin ', () => {
        expect(typesLogin).toEqual({
            login: 'Login',
            logout: 'Logout',
            registro: 'Registro'

        })
    })
    test('should comaparar typesMovies', () => {
        expect(typesMovies).toEqual({
            listar: 'Listar',
            nueva: 'Nueva',
            editar: 'Editar',
            borrar: 'Borrar'
        })
    })
    test('should comaparar typesFavs', () => {
        expect(typesFavs).toEqual({
            listar: 'ListarF',
            borrar: 'BorrarF',
            nuevo: 'NuevoF'
        })
    })
    test('should comaparar typesSearch', () => {
        expect(typesSearch).toEqual({
            search: 'Search',
            listart: 'ListarRsults'
        })
    })
})