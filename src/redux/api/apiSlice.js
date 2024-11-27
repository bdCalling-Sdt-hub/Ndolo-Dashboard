import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// baseUrl: "https://api.guidegadget.com/api/v1",
// http://192.168.10.168:5050
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.guidegadget.com/api/v1",
    // baseUrl: "http://192.168.10.168:5050/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      // console.log("9 baseApi", token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
 
  tagTypes: ["User", "Service", "Equipment", "Contactus", "Settings","Terms", "Waiver","Licence","Manifest"],
  endpoints: () => ({}),
});