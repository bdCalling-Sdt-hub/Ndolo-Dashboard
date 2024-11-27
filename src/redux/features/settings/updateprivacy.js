import { apiSlice } from "../../api/apiSlice";


const updatePrivacy = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updatePrivacy: builder.mutation({
            query: (data) => ({
                url: `/seating/updatePrivacy`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: [{type: "Settings"}]
        })
    }),
    
})

export const {useUpdatePrivacyMutation} = updatePrivacy;