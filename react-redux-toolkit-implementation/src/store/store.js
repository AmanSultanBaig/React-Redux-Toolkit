import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/CartSlice'

const store = configureStore({ cart: cartReducer })

export default store