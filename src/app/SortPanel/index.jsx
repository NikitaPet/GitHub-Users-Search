import { useContext } from 'react'
import { appContext } from 'app'

import * as Styled from './style'

export default ({ testContext }) => {
    const context = useContext(testContext || appContext)
    return (
        <Styled.Wrapper>
            <p>Сортировка:</p>
            <SortButton {...context.sorting} />
        </Styled.Wrapper>
    )
}

export const SortButton = ({ state, setState }) => {
    const { on, ascending } = state
    const changeSorting = () => {
        const newSorting = { ...state }
        newSorting.on = !on || ascending
        newSorting.ascending = !on
        setState(newSorting)
    }
    return (
        <Styled.Button onClick={changeSorting}>
            по числу репозиториев
            {on && <Detector>{ascending ? '🠉' : '🠋'}</Detector>}
        </Styled.Button>
    )
}

const Detector = ({ children }) => {
    return (
        <Styled.Detector>
            <p>{children}</p>
        </Styled.Detector>
    )
}
