/***
 * 1. State
 * 2. Dispatch Action
 * 3. Reducer
 * 4. Store
 *  
 * */

const { createStore } = require("redux");

// Define constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';


//Step 1: Define State
//----------------- Start Define state---------------------------------
const initialCounterState = {
    count: 0
}

//----------------- End Define state---------------------------------


//Step 2: Action
//----------------- Start Action---------------------------------
// action is a object which has type and payload and it returns object
// INCREMENT
const incrementCounterAction = () => {
    return {
        type: INCREMENT,
    }
}

// DECREMENT
const decrementCounterAction = () => {
    return {
        type: DECREMENT,
    }
}

//----------------- End Action---------------------------------



// Step 3: Reducer
//----------------- Start Reducer---------------------------------
// Reducer is a pure function which take input and return output
// Reducer handle all the logic and update the state based on action type

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
        default:
            return state;
    }
}

//----------------- End Reducer---------------------------------



//Step 4: Store
//----------------- Start Store-------------------------------
/**
 * Store has three methods
 * 1. getState() : to see states condition
 * 2. dispatch() : dispatch action
 * 3. subscribe() : 
 * * */
// createStore() function will recieve reducer, action, middleware
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})


// dispatch action
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());


store.dispatch(decrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(decrementCounterAction());




//----------------- End Store---------------------------------