import React, { useContext, useState, useMemo } from 'react'

import Delay from 'modules/animations/Delay'
import { useGetUsersQuery } from 'data/api'
import { appContext } from 'app'

import * as Styled from './styles'

import Pagination from './Pagination'
import UserItem from './UserItem'
import Message from './Message'

import { sortByID } from './funx'

export default () => {
    const { reqLogin } = useContext(appContext)

    if (reqLogin.state) return <ResultDataBox />
    else return <Message>введите запрос для получения данных</Message>
}

const ResultDataBox = () => {
    const { reqLogin, sorting } = useContext(appContext)
    const { sortingMode, ascending } = sorting.state
    const itemPerApiPage = 100

    const response = useGetUsersQuery({ reqLogin, sorting, itemPerApiPage })
    const { data, isLoading, error } = response

    if (isLoading) return <Message>поиск...</Message>
    if (error) return <Message error>{error}</Message>
    if (!data?.items?.length) return <Message>ничего не найдено</Message>

    let items = Array.from(data.items)
    if (['id', 'login'].indexOf(sortingMode) + 1) {
        items = sortByID(items, ascending, sortingMode)
    }
    return <Result items={items} />
}

const Result = ({ items }) => {
    const resultCount = items.length
    const itemPerListPage = 10
    const pagesNum = Math.floor(resultCount / itemPerListPage) + 1

    const [pageNum, setPageNum] = useState(1)
    const itemsOnList = items.slice(10 * (pageNum - 1), 10 * pageNum)

    const setting = { setPageNum, pageNum, pagesNum }

    if (itemsOnList.length === 0) setPageNum(pagesNum)

    return (
        <Styled.Wrapper>
            <Pagination setting={setting} />
            <List items={itemsOnList} />
            <Pagination setting={setting} />
        </Styled.Wrapper>
    )
}

const List = ({ items }) => {
    return (
        <Styled.List>
            {items.map((item, i) => (
                <Delay delay={i * 50} key={item.id}>
                    <UserItem data={item} />
                </Delay>
            ))}
        </Styled.List>
    )
}
