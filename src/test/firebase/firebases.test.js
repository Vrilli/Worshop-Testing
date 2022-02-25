import { getFirestore } from "firebase/firestore";
import { mockFirebase } from "firestore-jest-mock";
import { mockCollection } from "firestore-jest-mock/mocks/firestore";

mockFirebase({
    database: {
        users: [
            { id: 'abc123', name: 'Andres' },
            { id: 'abc456', name: 'Felipe' },
        ],
        movies: [
            { id: '123', title: 'Really cool movie' },
            { id: '321', title: 'Really cool movie2' }]
        ,
    },
});

test('should test fecth', () => { 
   
    

    return db
    .collection('movies')
    .get()
    .then(userDocs =>{
        expect(mockCollection).toHaveBeenCalledWith('users')
        expect(userDocs[0].name).toEqual('Andres')
    })
 })