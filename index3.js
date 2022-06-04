/**
 * 
 * 1. state - count = 0
 * 2. dispacth action (type, payload)
 * 3. reducer (state, action)
 * 4. store (getState(), subscribe(), dispatch())
 * 
 * * */

const { createStore } = require('redux');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';


//state
const initialCounterState = {
    count: 0,
}

//dispatch action
const incrementAction = () => {
    return {
        type: 'INCREMENT'
    }
}
const decrementAction = () => {
    return {
        type: 'DECREMENT'
    }
}

//Reset
const conunterReset = () => {
    return {
        type: RESET,
    }
}

// reducer

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }

        default:
            return state;
    }
}


//store

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());

store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());

store.dispatch(conunterReset());





