import { useContext } from 'react'

import { appContext } from 'app'

import SortButton from './SortButton'

import * as Styled from './style'

export default () => {
    const sorting = useContext(appContext).sorting
    return (
        <Styled.Wrapper>
            <p>Сортировка:</p>

            <div>
                <SortButton
                    name={'repositories'}
                    title={'по числу репозиториев'}
                    sorting={sorting}
                />

                <SortButton
                    name={'followers'}
                    title={'по числу подписчиков'}
                    sorting={sorting}
                />

                <SortButton
                    name={'joined'}
                    title={'по дате добавления'}
                    sorting={sorting}
                />
            </div>

            <div>
                <SortButton name={'id'} title={'по ID'} sorting={sorting} />

                <SortButton
                    name={'login'}
                    title={'по логину'}
                    sorting={sorting}
                />
            </div>
        </Styled.Wrapper>
    )
}
