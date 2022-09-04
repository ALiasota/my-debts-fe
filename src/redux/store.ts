import { configureStore } from '@reduxjs/toolkit'
import { debtsApi } from './debts'

// const middleware = [contactsApi.middleware]

export const store = configureStore({
  reducer: {
    [debtsApi.reducerPath]: debtsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(debtsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
