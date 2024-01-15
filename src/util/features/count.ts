import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    numb : (state) => {
      state.value = 0
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, numb } = counterSlice.actions
export default counterSlice.reducer

export const selectCount = (state:any) => state.counter.value