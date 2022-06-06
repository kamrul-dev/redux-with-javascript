// prodcutReducer

const { createStore, combineReducers } = require('redux')

//product constants
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCTS = 'ADD_PRODUCTS'


//cart constants
const GET_CART_ITEMS = 'GET_CART_ITEMS'
const ADD_CART_ITEMS = 'ADD_CART_ITEMS'

// product state 
const initialProductState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2,
}

// cart state
const initalCartState = {
    cart: ["sugar"],
    numberOfProducts: 1,
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

//cart dispatch actions
const getCart = () => {
    return {
        type: GET_CART_ITEMS,
    };
};

const addCart = (product) => {
    return {
        type: ADD_CART_ITEMS,
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

// productReducer
const cartReducer = (state = initalCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state,
            }
        case ADD_CART_ITEMS:
            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            }

        default:
            return state;
    }
}

// combine reducer 
// casue of use combineReducer is that store can store one reducer at a time.
const rootReducer = combineReducers({
    productR: prodcutReducer,
    cartR: cartReducer,
});


//Store
const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// product
store.dispatch(getProducts());
store.dispatch(addProducts('book'));

//cart
store.dispatch(getCart());
store.dispatch(addCart('pen'));