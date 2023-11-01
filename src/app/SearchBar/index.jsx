import React, { useContext, useState } from 'react'
import { appContext } from 'app'
import * as Styled from './style'

export default () => {
    const { reqLogin } = useContext(appContext)
    const [inputValue, setValue] = useState('')
    const makeRequest = () => {
        if (inputValue) reqLogin.setState(inputValue)
    }
    return (
        <Styled.Wrapper>
            <SearchIcon onClick={makeRequest} activity={!!inputValue} />
            <Styled.Input
                type="text"
                value={inputValue}
                placeholder="Поиск по логину"
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') makeRequest()
                }}
            />
        </Styled.Wrapper>
    )
}

const SearchIcon = ({ onClick, activity }) => {
    return (
        <div>
            <Styled.Icon activity={activity} onClick={onClick}>
                <use
                    xlinkHref={`/img/icon/search.svg#${
                        activity ? 'white' : 'grey'
                    }`}
                />
            </Styled.Icon>
        </div>
    )
}
