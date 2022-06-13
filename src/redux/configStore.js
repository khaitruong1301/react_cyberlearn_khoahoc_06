import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './reducers/shopReducer'

export const store = configureStore({
  reducer: {
      shopReducer: shopReducer
  }
})

//thunk, redux devtool