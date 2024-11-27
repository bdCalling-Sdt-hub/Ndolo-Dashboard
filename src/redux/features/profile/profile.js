import { apiSlice } from "../../api/apiSlice";


const getProfile = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => `users/userInformation`,
            providesTags: [{ type: 'Settings'}]
        })
    })
})

export const {useGetProfileQuery} = getProfile;