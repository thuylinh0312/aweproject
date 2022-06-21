import axios from "axios"

export const setCoinList = list => ({
    type: 'SET_COIN_LIST',
    list: list
  })

export const addMoreData = () => ({
    type: 'ADD_MORE_DATA',
})

export const fetchCoinList = ({start}) => ({
  start,
  type: 'FETCH_COIN_LIST_REQUESTED'
})

// export const fetchCoinList = (dispatch) => async (start) => {
//   try {
//     const {data} = await axios.get(`https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}&sort_dir=desc&limit=30`) 
//     dispatch({
//       type: 'ADD_MORE_DATA',
//       list: data.data
//     })
//   } catch (e) {
//       console.log('eeeeeee', e)
//   }
// }