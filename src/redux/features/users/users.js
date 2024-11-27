 
import { apiSlice } from "../../api/apiSlice";


const allUsers = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        allUsers: builder.query({
             query: ({name = " ", date}) => `/admin-userList/showAllUser?name=${name}&date=${date}`, 
             providesTags: [{ type: "User" }],
        })
    })
})

export const {useAllUsersQuery} = allUsers;