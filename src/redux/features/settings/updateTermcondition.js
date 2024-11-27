import { apiSlice } from "../../api/apiSlice";


const updateTermcondition = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateTermcondition: builder.mutation({
            query: (data) => ({
                url: `/seating/updateTerms`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: [{ type: "Terms" }]  
        })
    }),
})

export const { useUpdateTermconditionMutation } = updateTermcondition;
