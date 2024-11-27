import { apiSlice } from "../../api/apiSlice";


const getPrivacyPolicy = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPrivacyPolicy: builder.query({
            query: () => `/seating/showPrivacy`,
            providesTags: [{type: "Settings"}]
        })
    })
})

export const {useGetPrivacyPolicyQuery} = getPrivacyPolicy;