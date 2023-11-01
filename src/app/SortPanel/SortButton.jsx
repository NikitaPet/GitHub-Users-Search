import {
    TbCircleArrowUp as ArrowUp,
    TbCircleArrowDown as ArrowDown,
} from 'react-icons/tb'
import { IconContext } from 'react-icons'

import * as Styled from './style'

export default ({ name, title, sorting }) => {
    const { state, setState } = sorting
    const { sortingMode, ascending } = state
    const isActive = sortingMode === name

    const changeSorting = () => {
        const newState = { ...state }
        if (!isActive) {
            newState.sortingMode = name
            newState.ascending = true
        } else {
            if (ascending) {
                newState.ascending = false
            } else {
                newState.sortingMode = null
                newState.ascending = null
            }
        }
        setState(newState)
    }
    return (
        <Styled.Button onClick={changeSorting}>
            <p> {title} </p>
            {isActive && <Detector ascending={ascending} />}
        </Styled.Button>
    )
}

const Detector = ({ ascending }) => {
    return (
        <IconContext.Provider value={{ color: '#0088ff', size: '32px' }}>
            <Styled.Detector>
                <p>{ascending ? <ArrowUp /> : <ArrowDown />}</p>
            </Styled.Detector>
        </IconContext.Provider>
    )
}
