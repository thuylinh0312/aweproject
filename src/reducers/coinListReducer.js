const initialState = {
    list: [],
    favourite: ['1', '2', '3']
};
const coinListReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_COIN_LIST':
            return {
                ...state,
                list: action.list
            };
        case 'ADD_MORE_DATA':
            return {
                ...state,
                list: state.list.concat(action.list)
            };
        default:
            return state;
    }
}
export default coinListReducer;