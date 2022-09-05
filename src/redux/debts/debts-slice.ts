import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IDebt } from '../../types/debt.type'

export const debtsApi = createApi({
  reducerPath: 'debtsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://my-debs.herokuapp.com/api' }),
  tagTypes: ['Debts'],
  endpoints: builder => ({
    fetchDebts: builder.query<IDebt[], void>({
      query: () => '/debts',
      providesTags: ['Debts'],
    }),
    addDebt: builder.mutation({
      query: newDebt => ({
        url: '/debts',
        method: 'POST',
        body: newDebt,
      }),
      invalidatesTags: ['Debts'],
    }),
    sendNotify: builder.mutation<void, { _id: string | undefined }>({
      query: ({ _id }) => ({
        url: `/debts/${_id}`,
        method: 'POST',
      }),
    }),
    sendExtraNotify: builder.mutation<void, { id: string | undefined; extraPayment: number }>({
      query: ({ id, extraPayment }) => ({
        url: `/debts/extra/${id}`,
        method: 'POST',
        body: { extraPayment },
      }),
    }),
  }),
})

export const { useFetchDebtsQuery, useAddDebtMutation, useSendNotifyMutation, useSendExtraNotifyMutation } = debtsApi
