import styled from 'styled-components'

export const Wrapper = styled('div')`
    height: 100px;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 20px;

    p {
        color: white;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        vertical-align: center;
        text-align: center;
    }
`

export const Button = styled('button')`
    height: 48px;
    padding: 20px 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 10px;

    background-color: transparent;
    border: 2px solid white;
    border-radius: 60px;

    color: white;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    vertical-align: center;
    text-align: center;

    transition: all 0.5s ease-out;

    & span {
        margin-left: 28px;
        flex-grow: 1;
        text-align: center;
    }

    &:hover {
        background-color: white;
        transform: scale(1.1);
        color: black;
    }
`

export const Detector = styled('div')`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: #0088ff;

    display: flex;
    align-items: center;
    justify-content: center;

    & p {
        color: white;
    }
`
