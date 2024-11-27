import { apiSlice } from "../../api/apiSlice";


const updatePassword = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updatePassword: builder.mutation({
            query: (data) => ({
                url: `/users/cahngePassword`,
                method: "POST",
                body: data
            })
        })
    })
})

export const {useUpdatePasswordMutation} = updatePassword;