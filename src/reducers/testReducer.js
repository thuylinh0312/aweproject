const initialState = {
    a: 10
};
const testReducer = (state = initialState, action) => {
    switch(action.type) {
        // case 'SET_COIN_LIST':
        //     return {
        //         ...state,
        //         list: action.list
        //     };
        default:
            return state;
    }
}
export default testReducer;