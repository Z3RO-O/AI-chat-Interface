import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from '@/redux/features/navbarSlice'
import chatReducer from '@/redux/features/chatSlice'
import sidebarReducer from '@/redux/features/sidebarSlice'

export const store = configureStore({
  reducer: {
    navbar:navbarReducer,
    chat:chatReducer,
    sidebar: sidebarReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch