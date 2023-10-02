import axios from "axios"
import { GET_PRODUCT } from "./actionTypes"
import { GET_DATA_ITEMS_URL } from "../../constant"

export const fetchDataAction = () => {
    return (dispatch) => {
      dispatch(fetchDataRequest())
      axios.get(GET_DATA_ITEMS_URL)
        .then(response => {
          const {data={products}} = response
          const products = data?.products
            dispatch(fetchDataSuccess(products))
         
        })
        .catch(error => {
          dispatch(fetchDataFailure(error.message))
        })
    }
  }

  export const fetchDataSuccess = (products) => {
   return {
    type: GET_PRODUCT,
    payload: products || {}
   }
  }
  export const fetchDataRequest = () => {
    return {
      type: 'FETCH_COUNTRIES_REQUEST'
    }
  }

  export const fetchDataFailure = error => {
    return {
        type :"ERROR",
        payload: error.message
    }
  }