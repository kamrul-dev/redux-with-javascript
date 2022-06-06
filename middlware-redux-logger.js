// prodcutReducer

const { createStore, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger');

//product constants
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCTS = 'ADD_PRODUCTS'


// product state 
const initialProductState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2,
}

//product dispatch actions
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    };
};

const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product
    };
};


// productReducer
const prodcutReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            }
        case ADD_PRODUCTS:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            }

        default:
            return state;
    }
}


// combine reducer 
// casue of use combineReducer is that store can store one reducer at a time.


//Store
const store = createStore(prodcutReducer, applyMiddleware(logger));

store.subscribe(() => {
    console.log(store.getState());
});

// product
store.dispatch(getProducts());
store.dispatch(addProducts('book'));

