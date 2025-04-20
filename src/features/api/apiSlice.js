import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' ;

export const apiSlice =createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"https://startbox-habt.onrender.com/"}),
    endpoints:(builder)=>({

        // for register user
        createUser:builder.mutation({
            query:(formdata)=>({
                url:'users/create',
                method:"POST",
                body : formdata
            })
        }),

        // for user login
        loginUser:builder.mutation({
            query:(credentials)=>({
                url :'users/login',
                method : "POST",
                body : credentials
            })
        }),

        // for get profile data
        getUserProfile:builder.query({
            query:(id)=>`users/profile/${id}`
        })

    })
})


export const {useCreateUserMutation, useLoginUserMutation ,useGetUserProfileQuery } = apiSlice ;