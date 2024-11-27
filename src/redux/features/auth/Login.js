import { apiSlice } from "../../api/apiSlice";

const adminLogin = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        adminLogin: builder.mutation({
            query: (loginData) => ({
                url: `/users/signIn`,
                method: "POST",
                body: loginData
            })
        })
    })
})

export const {useAdminLoginMutation} = adminLogin;
