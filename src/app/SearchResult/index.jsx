import React, { useContext, useState } from 'react'

import { useGetAllUsersQuery } from 'back/services/signApi'
import { appContext } from 'app'

import * as Styled from './style'

import Pagination from './Pagination'
import UserItem from './UserItem'

export default () => {
    const { reqLogin } = useContext(appContext)
    return reqLogin.state ? (
        <ResultDataBox />
    ) : (
        <Message>введите запрос для получения данных</Message>
    )
}

const ResultDataBox = () => {
    const [pageNum, setPageNum] = useState(1)
    const { reqLogin, sorting } = useContext(appContext)
    const { data, isLoading, error } = useGetAllUsersQuery({
        reqLogin: reqLogin.state,
        sorting: sorting.state,
        pageNum,
    })

    if (isLoading && !data) return <Message>поиск...</Message>
    if (error) return <Error error={error} />
    if (!data.items.length) return <Message>ничего не найдено</Message>

    const itemPerPage = 10
    const items = data.items.map((item) => (
        <UserItem key={item.id} data={item} />
    ))

    return (
        <Styled.Wrapper>
            <Styled.List>{items}</Styled.List>
            <Pagination
                setting={{
                    pageNum,
                    setPageNum,
                    itemPerPage,
                    resultCount: data['total_count'],
                }}
            />
        </Styled.Wrapper>
    )
}

const Message = Styled.Message
const Error = ({ error }) => {
    const { status } = error
    const message =
        status === 'FETCH_ERROR'
            ? 'ошибка сети'
            : error.data?.message || error.error
    return (
        <Message>
            {`Error #${status}:`} <br /> {message}
        </Message>
    )
}
