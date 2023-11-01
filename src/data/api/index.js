import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BASE_API_URL = 'https://api.github.com'

const USES_TAG = { type: 'TRACKS', id: 'LIST' }

export const github = createApi({
    reducerPath: 'github',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL,
    }),

    endpoints: (builder) => ({
        getUsers: builder.query({
            query: ({ reqLogin, sorting, itemPerApiPage, pageNum = 1 }) => {
                const sortingMode = sorting.state.sortingMode

                const params = {}
                params['per_page'] = itemPerApiPage
                if (pageNum) params.page = pageNum
                if (sortingMode) {
                    params.sort = sortingMode
                    params.order = sorting.state.ascending ? 'asc' : 'desc'
                }
                const url =
                    `search/users?q=${reqLogin.state}+in:login+type:user&` +
                    new URLSearchParams(params).toString()

                return {
                    url,
                    method: 'GET',
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28',
                    },
                }
            },
            providesTags: [USES_TAG],
        }),
    }),
})

export default github
export const { useGetUsersQuery } = github
