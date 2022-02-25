import thunk from "redux-thunk";
import configureStore from 'redux-mock-store'
import { registerMovieAsync } from "../../../redux/actions/actionMovies";
import { typesMovies } from "../../../redux/types/types";

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const success = () => {
    return {
        type: typesMovies.nueva
    }
}
// console.log(success);
let store = mockStore(success)

describe('Puebas actionMovies', () => {
    beforeEach(() => {
        store = mockStore(success)
    })
    test('should crear movie', async () => {
        await store.dispatch(registerMovieAsync({
            title: 'movie',
            description: 'great movie',
            poster_path: 'poster image'
        }))
        const state = store.getState()
        expect(state).toEqual(success())
    })
})




