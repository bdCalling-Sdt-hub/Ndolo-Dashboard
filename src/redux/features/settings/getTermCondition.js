import { apiSlice } from "../../api/apiSlice";


const getTermCondition = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTermCondition: builder.query({
            query: () => `/seating/showTerms`,
            providesTags: [{ type: "Terms" }]  
        })
    })
})

export const { useGetTermConditionQuery } = getTermCondition;
