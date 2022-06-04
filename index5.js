/**
 * 
 * 1. state - count = 0
 * 2. dispacth action (type, payload)
 * 3. reducer (state, action)
 * 4. store (getState(), subscribe(), dispatch())
 * 
 * * */

const { createStore } = require('redux');

const ADD_USER = 'ADD_USER';



//state
const initialCounterState = {
    users: ['Kamrul'],
    count: 1,
}

//dispatch action
const addUeser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user,
    }
}

const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}


// reducer

const userReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }

        default:
            return state;
    }
}


//store

const store = createStore(userReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addUeser('Hasan'));
store.dispatch(addUeser('Babu'));





