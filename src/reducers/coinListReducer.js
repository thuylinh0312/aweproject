const initialState = {
    list: [],
    loading: false,
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

        case 'FETCH_COIN_LIST_REQUESTED':
            return {
                ...state,
                loading: true
            }

        case 'FETCH_COIN_LIST_SUCCESS':
            return {
                list: action.list,
                loading: false
            }
        default:
            return state;
    }
}
export default coinListReducer;