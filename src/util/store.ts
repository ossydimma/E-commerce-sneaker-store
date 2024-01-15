import { configureStore } from '@reduxjs/toolkit'
import count from './features/count'

const store = configureStore({
  reducer: {
    counter: count,
  },
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
