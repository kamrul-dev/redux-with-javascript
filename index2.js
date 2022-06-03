/**
 * 
 * 1. state - count=0
 * 2. dispatch action
 * 3. reducer
 * 4. store
 * 
 * * */
const {createStore} = require("redux");

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// state
const initialStateCounter = {
    count: 0,
};

//dispatch action
const incrementAction = () => {
    return {
        type: INCREMENT,
    }
}

const decrementAction = () => {
    return {
        type: DECREMENT,
    }
}

// reducer
const counterReducer = (state =initialStateCounter, action) => {
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

        default:
            return state;
    }
}

// store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());


store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());