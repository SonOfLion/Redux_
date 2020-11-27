export const ADD_USER = 'USERS/ADD_USER';//Action type
export const DELETE_USER = 'USERS/DELETE_USER';//Action type

export const addUser = (user) => {//Action creator
    return {
        type: ADD_USER,//Action === obj {what at inside === Action}
        user
    };
};

export const deleteUser = (id) => {//Action creator
    return {
        type:DELETE_USER,//Action
        id
    };
};