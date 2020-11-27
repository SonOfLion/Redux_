export const ADD_PRODUCT = 'PRODUCTS/ADD_PRODUCTS';
export const REMOVE_PRODUCT = 'PRODUCTS/REMOVE_PRODUCT';

export const addProduct = (productData) => {
    return {
        type: ADD_PRODUCT,
        payload:{
            productData,
        }
    }
}

export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        payload:{
            id
        }
    }
}