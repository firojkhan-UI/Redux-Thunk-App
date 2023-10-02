import { combineReducers } from 'redux'
import productReduicer from "./products/productReduicer"

const rootReducer = combineReducers({
  products: productReduicer,
})

export default rootReducer
