import { apiSlice } from "./apiSlice";
import { HOLIDAY_URL } from "../constants";

export const leavesApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getHolidays: builder.query({
         query: () => ({
            url: HOLIDAY_URL
         }),
         keepUnusedDataFor: 5
      }),
      saveHoliday: builder.mutation({
         query: (data)=> ({
            url: HOLIDAY_URL,
            method: 'POST',
            body: data
         })
      }), 
      deleteHoliday: builder.mutation({
         query: (data) => ({
            url: HOLIDAY_URL,
            method: 'DELETE',
            body: data
         })
      })
   })
})

export const {useGetHolidaysQuery, useSaveHolidayMutation, useDeleteHolidayMutation} = leavesApiSlice;

