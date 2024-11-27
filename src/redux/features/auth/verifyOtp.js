import { apiSlice } from "../../api/apiSlice";


const verifyOtp = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        verifyOtp: builder.mutation({
            query: (value) => ({
                url: `/users/verify-code`,
                method: "POST",
                body: value
            })
        })
    })
})

export const {useVerifyOtpMutation} = verifyOtp;