import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState = {
  value: 0,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
})

export const {  } = productSlice.actions


export default productSlice.reducer