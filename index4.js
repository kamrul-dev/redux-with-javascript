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
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';


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

const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
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
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
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
// store.dispatch(decrementAction());

store.dispatch(incrementCounterByValue(5));

// store.dispatch(conunterReset());





