import React, { useState } from 'react'

import * as Styled from './style'

export default ({ data }) => {
    const [detailDataDisplay, setDisplay] = useState(false)
    const propItems = []
    for (const prop in data) {
        propItems.push(<PropItem key={prop} prop={prop} value={data[prop]} />)
    }

    return (
        <Styled.Item
            activity={detailDataDisplay}
            onClick={() => {
                if (!detailDataDisplay) setDisplay(true)
            }}
        >
            <Styled.MainData>
                <img src={data.avatar_url} alt="" />
                <div>
                    <h1>{data.login}</h1>
                    <h1>{`ID: ${data.id}`}</h1>
                </div>
            </Styled.MainData>
            <Styled.DetailData>
                <table>{propItems}</table>
            </Styled.DetailData>
            <button onClick={() => setDisplay(false)}>❌</button>
        </Styled.Item>
    )
}

const PropItem = ({ prop, value }) => {
    const isValueLink = !!(String(value).indexOf('http') + 1)
    return (
        <tbody>
            <tr>
                <td>
                    <p>{prop}</p>
                </td>
                <td>
                    <p>{isValueLink ? <a href={value}>{value}</a> : value}</p>
                </td>
            </tr>
        </tbody>
    )
}
